import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServModule } from './serv/serv.module';

@Module({
  imports: [ServModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
