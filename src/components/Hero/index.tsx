import Container from "../Container";

function Hero() {
    return (
        <>
            <nav className="bg-transparent p-4">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    Navbar content goes here, e.g., logo, navigation links
                </div>
            </nav>

            <section className="bg-blue-500 text-white py-16">
                <Container>
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Seja bem-vindo à nossa landing page
                        </h1>

                        <p className="text-lg sm:text-xl">
                            Aqui, você encontrará informações incríveis.
                        </p>

                        Adicione call-to-action buttons ou outro conteúdo conforme necessário
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero;