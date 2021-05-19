import { Module } from '@nestjs/common';
//import { CsvModule } from 'nest-csv-parser';
import { IpldataModule } from './ipldata/ipldata.module';

@Module({
  imports: [IpldataModule],
})
export class AppModule {}
