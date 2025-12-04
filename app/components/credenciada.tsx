export default function Credenciada() {
    return (
        <>
            <section className="relative z-20 mb-20" id="credenciada">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">Marcas Credenciadas</h2>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden w-[280px]">
                            <img
                                src="/images/hitachi.png"
                                alt="Hitachi - Parceira SalvTec em soluções de ar condicionado"
                                className="w-full h-40 object-contain"
                                loading="lazy"
                            />
                        </figure>
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden w-[280px]">
                            <img
                                src="/images/gree.png"
                                alt="Gree - Fornecedor de ar condicionado para SalvTec"
                                className="w-full h-40 object-contain"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                </div>
            </section >
        </>
    )
}