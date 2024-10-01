
import Image from 'next/image'

export default function Social() {   
    return (
        <ul className="flex items-center gap-x-3 md:gap-x-6">
            <li>
                <a href="https://www.facebook.com/originalcarranza" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/website/components/facebook.webp"
                        alt="Logo Facebook"
                        className='w-[26px] lg:w-[43px] h-[26px] lg:h-[43px]'
                        width={43}
                        height={43}
                    />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ocarranzaoficial/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/website/components/instagram.webp"
                        alt="Logo Instagram"
                        className='w-[26px] lg:w-[43px] h-[26px] lg:h-[43px]'
                        width={43}
                        height={43}
                    />
                </a>
            </li>
        </ul>
    );
}