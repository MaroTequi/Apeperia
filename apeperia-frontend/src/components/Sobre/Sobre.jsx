import './Sobre.css'

const platforms = [
    { icon: '/img/icone__android.png', alt: 'Android' },
    { icon: '/img/icone__blackberry.png', alt: 'BlackBerry' },
    { icon: '/img/icone__apple.png', alt: 'Apple' },
    { icon: '/img/icone__windows.png', alt: 'Windows' },
]

export default function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="container">
                <h2 className="section-title">Sobre</h2>
                <div className="sobre__inner">
                    <div className="sobre__content">
                        <p className="sobre__text">
                            Criamos aplicativos personalizados para{' '}
                            <strong>todas as pessoas!</strong>
                        </p>
                        <p className="sobre__text">
                            A manutenção de um aplicativo não pode ser um custo extra para o
                            cliente. Na Apeperia você assina nosso serviço e a manutenção já
                            está inclusa. Assim, você não se preocupa com manutenção, é tudo
                            por nossa conta.
                        </p>
                        <p className="sobre__text">
                            <strong>
                                Conte com uma equipe especializada e exclusiva pra projetos
                                incríveis em qualquer plataforma.
                            </strong>
                        </p>
                        <div className="sobre__platforms">
                            {platforms.map((p) => (
                                <div className="sobre__platform-icon" key={p.alt}>
                                    <img src={p.icon} alt={`Ícone ${p.alt}`} />
                                </div>
                            ))}
                        </div>
                        <p className="sobre__caption">
                            Desenvolvemos aplicativos para todas as plataformas
                        </p>
                    </div>
                    <img
                        src="/img/dois__caras__desktop.png"
                        alt="Dashboard preview"
                        className="sobre__image"
                    />
                </div>
            </div>
        </section>
    )
}
