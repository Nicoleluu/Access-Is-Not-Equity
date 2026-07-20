import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Access ≠ Equity | Nicole Lu",
  description: "Research foundations on unequal access to the possibilities of AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
