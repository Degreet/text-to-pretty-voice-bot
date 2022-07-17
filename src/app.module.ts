import { Module } from 'nestgram';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertModule } from './convert/convert.module';
import { StartModule } from './start/start.module';

@Module({
  imports: [StartModule, ConvertModule],
  controllers: [AppController],
  services: [AppService],
})
export class AppModule {}
