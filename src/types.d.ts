// Modules

declare module 'citation-js' {  
  // import Cite from '@citation-js/plugin-bibtex'

   class Cite {
    constructor(
      data: string | object,
      options?: object,
      );

    format(
      format: string,
      options?: object
      ): string;
  }
  export default Cite;
}

// declare module 'citation-js';

declare module '!!raw-loader!*' {
  const contents: string
  export = contents
}

declare module '*.bib' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}
