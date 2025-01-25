"use client";
import useSWR from "swr";
import { getBlogs } from "./actions";
function page() {
  const { data, error, isLoading } = useSWR("getBlogs", () => getBlogs());
  if (isLoading) return <div className="pt-40">Loading...</div>;
  return (
    <div className="pt-40">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default page;
