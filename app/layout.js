// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Vincent Toon",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
