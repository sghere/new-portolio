import "./globals.css";

export const metadata = {
  title: "SG | Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
