import Image from "next/image";

export function DeviceMockup({
  src,
  mobileSrc,
  mobileWidth = 1179,
  mobileHeight = 2000,
  alt = "Preview de site desenvolvido pela Bora Pro Ar",
  label,
  className = "",
}: {
  src?: string;
  mobileSrc?: string;
  mobileWidth?: number;
  mobileHeight?: number;
  alt?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 ${
          mobileSrc ? "hidden sm:block" : ""
        }`}
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 rounded-full bg-bg px-3 py-1 text-center text-[11px] text-text-secondary">
            {label ?? "seusite.com.br"}
          </div>
        </div>

        <div className="relative aspect-[4/3] sm:aspect-[16/11]">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <MockPreviewSkeleton />
          )}
        </div>
      </div>

      {mobileSrc && (
        <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40 sm:hidden">
          <Image
            src={mobileSrc}
            alt={alt}
            width={mobileWidth}
            height={mobileHeight}
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}

function MockPreviewSkeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-bg p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-white/15" />
        <div className="flex gap-2">
          <div className="h-3 w-10 rounded-full bg-white/10" />
          <div className="h-3 w-10 rounded-full bg-white/10" />
          <div className="h-6 w-16 rounded-full bg-accent/80" />
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-2.5">
        <div className="h-4 w-3/4 rounded-md bg-white/20" />
        <div className="h-4 w-1/2 rounded-md bg-white/20" />
        <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
      </div>

      <div className="h-8 w-32 rounded-full bg-accent" />

      <div className="mt-auto grid grid-cols-3 gap-3">
        <div className="h-14 rounded-lg bg-white/10" />
        <div className="h-14 rounded-lg bg-white/10" />
        <div className="h-14 rounded-lg bg-white/10" />
      </div>
    </div>
  );
}
