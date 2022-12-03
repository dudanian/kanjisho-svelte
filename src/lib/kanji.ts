export interface References {
	ucs: string;
	jis208?: string;
	jis212?: string;
	jis213?: string;
	rtk?: number;
	klc?: number;
}

export interface Info {
	radical: number;
	radical_n: number;
	stroke_count: number;
	grade?: number;
	freq?: number;
	jlpt?: number;
	jlptn?: number;
}

export interface Kanji {
	literal: string;
	info: Info;
	references: References;
	on_readings?: string[];
	kun_readings?: string[];
	meanings?: string[];
	nanoris?: string[];
}
