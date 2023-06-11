import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SG | Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
