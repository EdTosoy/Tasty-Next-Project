import HomePage from "./HomePage";
import { DarkModeProvider } from "../ContextAPI/darkMode";
import Head from 'next/head';

export default function Home() {
  return (
    <DarkModeProvider>
      <Head>
        <title>Tasty</title>
        <meta
          name="description"
          content="Tasty food
          Try the best food of the week. Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more."
        />
      </Head>
      <HomePage />
    </DarkModeProvider>
  );
}
