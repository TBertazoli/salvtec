export default function Footer() {
    return (
        <footer className="bg-primary-blue border-t border-gray-200 mt-20 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight">
                            SalvTec
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Entre em contato para orçamentos e suporte técnico.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                                <a
                                    href="https://wa.me/5519998362654"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp da SalvTec"
                                    className="hover:text-black transition-colors"
                                >
                                    WhatsApp: (19) 99836-2654
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-pink-500" />
                                <a
                                    href="https://www.instagram.com/salvteccampinas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram da SalvTec"
                                    className="hover:text-black transition-colors"
                                >
                                    Instagram: @salvteccampinas
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:justify-self-end">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
                            Siga-nos
                        </h4>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/5519998362654"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir WhatsApp"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition"
                            >
                                <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/salvteccampinas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir Instagram"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition"
                            >
                                <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs">
                        © {new Date().getFullYear()} Cre8ive Devs. Todos os direitos reservados.
                    </p>
                    <div className="text-xs">
                        <span className="hidden md:inline">Campinas, SP •</span> Atendimento em Campinas e Região
                    </div>
                </div>
            </div>
        </footer>
    );
}
