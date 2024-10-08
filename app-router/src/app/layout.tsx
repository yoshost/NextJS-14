import { Metadata } from "next";

export const metadata : Metadata = {
  title: {
    absolute: "",
    default : "Next JS App",
    template : "%s | Next"
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          Header
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          Fotter
        </footer>
      </body>
    </html>
  );
}
