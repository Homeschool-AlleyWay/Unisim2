import { useEffect } from 'react';
import { useLocation } from 'wouter';

/** Hosts the UNIFY Academy build (public/academy) full-screen. The game's "← Maple Grove" button posts `academy:exit`. */
export default function Academy() {
  const [, navigate] = useLocation();
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onMsg = (e: MessageEvent) => {
      if (e.data && e.data.type === 'academy:exit') navigate('/');
    };
    window.addEventListener('message', onMsg);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('message', onMsg);
    };
  }, [navigate]);

  return (
    <main className="h-[100dvh] w-full bg-[#EADFCB]">
      <h1 className="sr-only">UNIFY Academy</h1>
      <iframe
        title="UNIFY Academy"
        src={`${import.meta.env.BASE_URL}academy/index.html`}
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </main>
  );
}
