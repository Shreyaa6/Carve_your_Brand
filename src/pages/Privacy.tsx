const Privacy = () => {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-primary mb-12">Privacy Policy</h1>
                <div className="prose prose-lg prose-stone font-sans text-primary/80">
                    <p>Last updated: February 2026</p>
                    <h3>1. Data Collection</h3>
                    <p>
                        We collect information that you strictly provide to us for the purpose of business communication. This primarily includes your name, email address, and project details submitted via our contact forms.
                    </p>
                    <h3>2. Use of Information</h3>
                    <p>
                        Any information we collect from you may be used to:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Personalize your experience</li>
                            <li>Improve our website</li>
                            <li>Process transactions</li>
                            <li>Send periodic emails regarding your project or inquiry</li>
                        </ul>
                    </p>
                    <h3>3. Data Protection</h3>
                    <p>
                        We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy
