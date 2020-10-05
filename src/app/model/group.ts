export interface Language {
  id: number;
  code: string;
  name: string;
}

export interface Translation {
  id: number;
  code: string;
  name: string;
}

export interface Group {
  id: number;
  name: string;
  language: Language;
  translation: Translation;
}


