import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Tcg Trader",
  description: "Tcg Trader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
