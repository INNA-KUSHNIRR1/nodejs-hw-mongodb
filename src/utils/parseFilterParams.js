const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseBoolean = (boolean) => {
  const isString = typeof boolean === 'string';
  if (!isString) return undefined;
  if (boolean.toLowerCase() === 'true') return true;
  if (boolean.toLowerCase() === 'false') return false;

  return undefined;
};

const parseName = (name) => {
  const isString = typeof name === 'string';
  if (!isString) return;
  return name;
};
export const parseFilterParams = (query) => {
  const { contactType, isFavourite, name } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseBoolean(isFavourite);
  const parsedName = parseName(name);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
    name: parsedName,
  };
};
