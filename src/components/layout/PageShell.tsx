import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black p-1.5 sm:p-3 md:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-0.75rem)] max-w-[1440px] flex-col overflow-hidden rounded-[24px] bg-bg sm:min-h-[calc(100vh-1.5rem)] sm:rounded-[28px] md:min-h-[calc(100vh-2rem)] md:rounded-[32px]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
