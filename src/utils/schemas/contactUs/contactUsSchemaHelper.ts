export const mobileNumberRegexValidator = (value: string, regex: RegExp) => {
  if (value) {
    const [, mobileNumber] = value.trim().split(" ");
    if (mobileNumber) {
      return regex.test(mobileNumber);
    }
  }
  return false;
};
