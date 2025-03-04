import Image from "next/image";

const ProfileSection = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-start items-start -mt-28 md:mt-32 scroll-mt-28 md:scroll-mt-44 px-6"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-y-6 md:gap-16">
        {/* Text Section */}
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-xl md:text-3xl font-bold mb-6">⚡ About Me</h1>
          <div className="text-neutral-400 text-sm md:text-lg">
            <p>
              Hi! I{"'"}m Wildan Egi Ardiawan, I{"'"}m a software engineer and
              have been
              <span className="text-emerald-400">
                {" "}
                working for more than 8 years.
              </span>
              <br />
            </p>

            <p className="mt-5">
              I am a dedicated Software Engineer with a passion for building
              efficient and innovative technology solutions. With experience in
              <span className="text-emerald-400"> Fullstack Development</span>,
              I have a strong interest in{" "}
              <span className="text-emerald-400">software development</span>,
              <span className="text-emerald-400"> system architecture</span>,
              and the latest technologies. By applying a problem-solving
              approach, I always strive to enhance efficiency and scalability in
              every project I work on. <br /> <br /> I am working as a Software
              Engineer at{" "}
              <span className="text-emerald-400">Ebdesk Teknologi</span> , where
              I continue to hone my skills in developing impactful technology
              products. I firmly believe that technology is a powerful tool to
              create better solutions for the world. <br />
              <br /> 📩 Let’s Connect: If you{"'"}re interested in collaborating
              or discussing further, feel free to reach out!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start md:mt-10">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full object-cover w-72 h-72 md:w-80 md:h-80"
          />
          <Image
            src="https://svgsilh.com/svg/26432.svg"
            alt="image"
            width={150}
            height={150}
            className="absolute z-0 invert-[0.1] hidden lg:block right-10"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
