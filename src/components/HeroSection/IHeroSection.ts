type backgroundPosition = "center" | "left" | "right" | "bottom";

interface IImagesArray {
  imgSrc: string;
  altText: string;
}
export interface IHeroSection {
  title: string;
  description?: string;
  image: string;
  backgroundPosition?: backgroundPosition;
  contentContainerStyle: string;
  heroSectionGradientStyle: string;
  handleContactUsClick?: () => void;
  handleJoinUsClick?: () => void;
  showContactUsButton?: boolean;
  showJoinUsButton?: boolean;
  imagesArray?: Array<IImagesArray>;
  imageArrayText?: string;
  customIconStyle?: string;
  customTitleStyle?: string;
  page?: string;
  titleArray?: {
    digitalEngineering: "";
    cleanCoding: "";
    designThinking: "";
    dataScience: "";
    qualityTesting: "";
    generativeAI: "";
  };
  buttonText?: string;
  buttonSvg?: string;
}
