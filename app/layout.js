import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Assignment Project for Web Development 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-4 items-center text-white bg-indigo-950">
        {children}
      </body>
    </html>
  );
}
