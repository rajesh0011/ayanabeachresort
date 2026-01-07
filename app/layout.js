import "./globals.css";
import localFont from "next/font/local";

const georgia = localFont({
  src: [
    {
      path: "../public/fonts/georgia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/georgiab.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/georgiai.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/georgiaz.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-georgia",
  display: "swap",
});


export const metadata = {
  title: "Ayana Beach Resort",
  description: "Ayana Beach Resort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={georgia.variable}>
        {children}
      </body>
    </html>
  );
}
