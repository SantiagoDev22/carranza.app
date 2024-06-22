import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Nosotros",
};

export default function about() {   
    return (
        <main>
            <div className="container">
                <hgroup>
                    <h1 className="text-center font-bold">
                        Nosotros
                    </h1>
                </hgroup>
            </div>
        </main>
    );
}