import Image from "next/image"
import Logo from "/public/logo.JPG"

const NavBar = () => {
  return (
    <div className="flex justify-between border-r-2 border-b-2 border-l-2 p-7 border-gray-200 rounded-b-3xl">
         <Image
      src={Logo}
      width={150}
      height={75}
      alt="Picture of the author"
    />
        <ul className="flex mt-3">
            <li className="mr-2 text-gray-500 font-[600]">HOME</li>
            <li className="ml-2 text-gray-500 font-[600]">ABOUT US</li>
        </ul>
        <button className="bg-[#4baa04] px-5 rounded-3xl text-white">Join Us</button>
    </div>
  )
}

export default NavBar