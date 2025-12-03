export default function Servicos() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Projetos</h3>
                        <p className="text-gray-600">Desenvolvimento de projetos personalizados de climatização para residências, comércios e indústrias, garantindo eficiência e conforto.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Manutenção e Higienização</h3>
                        <p className="text-gray-600">Serviços de manutenção preventiva e corretiva, além de higienização de sistemas de climatização para garantir o funcionamento eficiente e a qualidade do ar.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Instalação e Montagem</h3>
                        <p className="text-gray-600">Instalação e montagem de equipamentos de climatização, assegurando a correta operação e desempenho dos sistemas.</p>
                    </div>
                </div>
            </section>
        </>
    )
}