import { ROUTES } from "@/constants/routeConstants";
import axiosInstance from "@/services/axios.instance";

const careerBaseURL = process.env.NEXT_PUBLIC_CAREER_URL || "";;
const instance = axiosInstance(careerBaseURL);

export const getCareerJobDescription = async (jobId: string | undefined) => {
  try {
    const res = await instance.get(`${ROUTES.jobDescription}?jobId=${jobId}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};
