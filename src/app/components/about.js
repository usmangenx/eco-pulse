import Image from "next/image";
import about from "/public/Firefly 20240613140518 (2).png";

const About = () => {
  return (
    <div className="pt-24 relative w-full mx-auto">
      <Image
        id="about"
        className="rounded-3xl w-full h-auto"
        src={about}
        width={800}
        height={800}
        quality={100}
        alt="about"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <div className="relative mt-8 md:absolute md:inset-40 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <p className="text-gray-400 text-xl">About Us</p>
          <h1 className="text-4xl md:text-6xl mt-3">
            Eco<span className="text-[#4baa04]">Pulse</span> was born <br /> from a shared <br /> passion
          </h1>
        </div>
        <p className="text-gray-500 md:w-1/2 md:ml-8">
          EcoPulse was born from a shared passion for nature and a deep concern for the environment. Its founders, inspired by the urgent
          need for action in the face of environmental degradation, came together with a vision to make a difference. They witnessed firsthand
          the devastating effects of deforestation, habitat loss, and climate change, driving them to take action. <br /> <br /> With a commitment to
          fostering positive change, they set out to create EcoPulse, a platform for environmental conservation and sustainable development.
        </p>
      </div>
    </div>
  );
};

export default About;
