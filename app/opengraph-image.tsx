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
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                }}
            >
                {/* Decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-150px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }}
                />
                {/* Decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-150px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }}
                />

                {/* Logo/Brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '40px',
                        zIndex: 10,
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
                        zIndex: 10,
                    }}
                >
                    Soluções em Climatização
                </div>

                {/* Subheadline */}
                <div
                    style={{
                        fontSize: '32px',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '800px',
                        marginBottom: '50px',
                        zIndex: 10,
                    }}
                >
                    Instalação e Manutenção de Ar Condicionado em Campinas
                </div>

                {/* Call to Action */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
                        zIndex: 10,
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
                        📱 (19) 99836-2654
                    </div>
                    <div
                        style={{
                            fontSize: '24px',
                            color: 'white',
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
                        fontSize: '22px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        zIndex: 10,
                    }}
                >
                    Hitachi • Gree • 6 anos de experiência
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
