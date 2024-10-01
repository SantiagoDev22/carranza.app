import Image from "next/image";

export default function Banner() {   
    return (
        <figure>
            <Image
                src="/images/website/home/banner.webp"
                alt="Precio de Détox capilar"
                width={2000}
                height={2000}
            />          
        </figure>
    );
}