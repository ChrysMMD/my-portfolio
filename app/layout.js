import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import { Montserrat, Roboto_Condensed } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-header",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
  variable: "--font-body",
});

export const metadata = {
  title: "Chrys Portfolio",
  description:
    "Multimediedesigner portfolio med speciale i frontend, digital design og ux/ui",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="da"
      className={`${montserrat.variable} ${robotoCondensed.variable}`}
    >
      <body>
        <Menu />
        <main className="page">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
