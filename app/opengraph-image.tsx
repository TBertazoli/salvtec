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
                    background: 'linear-gradient(135deg, #0066cc 0%, #004c99 100%)',
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
                {/* Logo/Brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '80px',
                            fontWeight: 'bold',
                            color: 'white',
                            letterSpacing: '-2px',
                        }}
                    >
                        SalvTec
                    </div>
                </div>

                {/* Headline */}
                <div
                    style={{
                        fontSize: '56px',
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '900px',
                        lineHeight: 1.2,
                        marginBottom: '30px',
                    }}
                >
                    Soluções em Climatização
                </div>

                {/* Subheadline */}
                <div
                    style={{
                        fontSize: '32px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textAlign: 'center',
                        maxWidth: '800px',
                        marginBottom: '50px',
                    }}
                >
                    Instalação e Manutenção de Ar Condicionado em Campinas e Região
                </div>

                {/* Call to Action */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
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
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        WhatsApp: (19) 99836-2654
                    </div>
                    <div
                        style={{
                            fontSize: '24px',
                            color: 'rgba(255, 255, 255, 0.9)',
                        }}
                    >
                        Orçamento Grátis
                    </div>
                </div>

                {/* Footer with brands */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        display: 'flex',
                        fontSize: '24px',
                        color: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    Marcas: Hitachi • Gree • 6 anos de experiência
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
