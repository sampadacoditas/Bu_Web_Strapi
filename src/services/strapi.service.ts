import { ROUTES } from "@/constants/routeConstants";
import axiosInstance from "./axios.instance";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const instance = axiosInstance(baseURL);

export const getPageData = async (pageName: string, query?: string) => {
  try {
    query = query || `filters[primary_key][$eq]=${pageName}`;
    const res = await instance.get(`${ROUTES?.pageData}${query}`);
    return res?.data?.data[0] || {};
  } catch (e) {
    console.error(e);
  }
};

export const getHeaderFooterData = async () => {
  try {
    const res = await instance.get(`${ROUTES?.headerFooter}`);
    return res?.data?.data[0] || {};
  } catch (e) {
    console.error(e);
  }
};
export const getCaseStudyData = async (serviceName?: string, query?: string) => {
  try {
    query = query || `?populate=deep&filters[serviceName][$eq]=${serviceName}`;
    const res = await instance.get(`${ROUTES?.caseStudy}${query}`);
    return res?.data?.data || [];
  } catch (e) {
    console.error(e);
  }
};

export const getMetaData = async (pageName?: string, query?: string) => {
  try {
    query = query || `?populate=*&filters[primary_key][$eq]=${pageName}&filters[tag][$eq]=bu`;
    const res = await instance.get(`/api/meta-infos${query}`);
    return res?.data?.data[0];
  } catch (e) {
    console.error(e);
  }
};
