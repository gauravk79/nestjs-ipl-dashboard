import { Module } from '@nestjs/common';
//import { CsvModule } from 'nest-csv-parser';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { IpldataModule } from './ipldata/ipldata.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    IpldataModule,
  ],
})
export class AppModule {}
