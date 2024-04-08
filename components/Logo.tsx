import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/bigo-logo.png" alt="" height={75} width={150} />
    </Link>
  );
}
