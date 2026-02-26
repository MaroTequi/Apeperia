import './Header.css'

const navItems = ['Sobre', 'Planos', 'Blog', 'Destaque', 'Institucional', 'Contato']

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <a className="header__logo" href="#top">
                    <img src="/img/Logo do Apeperia.png" alt="Logo Apeperia" />
                </a>
                <nav className="header__nav">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="header__link"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
