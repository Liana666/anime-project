export function isValidEmail(targetValue: string) {
  const mailformat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const isValidEmail = mailformat.test(String(targetValue).toLowerCase());

  return isValidEmail ? "" : "invalid email";
}
