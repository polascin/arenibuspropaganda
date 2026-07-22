export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Arenibus</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Funkcie</a>
              <a href="#demo" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Demo</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nefrologický a Dialyzačný Informačný Systém
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Moderný riešenie pre správu pacientov, dialyzačných výkonov a komplexnej liečby v nefrológii
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Skúsiť Demo Verziu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Kontaktujte Nás
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Komplexné Funkcie pre Nefrológiu
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Správa Pacientov</h4>
              <p className="text-gray-600 dark:text-gray-300">Komplexný záznam pacientov s anamnézou, laboratórnymi výsledkami a liečebným plánom.</p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dialyzačné Výkony</h4>
              <p className="text-gray-600 dark:text-gray-300">Plánovanie a evidencia dialyzačných výkonov s automatickým výpočtom parametrov.</p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Štatistiky a Reporty</h4>
              <p className="text-gray-600 dark:text-gray-300">Pokročilé analytické nástroje a generovanie reportov pre klinické rozhodovanie.</p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lekárenský Systém</h4>
              <p className="text-gray-600 dark:text-gray-300">Integrácia s lekárňou, evidencia liekov a kontrola interakcií.</p>
            </div>

            <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bezpečnosť Dát</h4>
              <p className="text-gray-600 dark:text-gray-300">Šifrovanie dát, zálohovanie a splnenie GDPR požiadaviek.</p>
            </div>

            <div className="bg-teal-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rýchla Implementácia</h4>
              <p className="text-gray-600 dark:text-gray-300">Jednoduchá inštalácia a konfigurácia s kompletnou podporou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Vyskúšajte Arenibus v Praxi
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Otestujte všetky funkcie nášho systému v interaktívnej demo verzii. Žiadna inštalácia, žiadne záväzky.
          </p>
          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-xl text-lg"
          >
            Spustiť Demo Verziu
          </a>
          <p className="text-blue-200 mt-4 text-sm">
            Demo verzia je k dispozícii na https://demo.arenibus.com/
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Kontaktujte Nás
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Máte otázky?</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Kontaktujte nás pre viac informácií o Arenibus systéme, cenách alebo demonštrácii.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">info@arenibus.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">+421 123 456 789</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pošlite správu</h4>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Vaše meno"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Váš email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                  <textarea
                    placeholder="Vaša správa"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Odoslať Správu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Arenibus. Všetky práva vyhradené.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Nefrologický a dialyzačný informačný systém pre moderné zdravotníctvo.
          </p>
        </div>
      </footer>
    </div>
  );
}