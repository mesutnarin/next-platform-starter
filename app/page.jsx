const services = [
    {
        title: 'Parametrik Mimari Tasarım',
        description:
            'Veri odaklı ve algoritmik yaklaşımla form, performans ve estetiği aynı potada buluşturuyoruz.'
    },
    {
        title: 'İç Mekan & Marka Deneyimi',
        description:
            'Kurumsal kimliğinizi mekana çeviren, kullanıcıyı yönlendiren ve akılda kalan deneyimler tasarlıyoruz.'
    },
    {
        title: 'Uygulama Projesi ve Koordinasyon',
        description:
            'Tasarım kararlarını üretilebilir detaylara dönüştürerek disiplinler arası uygulama sürecini yönetiyoruz.'
    },
    {
        title: 'EKB (Enerji Kimlik Belgesi) Hazırlama',
        description:
            'Binalarınız için mevzuata uygun enerji performans analizleri yapıyor ve Enerji Kimlik Belgesi hazırlıyoruz.'
    }
];

const projects = [
    {
        name: 'Nexus Ofis Kampüsü',
        detail: '12.000 m² | İstanbul',
        summary: 'Esnek çalışma kültürüne uyumlanan cephe ve iç mekan sistemi.'
    },
    {
        name: 'Helix Experience Center',
        detail: '3.400 m² | Ankara',
        summary: 'Dijital enstalasyonlarla desteklenen deneyim odaklı showroom kurgusu.'
    },
    {
        name: 'Verta Karma Yaşam',
        detail: '24.000 m² | İzmir',
        summary: 'Konut, perakende ve kamusal alanları bağlayan sürdürülebilir masterplan.'
    }
];

const phases = [
    'Keşif ve ihtiyaç analizi',
    'Konsept ve parametrik modelleme',
    'Teknik proje geliştirme',
    'Saha koordinasyonu ve teslim'
];

export default function Page() {
    return (
        <div className="flex flex-col gap-20 pb-10 sm:gap-24">
            <section className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
                <div>
                    <p className="mb-4 text-xs tracking-[0.3em] text-primary">BÜTÜNCÜL MİMARİ ÇÖZÜMLER</p>
                    <h1 className="max-w-3xl leading-tight">
                        Parametrix Architecture ile markanıza değer katan, ölçeklenebilir ve karakter sahibi mekanlar.
                    </h1>
                    <p className="max-w-2xl mt-6 text-lg text-white/80">
                        Stratejiden uygulamaya uzanan süreçte, parametrik tasarım prensiplerini kullanarak markanız için
                        güçlü bir mimari dil kuruyoruz.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#iletisim" className="btn btn-lg">
                            Projenizi Konuşalım
                        </a>
                        <a href="#projeler" className="btn btn-lg bg-white/15 text-white hover:bg-white/25">
                            Öne Çıkan Projeler
                        </a>
                    </div>
                </div>

                <div className="p-6 border rounded-md border-white/15 bg-white/5">
                    <p className="text-sm text-white/70">Yaklaşımımız</p>
                    <p className="mt-3 text-2xl font-semibold">Estetik + Performans + Uygulanabilirlik</p>
                    <p className="mt-3 text-white/80">
                        Her projede tasarım kararlarını ölçülebilir kriterlerle doğrular, maliyet ve zaman optimizasyonu
                        ile güvenilir sonuçlar üretiriz.
                    </p>
                </div>
            </section>

            <section id="hizmetler" className="space-y-6">
                <h2>Hizmetler</h2>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <article key={service.title} className="p-6 border rounded-md border-white/15 bg-white/5">
                            <h3>{service.title}</h3>
                            <p className="mt-3 text-white/80">{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="projeler" className="space-y-6">
                <h2>Seçili Projeler</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.name} className="p-6 border rounded-md border-white/15">
                            <p className="text-xs tracking-[0.2em] text-primary">{project.detail}</p>
                            <h3 className="mt-3">{project.name}</h3>
                            <p className="mt-3 text-white/80">{project.summary}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="surec" className="grid gap-8 p-6 border rounded-md sm:p-8 border-white/15 bg-white/5 md:grid-cols-2">
                <div>
                    <h2>Süreç Yönetimi</h2>
                    <p className="mt-4 text-white/80">
                        Projenin ilk eskizinden anahtar teslimine kadar şeffaf bir yol haritası sunuyor; doğru kararları
                        doğru aşamada almanızı sağlıyoruz.
                    </p>
                </div>
                <ol className="space-y-4 list-decimal list-inside text-white/90">
                    {phases.map((phase) => (
                        <li key={phase}>{phase}</li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
