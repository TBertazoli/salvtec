import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SalvTec - Climatização Profissional'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Image */}
                <img
                    src="https://salvtec.com.br/images/hero2-optimized.webp"
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Dark overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 1,
                    }}
                />

                {/* Logo/Brand */}
                < div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '40px',
                        zIndex: 10,
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            fontSize: '80px',
                            fontWeight: 'bold',
                            color: 'white',
                            letterSpacing: '-2px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        SalvTec
                    </div>
                </div >

                {/* Headline */}
                < div
                    style={{
                        fontSize: '56px',
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '900px',
                        lineHeight: 1.2,
                        marginBottom: '30px',
                        zIndex: 10,
                        position: 'relative',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    Soluções em Climatização
                </div >

                {/* Subheadline */}
                < div
                    style={{
                        fontSize: '32px',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '800px',
                        marginBottom: '50px',
                        zIndex: 10,
                        position: 'relative',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    Instalação e Manutenção de Ar Condicionado em Campinas e Região
                </div >

                {/* Call to Action */}
                < div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
                        zIndex: 10,
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            backgroundColor: '#25D366',
                            color: 'white',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            padding: '20px 50px',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        WhatsApp: (19) 99836-2654
                    </div>
                    <div
                        style={{
                            fontSize: '24px',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        Orçamento Grátis
                    </div>
                </div >

                {/* Footer with brands */}
                < div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        display: 'flex',
                        fontSize: '24px',
                        color: 'white',
                        zIndex: 10,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    Marcas: Hitachi • Gree • 6 anos de experiência
                </div >
            </div >
        ),
        {
            ...size,
        }
    )
}
