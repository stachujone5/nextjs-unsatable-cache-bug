import { cookies } from "next/headers";
import { getCachedData } from "./get-cached-data";

export default async function Home() {
  cookies();
  const data = await getCachedData();

  return (
    <>
      <div className="h-20 w-20 bg-red-400 text-xl flex items-center justify-center text-white">
        {JSON.stringify(data)}
      </div>
    </>
  );
}
