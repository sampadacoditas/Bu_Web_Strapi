import { StaticImageData } from "next/image";

interface IHeaderModal {
  image: string;
  name: string;
  position: string;
}
export interface IModalProps {
  children: any;
  onClose?: React.MouseEventHandler<HTMLElement>;
  customStyle?: string;
  customBackdrop?: string;
  header?: IHeaderModal;
  isOpen?: boolean;
  commonSvgs?:{[key: string]: string};
}
