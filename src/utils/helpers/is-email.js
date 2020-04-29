export function isEmail(email = '') {
  if (email) {
    email = email.toString().trim();
    return email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ? false
      : true;
  } else {
    return false;
  }
}
