import "./globals.css";

export const metadata = {
  title: "Shubham. G | Portfolio",
  description:
    "Shubham Gaikwad: Web Developer & Designer - Explore the impressive portfolio of Shubham Gaikwad, a skilled web developer and designer. Discover innovative projects, stunning designs, and connect for collaborations. Visit shubhamgaikwad.tech for a captivating digital experience.",
  keywords:
    "Web Developer, Designer, Portfolio, Projects, Web Design, Front-end Development, UI/UX Design, Responsive Design, Creative, Innovation, User Experience, HTML, CSS, JavaScript, Mobile-Friendly, Custom Websites, Digital Solutions, Freelancer, Collaboration, Professional",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Shubham Gaikwad - Web Developer & Designer"
        />
        <meta
          property="og:description"
          content="Explore the impressive portfolio of Shubham Gaikwad, a skilled web developer and designer. Discover innovative projects, stunning designs, and connect for collaborations."
        />
        <meta property="og:url" content="https://shubhamgaikwad.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shubham Gaikwad" />
      </head>
      <body>{children}</body>
    </html>
  );
}
