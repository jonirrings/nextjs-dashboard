import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";
import {LayoutProps} from "@/app/lib/definitions";
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{props.children}</body>
    </html>
  );
}
