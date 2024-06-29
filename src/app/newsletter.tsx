export default function Newsletter() {   
    return (
        <div className='flex flex-col gap-y-1'>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-oc-green-1 dark:border-gray-600 dark:focus:border-oc-green-1 focus:outline-none focus:ring-0 focus:border-oc-green-1 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-oc-green-1 peer-focus:dark:text-oc-green-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico</label>
            </div>
            <button className='border border-oc-green-1 sm:w-40 text-black px-10 py-1 hover:bg-oc-green-1 hover:text-white transition'>
            Registro
            </button>
        </div>
    );
}