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
};

const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                                
export const isValidURL = (str: string) => {
    return !!urlPattern.test(str);
}

export const mapArrayImages = (arr: any) => arr?.svgs?.reduce((acc: any, curr: any) => {
  acc[curr.label] = curr?.value;
  return acc;
}, [])

export const mappedIconsArr = (arr: any) => arr?.reduce((acc: any, curr: any) => {
  acc[curr?.label] = curr?.value ?? curr?.label;
  return acc;
}, [])