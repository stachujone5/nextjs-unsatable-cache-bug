import { unstable_cache } from "next/cache";

export const getCachedData = unstable_cache(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return {
      name: "John Doe",
      age: 30,
      city: "New York",
    };
  },
  ["cached-data"],
  { tags: ["data"] },
);
