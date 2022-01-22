export const baseUrl = "https://restcountries.com/";

export const formatPop = (p) => {
  p = p.toString();
  let formatted = "";

  while (p.length > 3) {
    formatted = "," + p.slice(-3) + formatted;
    p = p.slice(0, -3);
  }

  return p + formatted;
};

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });