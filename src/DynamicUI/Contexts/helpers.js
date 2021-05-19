export const getComponentType = (name) => {
  const suffix = name.split("_").pop();

  return suffix;
};
