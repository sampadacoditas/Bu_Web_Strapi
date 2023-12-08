import React from "react";
import style from "./Card.module.scss";
import { ICardProps } from "./ICard.ts";
import { useRouter } from "next/router";
import { getImageUrl } from "@/utils/helper.ts";

const Card = (props: ICardProps) => {
  const { push } = useRouter();
  const { item: itemProp, theme: themeProp, customStyle: customStyleProp } = props;
  const { tag, description, image, link, linkText = "Read more", isExternalLink } = itemProp;
  const theme = themeProp ?? "light";
  const customStyle = customStyleProp;

  function routeToPage(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    if (isExternalLink) {
      window.open(link, "_blank");
    } else {
      push(link);
    }
  }
  const tagSpan = tag ? <span className={style.cardTag}>{tag}</span> : null;
  return (
    <div className={`${style.card} ${style[theme + "Card"]}`}>
      <div
        className={style.cardImage}
        style={{ backgroundImage: `url(${getImageUrl(image)})`, height: customStyle?.imgHeight ?? "10rem" }}
      >
        {tagSpan}
      </div>

      <div className={`${style.cardDescription} ${style.themeBasedCardDescription}`}>
        <div className={style.lineClamped}>{description}</div>
      </div>
      <a href={link} className={style.cardLink} onClick={routeToPage}>
        {linkText}
      </a>
    </div>
  );
};

export default Card;
