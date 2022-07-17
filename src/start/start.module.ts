import { Module } from 'nestgram';
import { StartController } from './start.controller';
import { StartService } from './start.service';

@Module({
  controllers: [StartController],
  services: [StartService],
})
export class StartModule {}
