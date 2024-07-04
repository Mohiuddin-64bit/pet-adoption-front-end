import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";



  const poppins = Poppins(
    {
      weight: ["400", "500", "600", "700"],
      subsets: ["latin"],
      display: "swap",
    }
  );


export const metadata: Metadata = {
  title: "PetAdoption",
  description: "PetAdoption is a pet adoption website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
