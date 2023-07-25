export const isValidFullName = (name) => {
  // Regex pattern for full name (allowing alphabets, spaces, and hyphens)
  const fullNameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
  return fullNameRegex.test(name);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
