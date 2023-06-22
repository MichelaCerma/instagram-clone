export const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = res.json();
  return data;
};
