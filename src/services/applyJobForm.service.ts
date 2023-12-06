import FormData from "form-data";
import { ROUTES } from "@/constants/routeConstants";
import axiosInstance from "./axios.instance";
import { FORM_HEADERS } from "@/constants/constants";

//sample contact form api call
const baseURL = process.env.NEXT_PUBLIC_CAREER_URL || "";
const instance = axiosInstance(baseURL);

export const ApplyJobForm = async (payload: any, resume: any) => {
  try {
    const formData: any = new FormData();
    formData.append("First_Name", payload?.First_Name);
    formData.append("Last_Name", payload?.Last_Name);
    formData.append("Mobile", payload?.Mobile);
    formData.append("Email", payload?.Email);
    formData.append("Total_Experience", payload?.Total_Experience);
    formData.append("City", payload?.City);
    formData.append("Current_Employer", payload?.Current_Employer);
    formData.append("Current_Salary", payload?.Current_Salary);
    formData.append("Notice_Period", payload?.Notice_Period?.value);
    formData.append("Last_Working_Day", payload?.Last_Working_Day);
    formData.append("Current_Job_Title", payload?.Current_Job_Title);
    formData.append("Resume", resume as Blob);
    formData.append("Resume_filename", payload?.Resume_filename);
    formData.append("jobId", payload?.jobId);
    const res = await instance.post(ROUTES?.applyJobForm, formData, {
      headers: {
        "Content-Type": FORM_HEADERS?.multiPartFormHeader,
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};
