import './Infos.css'

const infos = [
    {
        icon: '/img/icone__relogio.png',
        title: 'Tempo',
        text: 'Tempo é importante! Trabalhamos em ritmo acelerado, atendendo rigorosamente aos prazos.',
    },
    {
        icon: '/img/icone__quimica.png',
        title: 'Foco',
        text: 'Focamos no empreendimento! Oferecemos serviços de qualidade com preços acessíveis.',
    },
    {
        icon: '/img/icone__dinheiro.png',
        title: 'Especialistas',
        text: 'Equipe experiente e especializada! Testamos todos os produtos antes do lançamento.',
    },
]

export default function Infos() {
    return (
        <section className="infos">
            <div className="container">
                <div className="infos__grid">
                    {infos.map((item, index) => (
                        <div className="infos__item" key={index}>
                            <div className="infos__icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className="infos__text">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
