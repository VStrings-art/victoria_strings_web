export type Instrument = {
  slug: string;
  title: string;
  images: [string, string, string];
  caption: string;
  /**
   * Three words for the instrument's voice, shown under its name on the
   * collection card. Drawn from the caption, never invented.
   */
  character?: string;
};
