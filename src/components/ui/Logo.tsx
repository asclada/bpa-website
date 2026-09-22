import Link from "next/link";
import Image from "next/image";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-arrow.png"
      alt=""
      width={48}
      height={48}
      className={className}
      priority
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
      <Image
        src="/logo-wordmark.png"
        alt="Bora Pro Ar"
        width={708}
        height={115}
        className="h-6 w-auto sm:h-7"
        priority
      />
    </Link>
  );
}
