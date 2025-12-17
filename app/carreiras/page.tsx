
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

interface JobPosition {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
}
export default function Carreiras() {
    const openPositions: JobPosition[] = [
        // {
        //     id: 1,
        //     title: "Técnico de Climatização",
        //     location: "São Paulo, SP",
        //     type: "Tempo Integral",
        //     description: "Experiência em instalação e manutenção de sistemas de ar condicionado."
        // },
        // {
        //     id: 2,
        //     title: "Vendedor Técnico",
        //     location: "Rio de Janeiro, RJ",
        //     type: "Tempo Integral",
        //     description: "Conhecimento em soluções de climatização e atendimento ao cliente."
        // }
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[400px] bg-primary-blue">
                    <div className="absolute inset-0" />
                    <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Trabalhe Conosco</h1>
                        <p className="text-xl sm:text-2xl max-w-2xl">
                            Junte-se à nossa equipe e construa uma carreira de sucesso
                        </p>
                    </div>
                </section>

                {/* About Working Here */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Por que trabalhar na SalvTec?</h2>
                            <p className="text-gray-700 mb-4">
                                Na SalvTec, estamos sempre em busca de talentos apaixonados por climatização
                                e comprometidos com a excelência no atendimento ao cliente.
                            </p>
                            <p className="text-gray-700">
                                Oferecemos um ambiente de trabalho colaborativo, oportunidades de crescimento
                                profissional e a chance de contribuir para soluções que fazem a diferença na
                                vida das pessoas.
                            </p>
                        </div>
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/ac2.jpg"
                                alt="Ar condicionado instalado pela equipe SalvTec"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { icon: "💼", title: "Crescimento", text: "Oportunidades de desenvolvimento" },
                            { icon: "🤝", title: "Colaboração", text: "Ambiente de trabalho cooperativo" },
                            { icon: "💰", title: "Benefícios", text: "Pacote competitivo" },
                            { icon: "🎯", title: "Inovação", text: "Trabalhe com tecnologia de ponta" }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl mb-3">{benefit.icon}</div>
                                <h3 className="font-bold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Open Positions */}
                    <h2 className="text-3xl font-bold mb-8">Vagas Abertas</h2>
                    <div className="space-y-4 mb-12">
                        {openPositions.length > 0 ? (
                            openPositions.map((position) => (
                                <div key={position.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <h3 className="text-xl font-bold mb-2 sm:mb-0">{position.title}</h3>
                                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            Candidatar-se
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                        <span>📍 {position.location}</span>
                                        <span>⏰ {position.type}</span>
                                    </div>
                                    <p className="text-gray-700">{position.description}</p>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-600">
                                <p className="text-lg">No momento não temos vagas disponíveis.</p>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-blue-50 p-8 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h3>
                        <p className="text-gray-700 mb-6">
                            Envie seu currículo para nosso banco de talentos e entraremos em contato quando surgir uma oportunidade.
                        </p>
                        <a href="mailto:salvtec.cps@gmail.com" className="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Enviar Currículo
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}