export default function Footer() {
    return (
        <footer className="font-mono">
            <nav>
                <p>© {new Date().getFullYear()} Gabriel Angioleto</p>
                <a
                    href="https://github.com/gangioleto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Meu GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/gabriel-dos-santos-rodrigues-angioleto-02408030b"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Meu Linkedin
                </a>
            </nav>
        </footer>
    );
}