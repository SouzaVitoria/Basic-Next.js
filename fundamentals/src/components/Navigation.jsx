import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/estiloso"> Ir para Estiloso </Link>
      <Link href="/estatico"> Ir para Estático </Link>
    </div>
  );
}
