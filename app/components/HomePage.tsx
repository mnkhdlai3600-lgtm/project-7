"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

function HomePage() {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods/get-food`,
    fetcher,
  );
  console.log(data);
  return (
    <div className="w-screen">
      <img src="offer.png" alt="" />
      <div className="bg-gray-500 w-screen"></div>
    </div>
  );
}

export default HomePage;
