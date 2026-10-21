const getPublicImageUrl = (fileName) => `${process.env.PUBLIC_URL}/images/${fileName}`;

export const getPublicPageUrl = (page = '/') => {
  const route = page.startsWith('/') ? page : `/${page}`;
  return `${process.env.PUBLIC_URL}/#${route}`;
};

export default getPublicImageUrl;
