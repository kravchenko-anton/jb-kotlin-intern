declare module "highlight.js/lib/core" {
  const hljs: {
    registerLanguage: (name: string, lang: unknown) => void;
    highlightBlock?: (el: HTMLElement) => void;
    highlightElement?: (el: HTMLElement) => void;
  };
  export default hljs;
}

declare module "highlight.js/lib/languages/kotlin" {
  const kotlin: unknown;
  export default kotlin;
}
