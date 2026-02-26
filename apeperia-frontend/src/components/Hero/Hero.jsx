import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero__content">
                <h1 className="hero__title">Aplicativos na medida</h1>
                <p className="hero__subtitle">
                    Apeperia tem um jeito inovador de comparar e montar aplicativos para
                    pequenas e médias empresas.
                </p>
                <a className="btn btn--primary hero__cta" href="#planos">
                    Conheça os planos
                </a>
            </div>
        </section>
    )
}
