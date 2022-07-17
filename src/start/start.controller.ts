import { Controller, Edit, Keyboard, MessageSend, OnClick, OnCommand } from 'nestgram';
import { StartService } from './start.service';

@Controller()
export class StartController {
  constructor(private readonly startService: StartService) {}

  @OnCommand('start')
  start(): MessageSend {
    return new MessageSend(
      this.startService.helloWorldMessage,
      new Keyboard()
        .btn(this.startService.forDevelopersTitle, 'devs'),
    );
  }

  @OnClick('devs')
  getDevInfo(): Edit {
    return new Edit(
      this.startService.devsInfoMessage,
      null, // keyboard
      // @ts-ignore
      { disable_web_page_preview: true, parse_mode: 'HTML' },
    );
  }
}
