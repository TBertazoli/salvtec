export default function Hero() {
    return (
        <>
            <div className="heroImage">
                <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
                    <h1 className="hidden md:block text-4xl md:text-5xl font-bold leading-tight">
                        Soluções em Climatização
                    </h1>

                    <p className="hidden md:block mt-4 text-lg">
                        Alta qualidade e eficiência para a sua Residencia, Comercio e Indústria
                    </p>

                    {/* Desktop / tablet: button with text */}
                    <button className="hidden md:inline-flex mt-6 bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium max-w-40">
                        <a
                            href="https://wa.me/5519998362654"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <img
                                src="/images/whatsapp.png"
                                alt="WhatsApp"
                                className="w-5 h-5"
                            />
                            <span>Saiba Mais</span>
                        </a>
                    </button>

                    {/* Mobile: only the WhatsApp image placed in the right corner of the hero */}
                    <a
                        href="https://wa.me/5519998362654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden absolute right-4 bottom-5 z-20"
                    >
                        <img
                            src="/images/whatsapp.png"
                            alt="WhatsApp"
                            className="w-12 h-12"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}