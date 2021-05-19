import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { IpldataService } from './ipldata.service';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [CsvModule],
  controllers: [TeamController],
  providers: [IpldataService],
})
export class IpldataModule {}
