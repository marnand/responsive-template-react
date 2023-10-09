import Container from "../Container"

function About() {
    return (
        <section className="bg-blue-500 text-white py-12">
            <Container>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Sobre Nós</h2>

                <p className="text-lg sm:text-xl">Uma breve descrição da nossa empresa ou equipe.</p>
            </Container>
        </section>
    )
}

export default About