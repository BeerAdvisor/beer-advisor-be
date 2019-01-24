export const mapConnectIds = (ids: string[]): { id: string }[] => {
  return ids && ids.length && ids.map(id => ({ id }));
};
