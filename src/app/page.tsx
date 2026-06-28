import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-8 p-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">Clínica de Optometria</h1>
        <p className="mt-2 text-gray-600">Sistema de gestão</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href="/agendar"
          className="rounded-lg bg-blue-600 px-5 py-4 text-lg font-medium text-white hover:bg-blue-700"
        >
          Agendar consulta
        </Link>
        <Link
          href="/admin"
          className="rounded-lg bg-gray-100 px-5 py-4 text-lg font-medium text-gray-900 hover:bg-gray-200"
        >
          Área administrativa
        </Link>
      </div>
    </main>
  );
}
