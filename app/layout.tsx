import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";
import {LayoutProps} from "@/app/lib/definitions";


export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
    <head>
      <title>Next.js Dashboard</title>
    </head>
    <body className={`${inter.className} antialiased`}>{props.children}</body>
    </html>
  );
}
