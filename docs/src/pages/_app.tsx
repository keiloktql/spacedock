import { useEffect } from "react";
import "@/styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Console from "@/components/shared/Console";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // hide console.log in PROD
  // if (ENVIRONMENT === "PROD") console.log = () => {};

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <>
      <Console />
      <Component {...pageProps} />
    </>
  );
}
