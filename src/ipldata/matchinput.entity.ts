import { identity } from 'rxjs';

export class MatchInput {
  id: string;
  city: string;
  date: string;
  player_of_match: string;
  venue: string;
  neutral_venue: string;
  team1: string;
  team2: string;
  toss_winner: string;
  toss_decision: string;
  winner: string;
  result: string;
  result_margin: string;
  eliminator: string;
  method: string;
  umpire1: string;
  umpire2: string;
}
