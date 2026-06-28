/**
 * Layout da área do paciente.
 * Mobile first, simples, fontes grandes. Ver docs/07-ui-ux.md.
 */
export default function PacienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto min-h-screen max-w-md p-6">{children}</div>;
}
