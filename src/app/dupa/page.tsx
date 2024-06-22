import { cookies } from "next/headers";
import { getCachedData } from "../get-cached-data";

export default async function Home() {
  const data = await getCachedData();
  cookies();
  return (
    <>
      <div className="h-20 w-20 bg-red-400 text-xl flex items-center justify-center text-white">
        {JSON.stringify(cookies())}
      </div>
      {JSON.stringify(data)}
    </>
  );
}
