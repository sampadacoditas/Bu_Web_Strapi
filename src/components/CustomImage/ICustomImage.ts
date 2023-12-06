import type { ImageProps } from "next/image";

export interface ICustomImage extends ImageProps{
    src: string;
    alt: string;
}