import Link from "next/link";

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencias", label: "Experiências" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-md">
      <Link href="/" className="font-medium hover:text-accent transition-colors">
        Gabriel Angioleto
      </Link>
      <nav className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-muted hover:text-fg transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}