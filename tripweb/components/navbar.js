import Link from 'next/link';

const navbar = () => {
  return (
    <header className="bg-white">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
              <div className="shrink w-80 ">
                <a className="font-bold text-xl text-gray-800">TripAttack</a>
            </div>
              <div className="md:flex-none md:w-96 w-72  flex justify-center py-4 sm:py-0">
                <input type="text" className="mt-1 block w-96 px-3 py-2 bg-white border-slate-300 rounded-md text-sm shadow-md placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Select your preferred states" />
            </div>
            <div className="w-96 flex justify-center">
                <div className="flex gap-6 text-gray-800">
                    <Link href="/"><div>Home</div></Link>
                    <Link href="/destinations"><div>Destinations</div></Link>
                    <Link href="/about-us"><div>About Us</div></Link>
                    <Link href="/login"><div>Login</div></Link>
                </div>
              </div>
        </div>
    </header>
  )
}

export default navbar