import { ENV_VARIABLES } from "@/constants/constants";
import axiosInstance from "./axios.instance";
import { ROUTES } from "@/constants/routeConstants";

const environment = process.env.NEXT_PUBLIC_NODE_ENV;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const instance = axiosInstance(baseURL);

export const ContactUsPageForm = async (payload: any) => {
  try {
    const res = await instance.post(
      environment === ENV_VARIABLES.prod ? ROUTES.sendCoditasEnquiryMail : ROUTES.sendCoditasEnquiryMailTest,
      payload,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
