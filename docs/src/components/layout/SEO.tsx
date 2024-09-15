import Head from "next/head";
import React from "react";

const SEO = ({ title = "Panalog" }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="robots" content="index, follow" />
    <meta name="description" content="The Panoramic View for Your Logs." />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Panalog - The Panoramic View for Your Logs."
    />
    <meta
      property="og:description"
      content="Panalog revolutionizes the debugging experience"
    />
    <meta
      property="og:image"
      content="https://spacedock.vercel.app/android-chrome-192x192.png"
    />
    <meta property="og:url" content="https://spacedock.vercel.app/" />
    <meta property="og:site_name" content="SpaceDock" />
  </Head>
);

export default SEO;
