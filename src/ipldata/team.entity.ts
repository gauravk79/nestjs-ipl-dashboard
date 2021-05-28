import { Match } from './match.entity';
export class Team {
  id: number = 0;
  teamName: string;
  totalMatches = 0;
  totalWins = 0;
  matches: Match[] = [];
}
