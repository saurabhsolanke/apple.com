export default function Navbar() {
    return (
        <>
            <div className="flex w-full flex-col justify-center bg-white px-6 py-3 fixed lg:flex-row lg:items-center">
                <div className="flex items-center">
                    <ul className="mt-2 flex flex-col items-center gap-4 gap-x-8 font-medium text-gray-700 dark:text-zinc-400 lg:mt-0 lg:flex-row lg:gap-4">
                        <li><img src="/applenav.svg" alt="" /></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Store</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Mac</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">iPad</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">iPhone</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Watch</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Vision</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">AirPods</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">TV & Home</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Entertainment</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Accessories</a></li>
                        <li><a href="#" className="hover:text-sky-700 px-3">Support</a></li>
                        <li><img src="/search.svg" alt="" className="px-3"/></li>
                        <li><img src="/bag.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}