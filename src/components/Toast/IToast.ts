export type type = "success" | "error";

export interface IToast {
  type: type;
  title: string;
  message: string;
}
