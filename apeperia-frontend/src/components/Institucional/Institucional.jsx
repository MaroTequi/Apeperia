import './Institucional.css'

export default function Institucional() {
    return (
        <section className="institucional" id="institucional">
            <div className="container">
                <h2 className="section-title">Institucional</h2>
                <div className="institucional__inner">
                    <div className="institucional__info">
                        <p className="institucional__subtitle">
                            Um pouco mais sobre a Apeperia
                        </p>
                        <address className="institucional__address">
                            <p className="institucional__address-title">
                                Rua Vergueiro, 3185
                                <br />
                                Vila Mariana, São Paulo
                            </p>
                            <p className="institucional__address-contacts">
                                <a href="tel:551155712751">(11) 5571-2751</a> ou{' '}
                                <br />
                                <a href="mailto:contato@apeperia.com">contato@apeperia.com</a>
                            </p>
                        </address>
                    </div>
                    <video
                        className="institucional__video"
                        controls
                        src="/img/formacao-java.mp4"
                    />
                </div>
            </div>
        </section>
    )
}
