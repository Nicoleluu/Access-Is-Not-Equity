import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Access Is Not Equity — Nicole Lu",
  description: "A developing visual investigation into location, resources, and meaningful access to AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
