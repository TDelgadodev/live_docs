import { cookies } from "next/headers";

export default async function Home() {
  try {
    const sessionId = cookies().get("sid")?.value ?? "";
    const res = await fetch("...", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `sid=${sessionId}`,
      },
    });
  } catch (err) {
    // not authenticated
    console.log(err);
  }
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}
