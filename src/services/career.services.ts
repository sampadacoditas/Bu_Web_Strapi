import { ROUTES } from "@/constants/routeConstants";
import axiosInstance from "./axios.instance";

const careerBaseURL = process.env.NEXT_PUBLIC_CAREER_URL || "";
const instance = axiosInstance(careerBaseURL);

export const getCareerOpenings = async () => {
  try {
    const res = await instance.get(ROUTES.jobOpenings);
    return res;
  } catch (e) {
    console.error(e);
  }
};
