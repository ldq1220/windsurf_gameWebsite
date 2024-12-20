"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
