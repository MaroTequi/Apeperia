import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Destaques from './components/Destaques/Destaques'
import Infos from './components/Infos/Infos'
import Sobre from './components/Sobre/Sobre'
import Planos from './components/Planos/Planos'
import Contato from './components/Contato/Contato'
import Institucional from './components/Institucional/Institucional'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Destaques />
                <Infos />
                <Sobre />
                <Planos />
                <Contato />
                <Institucional />
            </main>
            <Footer />
        </>
    )
}
