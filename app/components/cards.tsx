export default function Card() {
    return (
        <>
            <section className="relative z-20 mb-20 md:-mt-20">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            ⚙️
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Projetos
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Soluções customizadas para climatização eficiente
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            🛠️
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Manutenção e Higienização
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Serviços de manutenção preventiva e corretiva
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            🔧
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Instalação e Montagem
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Instalação e montagem de equipamentos de climatização
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

