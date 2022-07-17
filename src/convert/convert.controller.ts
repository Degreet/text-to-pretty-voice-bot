import { Text, OnText, GetAnswerContext, Answer, Voice, Controller, GetState, MessageSend, Keyboard, OnClick, Params } from 'nestgram';
import { ConvertService } from './convert.service';

import { IParams } from '../types/params.types';
import { IState } from '../types/state.types';

@Controller()
export class ConvertController {
  @GetAnswerContext() answer: Answer;
  @GetState() state: IState;

  constructor(private readonly convertService: ConvertService) {}

  @OnText()
  selectVoice(@Text() text: string): MessageSend | string {
    try {
      this.state.text = text;

      return new MessageSend(
        this.convertService.convertRulesMessage,
        new Keyboard()
          .btn('Мужской', 'male')
          .btn('Женский', 'female'),
      )
    } catch (e: any) {
      console.error(e);
      return this.convertService.errorBasicMessage;
    }
  }

  @OnClick(/(.*)/g)
  async convertTextToVoice(@Params() params: IParams): Promise<any> {
    try {
      if (!this.state.text) return this.convertService.errorBasicMessage;
      await this.answer.edit(this.convertService.convertingMessage);

      await this.convertService.convert(
        this.state.text,
        params._match[0],
        async (filePath: string): Promise<void> => {
          try {
            await this.answer.send(new Voice('path', filePath));
          } catch (e: any) {
            console.error(e);
          }
        }
      );
    } catch (e: any) {
      console.error(e);
      return this.convertService.errorBasicMessage;
    }
  }
}
