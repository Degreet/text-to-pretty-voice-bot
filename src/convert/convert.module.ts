import { Module } from 'nestgram';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';

@Module({
  controllers: [ConvertController],
  services: [ConvertService],
})
export class ConvertModule {}
