import { Injectable } from '@nestjs/common';
import { CsvParser } from 'nest-csv-parser';
import * as fs from 'fs';
import { MatchInput } from './matchinput.entity';
import { Match } from './match.entity';
import { Team } from './team.entity';

class User {
  firstname: string;
  lastname: string;
  middlename: string;
}

@Injectable()
export class IpldataService {
  private matchesInput: MatchInput[] = [];
  private matches: Match[] = [];
  private teams = {};

  constructor(private readonly csvParser: CsvParser) {
    this.parse();
  }

  getTeamByName(name): any {
    const { id, teamName, totalMatches, totalWins } = this.teams[name];
    return {
      id,
      teamName,
      totalMatches,
      totalWins,
      matches: this.getTeamMatches(teamName, null, 4),
    };
  }

  getTeamMatches(name, year, count = 0): Match[] {
    const team: Team = this.teams[name];
    const allmatches: Match[] = team.matches;
    let matches;
    if (year) {
      matches = allmatches.filter((m) => year == m.date.getFullYear());
    } else {
      matches = allmatches;
    }

    if (count > 0) matches = matches.slice(0, count);
    return matches;
  }

  getAllTeamNames(): string[] {
    return Object.keys(this.teams);
  }

  getAllTeams() {
    const teams = [];
    Object.keys(this.teams).map((t: string) => {
      const { id, teamName, totalMatches, totalWins } = this.teams[t];

      teams.push({
        id,
        teamName,
        totalMatches,
        totalWins,
        matches: this.getTeamMatches(teamName, null, 4),
      });
    });

    return teams;
  }

  private async parse() {
    // Create stream from file (or get it from S3)

    const stream = fs.createReadStream(__dirname + '/../../match-data.csv');
    const entities = await this.csvParser.parse(
      stream,
      MatchInput,
      null,
      null,
      {
        separator: ',',
      },
    );

    console.log(`Match Input has ${entities.total} results`);
    this.matchesInput = entities.list;
    this.processMatches(this.matchesInput);
    console.log(`Matches: ${this.matches.length} results`);
    this.procesTeams(this.matches);
    console.log(`Teams: ${Object.keys(this.teams)}`);
  }

  private processMatches(matchInputs: MatchInput[]) {
    matchInputs.map((matchInput) => {
      const match = new Match();
      match.id = +matchInput.id;
      match.city = matchInput.city;
      match.date = new Date(matchInput.date);
      match.playerOfMatch = matchInput.player_of_match;
      match.venue = matchInput.venue;
      // Set Team 1 and Team 2 depending on the innings order

      let firstInningsTeam: string;
      let secondInningsTeam: string;

      if (matchInput.toss_decision === 'bat') {
        firstInningsTeam = matchInput.toss_winner;
        secondInningsTeam =
          matchInput.toss_winner === matchInput.team1
            ? matchInput.team2
            : matchInput.team1;
      } else {
        secondInningsTeam = matchInput.toss_winner;
        firstInningsTeam =
          matchInput.toss_winner === matchInput.team1
            ? matchInput.team2
            : matchInput.team1;
      }

      match.team1 = firstInningsTeam;
      match.team2 = secondInningsTeam;
      match.tossWinner = matchInput.toss_winner;
      match.tossDecision = matchInput.toss_decision;
      match.matchWinner = matchInput.winner;
      match.result = matchInput.result;
      match.resultMargin = matchInput.result_margin;
      match.umpire1 = matchInput.umpire1;
      match.umpire2 = matchInput.umpire2;

      this.matches.push(match);
    });

    this.matches.sort((match1: Match, match2: Match) => {
      if (match1.date === match2.date) return 0;
      if (match1.date > match2.date) return -1;
      if (match1.date < match2.date) return 1;
    });
  }

  private procesTeams(matches: Match[]) {
    let id = 1;
    matches.map((m) => {
      //Team1
      let team1: Team;
      if (this.teams[m.team1]) {
        team1 = this.teams[m.team1];
      } else {
        team1 = new Team();
        team1.teamName = m.team1;
        team1.id = id++;
        console.log(`Team ${team1.teamName} is id: ${team1.id}`);
      }
      team1.totalMatches += 1;
      if (m.team1 === m.matchWinner) {
        team1.totalWins += 1;
      }
      team1.matches.push(m);

      this.teams[team1.teamName] = team1;

      //Team2
      let team2: Team;
      if (this.teams[m.team2]) {
        team2 = this.teams[m.team2];
      } else {
        team2 = new Team();
        team2.teamName = m.team2;
        team2.id = id++;
        console.log(`Team ${team2.teamName} is id: ${team2.id}`);
      }
      team2.totalMatches += 1;
      if (m.team2 === m.matchWinner) {
        team2.totalWins += 1;
      }
      team2.matches.push(m);

      this.teams[team2.teamName] = team2;
    });
  }
}
