import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"] , weight:["600" ,"300" ,"500"] , style:["normal" , "italic"] });

export const metadata = {
  title: "Eco Pulse",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
