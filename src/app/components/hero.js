import Image from "next/image";
import HeroImage from "/public/AdobeStock_815178598.jpeg";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row justify-between mt-14">
      <div className="md:w-1/2">
        <p className="text-xl font-[600] text-gray-400">EMPOWERING ENVIRONMENTAL CONSERVATION</p>
        <h1 className="text-6xl md:text-9xl font-[500]">Join Us in</h1>
        <h1 className="text-6xl md:text-9xl leading-tight text-[#4baa04] font-[500] italic font-poppins">Protecting</h1>
        <h1 className="text-6xl md:text-9xl font-[500] mb-10 md:mb-20">Our Planet</h1>
        <p className="font-[600] text-gray-400 leading-8 text-l">
          Join Us in Protecting Our Planet, Preserving Nature and <br /> Creating a Sustainable Future for Generations to Come
        </p>
        <form className="flex bg-white rounded mt-8 md:mt-16">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-[500px] h-[60px] border border-gray-300 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-[#4baa04]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#4baa04] text-white rounded-r-3xl hover:bg-[#4baa04] focus:outline-none focus:ring-2 focus:ring-[#4baa04]"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          className="rounded-3xl"
          src={HeroImage}
          width={800}
          height={800}
          alt="Site Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
