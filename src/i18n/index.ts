import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { de } from "./dictionaries/de";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { es } from "./dictionaries/es";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";

import type { InstrumentText } from "./instruments/types";
import { instrumentsDe } from "./instruments/de";
import { instrumentsFr } from "./instruments/fr";
import { instrumentsIt } from "./instruments/it";
import { instrumentsEs } from "./instruments/es";
import { instrumentsJa } from "./instruments/ja";
import { instrumentsKo } from "./instruments/ko";

import type { Instrument } from "@/lib/instrument-types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, de, fr, it, es, ja, ko };

/** English lives in the instrument data itself, so it has no override table. */
const INSTRUMENT_TEXT: Record<Locale, Record<string, InstrumentText>> = {
  en: {},
  de: instrumentsDe,
  fr: instrumentsFr,
  it: instrumentsIt,
  es: instrumentsEs,
  ja: instrumentsJa,
  ko: instrumentsKo,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

/**
 * Returns the instrument with its caption and voice line in the given locale,
 * falling back to the English text when a translation is missing. Names are
 * proper nouns and never translated.
 */
export function localise(instrument: Instrument, locale: Locale): Instrument {
  const text = INSTRUMENT_TEXT[locale]?.[instrument.slug];
  if (!text) return instrument;
  return { ...instrument, caption: text.caption, character: text.character };
}

export function localiseAll(instruments: Instrument[], locale: Locale): Instrument[] {
  return instruments.map((i) => localise(i, locale));
}

export type { Dictionary };
