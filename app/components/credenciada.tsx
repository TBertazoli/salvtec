export default function Credenciada() {
    return (
        <>
            <section className="relative z-20 mb-20" id="credenciada">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">Credenciada</h2>
                    <div className="flex space-x-6 justify-center flex-wrap">
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[280px] w-full sm:w-auto">
                            <img
                                src="/images/hitachi.png"
                                alt="hitachi logo"
                                className="w-full h-40 object-contain"
                                loading="lazy"
                            />
                        </figure>
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[280px] w-full sm:w-auto">
                            <img
                                src="/images/gree.png"
                                alt="gree logo"
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