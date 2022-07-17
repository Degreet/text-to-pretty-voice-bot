import { Service } from 'nestgram';

@Service()
export class StartService {
  private nestgramWebsiteLink = 'https://degreetpro.gitbook.io/nestgram/';
  private repositoryLink = 'https://github.com/Degreet/text-to-pretty-voice-bot';
  private developerLink = 'https://t.me/degreet';

  get helloWorldMessage(): string {
    return `👋 <b>Привет!</b> Отправь сюда любой текст, и я переведу его тебе в голосовое сообщение!`;
  }

  get forDevelopersTitle(): string {
    return '⚙️ Для разработчиков';
  }

  get devsInfoMessage(): string {
    return `🤖 <b>Проект написан</b> на <a href="${this.nestgramWebsiteLink}">Nestgram</a>\n` +
      `🐍 <b>Конвертация голоса</b> с помощью <b>Python</b>\n\n` +
      `🔗 <a href="${this.repositoryLink}">Репозиторий на Github</a>\n` +
      `👨🏻‍💻 <a href="${this.developerLink}">Разработчик</a>`;
  }
}
