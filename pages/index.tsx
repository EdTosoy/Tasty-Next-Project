import React from "react";
import HomePage from "./HomePage";
import { DarkModeProvider } from '../ContextAPI/darkMode';

export default function Home() {
  return (
    <DarkModeProvider>
      <HomePage/>
    </DarkModeProvider>
  );
}
