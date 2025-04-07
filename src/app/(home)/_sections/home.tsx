import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-44 h-screen flex items-start mt-10 md:mt-20"
    >
      <Image
        src="https://svgsilh.com/svg/26432.svg"
        alt="image"
        width={150}
        height={150}
        className="absolute z-0 invert-[0.1] hidden lg:block"
      />
      <Image
        src="https://svgsilh.com/svg/26432.svg"
        alt="image"
        width={120}
        height={120}
        className="absolute z-0 invert-[0.1] block lg:hidden px-2"
      />
      <div className="px-5 lg:px-10">
        <div className="relative font-sans z-10 py-4 lg:py-6 mb-5">
          <p className="text-emerald-400 font-medium text-2xl lg:text-4xl">
            Hello there, I{"'"}m-
          </p>
          <p className="font-extrabold text-5xl lg:text-8xl mt-1 tracking-tight">
            Wildan Egy Ardiawan .
          </p>
        </div>

        <div className="mb-10">
          <p className="text-xl lg:text-3xl font-bold tracking-tight max-w-[700px]">
            <span className="">Software Engineer. </span>
            <span className="text-muted-foreground">
              A self-taught developer with an interest in Computer Science.
            </span>
          </p>
        </div>

        <div className="text-muted-foreground text-sm lg:text-xl mb-10">
          <p>🚀 Currently specializing in Fullstack Developer</p>
          <p>
            ⚡ Software Engineer at{" "}
            <span className="text-emerald-400">Ebdesk Teknologi</span>
          </p>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex gap-x-2">
            <Link href="https://github.com/wildanegi011" target="_blank">
              <Button className="text-md font-semibold">
                <FaGithub color="rgb(60, 207, 145)" />
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/wildan011" target="_blank">
              <Button className="text-md font-semibold">
                <FaLinkedin color="rgb(60, 207, 145)" />
                LinkedIn
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/147Zoah6kn4OkD8IWOoEAwEA0OKsuFWC-/view?usp=sharing"
              target="_black"
            >
              <Button className="text-md font-semibold">
                <FaFilePdf color="rgb(60, 207, 145)" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
