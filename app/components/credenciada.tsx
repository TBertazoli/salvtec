import Image from 'next/image'

export default function Credenciada() {
    return (
        <>
            <section className="relative z-20 mb-20" id="credenciada">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">Marcas Credenciadas</h2>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden w-[280px] p-4">
                            <Image
                                src="/images/hitachi-optimized.webp"
                                alt="Hitachi - Parceira SalvTec em soluções de ar condicionado"
                                width={280}
                                height={160}
                                className="w-full h-40 object-contain"
                            />
                        </figure>
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden w-[280px] p-4">
                            <Image
                                src="/images/gree-optimized.webp"
                                alt="Gree - Fornecedor de ar condicionado para SalvTec"
                                width={280}
                                height={160}
                                className="w-full h-40 object-contain"
                            />
                        </figure>
                    </div>
                </div>
            </section >
        </>
    )
}