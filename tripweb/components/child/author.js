import Image from 'next/image';
import Link from 'next/link';

const author = () => {
  return (
    <div className="flex py-5 pb-14">
        <Image src={"/assests/image2.jpg"} width={50} height={50} className="rounded-full"/>
        <div className="flex flex-col justify-center px-4">
            <Link href="/">
                <div className="text-md font-bold text-gray-800 hover-text-gray-500 ">Jo Walton</div>
            </Link>
            <span className="text-sm text-gray-500">Science fiction writer & poet</span>
        </div>
    </div>
  )
}

export default author