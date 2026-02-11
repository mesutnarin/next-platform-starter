import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Parametrix Architecture',
        default: 'Parametrix Architecture'
    },
    description:
        'Parametrix Architecture; mimari tasarım, iç mekan, uygulama ve proje danışmanlığını parametrik düşünceyle birleştirir.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-neutral-950">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-6xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
