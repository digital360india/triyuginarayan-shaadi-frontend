import Image from "next/image";
import elloraCavesImg from "../../asset/images/Ellora-caves.png";
import mapImg from "../../asset/images/map-desktop.png";
import mapMobile from "../../asset/images/map-mobile.png";

const TempleInfoSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-25">
      {/* Why Special Section */}
      <div className="flex flex-col gap-10 w-[90%] text-center px-6">
        <p className=" text-center heading">
          Why this place is so <span className="text-[#A42D2B]">Special</span>?
        </p>
        <div className="flex flex-col gap-6 leading-relaxed">
          <p className="para text-justify md:text-center">
            Triyuginarayan Temple isn’t just a wedding venue — it’s a divine location. According to mythology, this is where Lord Shiva and Parvati were married, and Lord Vishnu stood witness to their union. The temple’s eternal fire, called the Akhand Dhuni, still burns to this day. That’s why couples come from all over — to begin their forever where sacred love once started. The temple’s eternal fire, called the Akhand Dhuni, still burns to this day. That’s why couples come from all over — to begin their forever where sacred love once started.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          <Image
            src={elloraCavesImg}
            alt="Triyuginarayan Temple caves"
            className="w-[600px]"
          />
          <p className="mt-2 text-sm italic para">A scene depicting the wedding of Shiva and Goddess Parvati</p>
        </div>
      </div>

      {/* How to Reach Section */}
      <div className="flex flex-col gap-10 w-[80%] text-center mt-25">
        <p className="heading">How to Reach <span className="text-[#A42D2B]">Triyuginarayan Temple?</span> </p>
        <p className="text-justify md:text-center para">
          Triyuginarayan is around 15 km from Sonprayag, a key stop on the Kedarnath route.
          It’s well connected, but the last stretch is through the mountains — peaceful and scenic.
        </p>
        <div className="hidden md:flex md:gap-6 mt-6">
        <Image src={mapImg} alt="Triyuginarayan Temple location map" className="mx-auto w-[900px]" />
        </div>
        <div className="block md:hidden">
        <Image src={mapMobile} alt="Triyuginarayan Temple location map" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default TempleInfoSection;
