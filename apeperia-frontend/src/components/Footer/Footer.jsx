import './Footer.css'

const socialLinks = [
    { icon: '/img/icone__facebook.svg', alt: 'Facebook', href: '#' },
    { icon: '/img/icone__twitter.svg', alt: 'Twitter', href: '#' },
    { icon: '/img/icone__instagram.svg', alt: 'Instagram', href: '#' },
]

const navLinks = [
    'Sobre',
    'Planos',
    'Blog',
    'Destaques',
    'Institucional',
    'Contato',
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <a className="footer__logo" href="#top">
                        <img src="/img/Logo do Apeperia.png" alt="Logo Apeperia" />
                    </a>
                    <div className="footer__social">
                        {socialLinks.map((s) => (
                            <a
                                key={s.alt}
                                href={s.href}
                                className="footer__social-link"
                                title={s.alt}
                                aria-label={s.alt}
                            >
                                <img src={s.icon} alt={`Ícone ${s.alt}`} />
                            </a>
                        ))}
                    </div>
                    <nav className="footer__links">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="footer__link"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
                <hr className="footer__divider" />
                <p className="footer__copy">
                    © {new Date().getFullYear()} Apeperia. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
