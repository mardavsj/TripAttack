import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';

const section1 = () => {

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Time to travel</h1>
        {Slide()}
      </div>
    </section>
  )
}

function Slide(){
  return (
    <div className="grid md:grid-cols-2" >
      <div className="image">
        <Link href="/">
          <div><Image src={"/assets/image1.jpg"} width={800} height={800}/></div>
        </Link>
      </div>
      <div className="flex justify-center flex-col">
        <div className="cat ">
          <Link href="/">
            <div className="text-orange-700 hover:text-orange-600 ">Buisness Travel</div>
            <div className="text-gray-800 hover:text-gray-600">July 3 2022</div>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <div className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-600">There&apos;s a sunrise and a sunset every single day, and they&apos;re absolutely free. Don&apos;t miss so many of them.</div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          kvbk elf  elwb elwbv befl jbefgil wlbf bwfb wvfob fkb feb,d ro3f lefbdf wgrb jfvr iuu fwegt gkegbvig4 grrbrvkf grvbgefvbg rgbrgrkugbr gjrjb ugf fgiuegbj uigrb gre  irgjb uigrrieu rgug  ugiegb i4ugigr 
        </p>
        <Author></Author>
      </div>
    </div>
  )
}

export default section1