// Modules

declare module 'citation-js' {
  export = Cite;
}

declare module 'react-html-parser' {
  import {ReactElement} from 'react';

  interface Node {
    type: string;
    name: string;
    children: any[];
    next: any;
    prev: any;
    parent: any;
    data: string;
  }

  type TransformFunction = (
    node: Node,
    index: number
  ) => ReactElement<any> | undefined | null;

  export default function ReactHtmlParser(
    html: string,
    options?: {
      decodeEntities?: boolean;
      transform?: TransformFunction;
      preprocessNodes?: (nodes: any) => any;
    }
  ): ReactElement<any>;

  export function convertNodeToElement(
    node: Node,
    index: number,
    transform: TransformFunction
  ): ReactElement<any>;
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
