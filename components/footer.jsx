import Image from 'next/image';
import logo from 'public/images/parametrix-logo.svg';

export function Footer() {
    return (
        <footer id="iletisim" className="pt-16 pb-12 border-t border-white/15 sm:pt-20 sm:pb-16">
            <div className="grid gap-10 sm:grid-cols-2">
                <div>
                    <Image src={logo} alt="Parametrix Architecture logosu" className="w-[220px] sm:w-[260px] h-auto" />
                    <p className="max-w-md mt-4 text-white/80">
                        Marka, mekan ve kullanıcı deneyimini bütüncül bir mimari dille ele alır; tasarımın her fazında
                        ölçülebilir değer üretiriz.
                    </p>
                </div>

                <div className="text-sm sm:text-right text-white/90">
                    <p>info@parametrixarchitecture.com</p>
                    <p>+90 (212) 000 00 00</p>
                    <p>Levent, İstanbul</p>
                    <p className="mt-5 text-xs text-white/60">© {new Date().getFullYear()} Parametrix Architecture</p>
                </div>
            </div>
        </footer>
    );
}
