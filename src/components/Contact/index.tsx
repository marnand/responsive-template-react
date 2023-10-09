import Container from "../Container"

function Contact() {
    return (
        <div className="flex flex-col md:flex-row">
            <section className="bg-gray-200 py-12 grow">
                <Container>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Entre em Contato</h2>
                    Add a contact form with fields for name, email, message, etc.
                </Container>
            </section>

            <section className="py-12 grow">
                <Container>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Nossa Localização</h2>
                    Display a map or address information here
                </Container>
            </section>
        </div>
    )
}

export default Contact