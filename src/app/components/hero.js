import Image from "next/image"
import HeroImage from "/public/AdobeStock_815178598.jpeg"

const Hero = () => {
  return (
    <div className="flex justify-between mt-14">
        <div>
            <p1 className="text-xl font-[600] text-gray-400">EMPOWERING ENVIRONMENTAL CONSERVATION</p1>
            <h1 className="text-9xl font-[500]">Join Us in</h1>
            <h1 className="text-9xl leading-14 text-[#4baa04] font-[500] italic font-poppins">Portecting</h1>
            <h1 className="text-9xl font-[500] mb-20">Our Planet</h1>
            <p1 className="font-[600] text-gray-400 leading-8 text-l" >Join Us in Protecting Our Planet, Preserving Nature and <br/> Creating a Sustainable Future for Generations to Come</p1>
            <form className="flex bg-white rounded mt-16">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-[500px] h-[60px] border border-gray-300 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-[#4baa04]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#4baa04] text-white rounded-r-3xl hover:bg-[#4baa04] focus:outline-none focus:ring-2 focus:ring-[#4baa04]"
        >
          Sign Up
        </button>
      </form>
        </div>
        <div>
        <Image
        className="rounded-3xl"
      src={HeroImage}
      width={800}
      height={800}
      alt="Site Hero Image"
    />
        </div>
    </div>
  )
}

export default Hero