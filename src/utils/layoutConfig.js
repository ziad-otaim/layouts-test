export const getSubdomain = () => {
  const url = window.location.origin;

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    const parts = hostname.split(".");

    if (parts.length >= 2) {
      const mainDomainIndex = parts.findIndex((p) => p === "localhost");

      return parts.slice(0, mainDomainIndex).join(".");
    }

    return "";
  } catch (error) {
    return "";
  }
};

const defaultLayout = {};

export const getLayoutConfig = (layouts, subdomain) => {
  return (
    layouts.find((layoutConfig) => layoutConfig.subdomain === subdomain) ||
    defaultLayout
  );
};
