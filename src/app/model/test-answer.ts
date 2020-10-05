export interface Translation {
  id: number;
  text: string;
}

export interface Word {
  id: number;
  text: string;
  translations: Translation[];
}

export interface TestAnswer {
  word: Word;
  result: boolean;
}
