export const mapConnectIds = (ids: string[]): { id: string }[] => {
  return ids && ids.length && ids.map(id => ({ id }));
};

export const connectId = (id: string): { connect: { id: string } } => id && { connect: { id } };
