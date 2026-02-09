export const fetcher = async (endPoint: string) => {
  const response = await fetch(endPoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    },
    cache: "force-cache",
  });
  const data = await response.json();
  console.log(data);
  return data;
};
