export interface Message {
  id: string,
  sender: string,
  content: string,
  dateTime: Date,
}
export enum MESSAGE_TYPE {
  USER = "user",
  ASSISTANT = "assistant"
}

export interface OpenAIResponse {
  content: string,
  run_id: string,
  thread_id: string
}

export class CharacterConstants  {

   public static readonly CHARACTERS = [
    {
      name: 'Shijuka,21',
      image: '../assets/anime/character_1/school_dress_closeup.png',
      Desc: '  Shizuka is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Ania, 30',
      image: '../assets/anime/character_1/ComfyUI_00080_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Shivoka, 22',
      image: '../assets/anime/character_1/ComfyUI_00094_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Katrina, 29',
      image: '../assets/anime/character_1/ComfyUI_00095_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Deepika, 40',
      image: '../assets/anime/character_1/ComfyUI_00098_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
    {
      name: 'Lina, 19',
      image: '../assets/anime/character_1/ComfyUI_00103_.png',
      Desc: '  Ania is a smart and kind neighbourhood girl. She is, unlike Nobita, a quick-witted and very studious child. Shizuka loves to bathe and does it several times.',
    },
  ];
}
export interface LLamaAIResponse {
  content: string,
}

