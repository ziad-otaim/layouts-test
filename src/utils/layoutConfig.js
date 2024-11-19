export const getSubdomain = () => {
  const hostname = window.location.hostname;

  const parts = hostname.split(".");

  return parts.length >= 2 ? parts[0] : null; // Adjust for localhost or production
};

const defaultLayout = {};

export const getLayoutConfig = (layouts, subdomain) => {
  return (
    layouts.find((subDomain) => subDomain.subdomain === subdomain) ||
    defaultLayout
  );
};
