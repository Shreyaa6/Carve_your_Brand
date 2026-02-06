const Security = () => {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-primary mb-12">Security</h1>
                <div className="prose prose-lg prose-stone font-sans text-primary/80">
                    <p>
                        At Carve Your Brand, security is paramount. We employ industry-standard practices to ensure your data and your digital products are secure.
                    </p>
                    <h3>Infrastructure</h3>
                    <p>
                        Our infrastructure is built on world-class cloud providers with rigorous physical and network security controls.
                    </p>
                    <h3>Encryption</h3>
                    <p>
                        All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher. Critical data at rest is also encrypted.
                    </p>
                    <h3>Vulnerability Management</h3>
                    <p>
                        We regularly scan our systems for vulnerabilities and patch them promptly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Security
