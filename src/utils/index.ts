export const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

export const deepFreeze = obj => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};