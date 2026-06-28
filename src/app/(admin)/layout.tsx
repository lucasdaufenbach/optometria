import Link from "next/link";

/**
 * Layout da área administrativa.
 * Estilo ERP: densidade maior, navegação lateral. Ver docs/07-ui-ux.md.
 * Proteção por autenticação será adicionada na Sessão 3.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r border-gray-200 bg-gray-50 p-4">
        <p className="mb-4 text-sm font-semibold text-gray-500">ADMIN</p>
        <nav className="flex flex-col gap-1 text-sm">
          <Link href="/admin" className="rounded px-2 py-1 hover:bg-gray-200">
            Dashboard
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
