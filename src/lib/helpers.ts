export const generateUrl = (text: string) => {
  return text.toLowerCase().replace(/ /g, "-");
};

export const toCamelCase = (text: string) => {
  return text
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
};
