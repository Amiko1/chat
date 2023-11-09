import HomeAccordion from "@/components/home/HomeAccordion";
import HomeSigninButtons from "@/components/home/HomeSigninButtons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("chat");
  }
  return (
    <main className="flex flex-col p-1 pb-10 pt-5 sm:flex-row  sm:items-center sm:gap-20 lg:gap-96 container px-4">
      <div className="mt-10 sm:mt-0 sm:w-1/2 ">
        <h1 className="text-center text-2xl">Welcome To Chat app</h1>
        <p className="text-center mt-2 text-sm">
          Get New People and have a fun
        </p>
        <HomeSigninButtons className="w-full mt-20 sm:mt-10" />
      </div>

      <div className="mt-24 sm:mt-0 sm:w-1/2 ">
        <HomeAccordion />
      </div>
      <div className="hidden	 sm:block fixed w-1/2 h-screen top-0 left-0  bg-blue-500 dark:bg-white dark:opacity-10 opacity-70 -z-10 "></div>
    </main>
  );
}
