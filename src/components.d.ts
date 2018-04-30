/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ChuckNorrisJokes {
      'firstname': string;
      'lastname': string;
    }
  }

  interface HTMLChuckNorrisJokesElement extends StencilComponents.ChuckNorrisJokes, HTMLStencilElement {}

  var HTMLChuckNorrisJokesElement: {
    prototype: HTMLChuckNorrisJokesElement;
    new (): HTMLChuckNorrisJokesElement;
  };
  interface HTMLElementTagNameMap {
    'chuck-norris-jokes': HTMLChuckNorrisJokesElement;
  }
  interface ElementTagNameMap {
    'chuck-norris-jokes': HTMLChuckNorrisJokesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'chuck-norris-jokes': JSXElements.ChuckNorrisJokesAttributes;
    }
  }
  namespace JSXElements {
    export interface ChuckNorrisJokesAttributes extends HTMLAttributes {
      'firstname'?: string;
      'lastname'?: string;
      'onSelectLikeButton'?: (event: CustomEvent) => void;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
