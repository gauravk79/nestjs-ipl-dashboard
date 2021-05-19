import { Match } from './match.entity';
export class Team {
  id: number;
  teamName: string;
  totalMatches = 0;
  totalWins = 0;
  matches: Match[] = [];
}
