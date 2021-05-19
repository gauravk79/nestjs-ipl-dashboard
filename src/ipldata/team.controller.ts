import { Controller, Get, Param, Query } from '@nestjs/common';
import { IpldataService } from './ipldata.service';
import { Match } from './match.entity';
import { Team } from './team.entity';

@Controller('teams')
export class TeamController {
  constructor(private ipldataService: IpldataService) {}

  @Get()
  getAllTeams() {
    return this.ipldataService.getAllTeams();
  }

  @Get('/:name')
  getTeam(@Param('name') teamname: string) {
    return this.ipldataService.getTeamByName(teamname);
  }

  @Get('/:name/matches')
  getTeamMatches(
    @Param('name') teamname: string,
    @Query('year') year: number,
    @Query('count') count: number,
  ) {
    console.log(year);
    return this.ipldataService.getTeamMatches(teamname, year, count);
  }
}
