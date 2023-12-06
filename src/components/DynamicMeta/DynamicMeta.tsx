import React, { useEffect } from "react";
import { PageMetaProps } from "./DynamicMeta.data";
import { EXTERNAL_ROUTES } from "@/constants/constants";

const DynamicMetaTags: React.FC<PageMetaProps> = ({ title, description, image }) => {
  const updateMetaTags = () => {
    const metaTags: HTMLMetaElement[] = [];

    document.title = title;

    const imageMeta = document.createElement("meta");
    imageMeta.name = "image";
    imageMeta.content = image || EXTERNAL_ROUTES.META_IMAGE;
    metaTags.push(imageMeta);

    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content = description;
    metaTags.push(descriptionMeta);

    const ogTitleMeta = document.createElement("meta");
    ogTitleMeta.setAttribute("property", "og:title");
    ogTitleMeta.content = title;
    metaTags.push(ogTitleMeta);

    const ogDescriptionMeta = document.createElement("meta");
    ogDescriptionMeta.setAttribute("property", "og:description");
    ogDescriptionMeta.content = description;
    metaTags.push(ogDescriptionMeta);

    if (image) {
      const ogImageMeta = document.createElement("meta");
      ogImageMeta.setAttribute("property", "og:image");
      ogImageMeta.content = image;
      metaTags.push(ogImageMeta);
    } else {
      const ogImageMeta = document.createElement("meta");
      ogImageMeta.setAttribute("property", "og:image");
      ogImageMeta.content = EXTERNAL_ROUTES.META_IMAGE;
    }

    metaTags.forEach(tag => document.head.prepend(tag));
    return metaTags;
  };

  useEffect(() => {
    const metaTags = updateMetaTags();

    return () => {
      metaTags.forEach(tag => document.head.removeChild(tag));
    };
  }, [title, description, image]);

  return null;
};

export default DynamicMetaTags;
