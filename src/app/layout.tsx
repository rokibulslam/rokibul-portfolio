import { Header } from "@/components/home-page/Header";
import "./globals.css";
export const metadata = {
  title: "Your Portfolio",
  description: "A stunning portfolio showcasing your web development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <body className="mx-20">
          <Header />
          {children}
        </body>
      </div>
    </html>
  );
}
