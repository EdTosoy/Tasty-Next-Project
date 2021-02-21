import HomePage from "./HomePage";
import { AppProvider } from "../ContextAPI/appContext";
import Head from "next/head";

export default function Home() {
  return (
    <AppProvider>
      <Head>
        <title>Tasty</title>
        <meta
          name="description"
          content="Tasty food
          Try the best food of the week. Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more."
        />
      </Head>
      <HomePage />
    </AppProvider>
  );
}
