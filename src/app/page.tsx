import Head from "next/head";
import NextTable from "./uiComponents/nextTable";
import NextCards from "./uiComponents/nextCards";
import NextTab from "./uiComponents/nextTab";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-screen bg-black overflow-y-auto">
        <div className="flex flex-col w-4/6">
          <NextCards />
          <NextTab />
          <NextTable />
        </div>
      </main>
    </>
  );
}
