import torch
import torchaudio
import sys

args = sys.argv
language = 'ru'
model_id = 'ru_v3'
sample_rate = 48000
speaker = 'baya'
put_accent = True
put_yo = True
device = torch.device('cpu')

file_id = str(args[1])
voice = str(args[2])
text = str(' '.join(args[3:]))
print(file_id, voice, text)

if voice == 'male':
    speaker = 'aidar'

model, _ = torch.hub.load(repo_or_dir='snakers4/silero-models',
                          model='silero_tts',
                          language=language,
                          speaker=model_id)

model.to(device)

audio = model.apply_tts(text=text,
                        speaker=speaker,
                        sample_rate=sample_rate,
                        put_accent=put_accent,
                        put_yo=put_yo)

torchaudio.save(f'src/assets/{file_id}.wav',
                  audio.unsqueeze(0),
                  sample_rate=sample_rate)

quit()