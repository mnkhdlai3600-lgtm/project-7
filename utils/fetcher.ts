export const fetcher = async ([url, method, body]: [string, string, any]) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1ua2hkbGFpMzYwMEBnbWFpbC5jb20iLCJfaWQiOiI2OTg3MDkwZGQ0MmE1MTAzNzEwOGNiZDkiLCJpYXQiOjE3NzA2OTIyOTV9.Ts4_Wx1AgwesgWkL2mrGieWIq0aN5Jdmelnx2UweTnE",
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return await res.json();
};
