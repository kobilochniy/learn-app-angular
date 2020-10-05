export interface Translation {
  id: string;
  text: string;
}

export interface Word {
  id: string;
  text: string;
  translations: Translation[];
}

export interface Datum {
  id: number;
  text: string;
}

export interface Answers {
  data: Datum[];
}

export interface Test {
  word: Word;
  answers: Answers;
}

