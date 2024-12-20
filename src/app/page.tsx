"use client";

import Layout from "@/components/Layout";
import Banner from "@/components/Banner/index";
import GameList from "@/components/GameList";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <GameList />
    </Layout>
  );
}
