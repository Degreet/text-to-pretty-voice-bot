import { CONVERT_PYTHON_FILE_PATH } from '../types/constants';
import { exec } from 'child_process';
import { Service } from 'nestgram';

import * as path from 'path';
import * as fs from 'fs/promises';

@Service()
export class ConvertService {
  get errorBasicMessage(): string {
    return 'Ошибка. Повторите попытку позже';
  }

  get convertingMessage(): string {
    return 'Конвертируем...';
  }

  get convertRulesMessage(): string {
    return `
      🧐 <b>Для начала</b>, убедитесь что в вашем тексте нет латинских букв.
      В нашем боте поддерживается только кириллица. Если вы хотите
      изменить текст, просто отправьте новый
    `.trim().replace(/  /g, '').replace(/\n/g, ' ') 
      + '\n\n😎 <b>Если вы готовы</b> к конвертации, выберите голос:';
  }

  async convert(text: string, voice: string, callback?: Function): Promise<void> {
    try {
      const id: number = Math.floor(Math.random() * 9999999);
      const runPath: string = `python ${CONVERT_PYTHON_FILE_PATH} ${id} ${voice} ${text}`;

      exec(runPath, async (): Promise<void> => {
        const filePath: string = path.resolve(__dirname, '..', 'assets', `${id}.wav`);

        if (callback) {
          try {
            await callback(filePath);
          } catch (e: any) {
            console.warn(e);
            callback(filePath);
          }
        }

        await fs.rm(filePath);
      });
    } catch (e: any) {
      console.error(e);
    }
  }
}
