import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mx-14 relative mt-16 min-h-[900px] lg:min-h-[1195.78px] grid items-end bg-no-repeat bg-cover bg-center bg-hero">
        <div className="absolute inset-0 z-10 bg-gradient-black-esp lg:bg-gradient-black"></div>
        <hgroup className="text-white text-center relative z-20 flex flex-col gap-y-9 mb-10 lg:mx-0 mx-5 sm:mx-10">
          <h1 className="text-6xl font-semibold leading-[0.9] text-shadow">
            TRATAMIENTO CAPILAR <br />
            <span className="text-4xl">
            PARA LA CAÍDA DE CABELLO
            </span>
          </h1>
          <h2 className="text-2xl text-shadow-sm">
            Productos para el cuidado del cabello, barba y la salud.
          </h2>
        </hgroup>
      </section>
    </main>
  );
}
