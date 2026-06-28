import { ButtonHTMLAttributes } from "react";

type Variant = "primario" | "secundario";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const estilos: Record<Variant, string> = {
  primario: "bg-blue-600 text-white hover:bg-blue-700",
  secundario: "bg-gray-100 text-gray-900 hover:bg-gray-200",
};

/** Botão base reutilizável. Ver docs/07-ui-ux.md. */
export function Button({
  variant = "primario",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-5 py-3 font-medium transition-colors disabled:opacity-50 ${estilos[variant]} ${className}`}
      {...props}
    />
  );
}
