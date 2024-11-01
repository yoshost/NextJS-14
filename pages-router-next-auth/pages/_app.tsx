import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/nav-bar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
