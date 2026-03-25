import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.toychest.ai"),
  title: "ToyChest.AI | What if every toy could unlock a video game?",
  description:
    "ToyChest.AI turns physical toys into playable characters, items, and rewards inside games with camera-based recognition and no special hardware.",
  openGraph: {
    title: "ToyChest.AI | Turn Toys Into Game Content",
    description:
      "Computer vision that connects physical toys to digital game rewards without special hardware.",
    url: "https://www.toychest.ai",
    siteName: "ToyChest.AI",
    images: [
      {
        url: "/assets/toychestlogo.png",
        width: 1200,
        height: 630,
        alt: "ToyChest.AI logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToyChest.AI | Turn Toys Into Game Content",
    description:
      "ToyChest.AI helps toy brands and game studios turn toys into in-game content with camera-based recognition.",
    images: ["/assets/toychestlogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#efe8db] text-[#17171b] antialiased`}>
        {children}
      </body>
    </html>
  );
}
