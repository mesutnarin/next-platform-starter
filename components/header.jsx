import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/parametrix-logo.svg';

const navItems = [
    { linkText: 'Hizmetler', href: '#hizmetler' },
    { linkText: 'Projeler', href: '#projeler' },
    { linkText: 'Süreç', href: '#surec' },
    { linkText: 'İletişim', href: '#iletisim' }
];

export function Header() {
    return (
        <header className="sticky top-0 z-20 py-5 mb-10 backdrop-blur-sm sm:py-7 md:mb-14">
            <nav className="flex flex-wrap items-center justify-between gap-5">
                <Link href="/" className="inline-flex no-underline" aria-label="Parametrix Architecture ana sayfa">
                    <Image src={logo} alt="Parametrix Architecture logosu" priority className="w-[220px] sm:w-[300px] h-auto" />
                </Link>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 no-underline sm:px-2.5">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
