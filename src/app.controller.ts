import { Controller } from 'nestgram';
import { AppService } from './app.service';

/**
 * Getting started by guide
 * https://degreetpro.gitbook.io/nestgram/getting-started/guide
 * */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
