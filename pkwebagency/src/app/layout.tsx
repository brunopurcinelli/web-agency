import type { Metadata } from "next";
import { Playfair, Plus_Jakarta_Sans } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick-theme.css"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/flaticon.min.css"
import "/public/assets/css/fontawesome-5.14.0.min.css"
import "/public/assets/css/magnific-popup.min.css"
import "/public/assets/css/nice-select.min.css"
import "/public/assets/css/slick.min.css"
import "/public/assets/css/style.css"

import "/public/assets/css/globals.css";

const playfair = Playfair({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--script-font",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--base-font",
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Pk Tech",
  description: "Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${playfair.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
