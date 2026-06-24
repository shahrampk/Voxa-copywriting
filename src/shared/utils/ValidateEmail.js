export function isValidEmail(email) {
  // This standard regex checks for: text + @ + text + . + text
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
