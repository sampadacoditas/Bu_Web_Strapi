// for svg named export 
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.pdf';
// react-typist-component.d.ts
declare module "react-typist-component" {
  import { ComponentType, ReactNode } from "react";

  interface TypistProps {
    cursor?: ReactNode;
    avgTypingDelay?: number;
    onTypingDone?: () => void;
    children: ReactNode;
  }

  interface BackspaceProps {
    count?: number;
    delay?: number;
  }

  interface DelayProps {
    ms?: number;
  }

  const Typist: ComponentType<TypistProps> & {
    Backspace: ComponentType<BackspaceProps>;
    Delay: ComponentType<DelayProps>;
  };

  export default Typist;
}