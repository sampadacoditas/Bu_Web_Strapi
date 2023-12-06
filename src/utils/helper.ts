export const ServicesContactUS = () => {
  const element = document.getElementById("contact-us");
  if (!element) {
    return;
  }
  const headerOffset = 64;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const replaceStrong = (data: any) => {
  return data?.replaceAll("<strong>", "").replaceAll("</strong>", "");
};

export const openFileInTab = (url: string, typeToOpen = "_self") => {
  window.open(url, typeToOpen);
};

export const encodeParam = (param: string) => {
  return encodeURIComponent(param);
};

export const decodeParam = (param: string) => {
  return decodeURIComponent(param);
};
export const getFormattedCaseStudyData = (data: any) => {
  let formattedData: any[] = [];
  data.map((item: any) => {
    item?.attributes && formattedData.push(item?.attributes);
  });
  return formattedData;
};
export const getFilteredCaseStudy = (data: any, serviceName: string) => {
  let formattedData: any[] = [];
  formattedData = data.filter((obj: any) => {
    return obj.serviceName === serviceName;
  });
  return formattedData;
};

export const getImageUrl = (image: any) => {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
  const imageUrl = image?.data?.attributes?.url || "";
  return `${baseURL}${imageUrl}`;
}
