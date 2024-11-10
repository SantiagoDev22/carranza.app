import Gracias from "./gracias";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gracias l Original Carranza",
  description: "Gracias l Original Carranza",
};

export default function Thanks(){
    return <div><Gracias/></div>
}