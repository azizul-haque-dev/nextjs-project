import Navbar from "@/components/Navbar";
import { connectDb } from "@/service/connectDb";
import "../globals.css";

export const metadata = {
 title: "StaySwift",
  description: "One place stop for Hospitability"
};

export default async function RootLayout({ children }) {
  await connectDb();
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar isHome={true} />
        <main>{children}</main>
      </body>
    </html>
  );
}
