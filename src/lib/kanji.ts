export interface Reference<T = string> {
	value: T;
	source: string;
}

export interface Query extends Reference {
	misclass?: string;
}

export interface Part {
	value: string;
	lang: string;
}

export interface ReadingMeaning {
	readings: Part[];
	meanings: Part[];
}

export interface Kanji {
	literal: string;
	codepoint?: Reference[];
	radical?: Reference<number>[];
	grade?: number;
	stroke_count: number[];
	variant?: Reference[];
	freq?: number;
	rad_name?: string[];
	jlpt?: number;
	dict?: Reference[];
	query?: Query[];
	entries?: ReadingMeaning[];
	nanori?: string[];
}
