import { useState } from 'react';
import Globe from 'react-globe.gl';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy1 = () => {
    navigator.clipboard.writeText(' 8887011889');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(' chaurasiasameep26@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Sameep Chaurasia</p>
              <p className="grid-subtext">
                With 2+ years of development experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications<br/>
                <p className="grid-headtext"> Language - </p>C++ , Javascript<br/>
                <p className="grid-headtext">Technologies and Tools - </p>Dynamic HTML, Tailwind, Typescript, React, NextJs, NodeJs, Express, ThreeJs
                MongoDB, Docker, Postgres, Prisma,Git/Github, Linux
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={426}
                width={426}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.2}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 27, lng: 80, text: 'I am currently here!', color: 'white', size: 20 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
              <Button name="Contact me here ↓" isBeam containerClass="w-full mt-10" />
              <a
                 className="bg-white p-4 m-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.7rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                   href="https://www.linkedin.com/in/sameep-chaurasia-00b8a725a/"
                  target="_blank"
                  >
                  <BsLinkedin />
                  <p>LinkedIn</p>
              </a>
              <a
                  className="bg-white p-4 m-4 text-gray-700 flex items-center gap-2 text-[1.7rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/SameepChaurasia"
                  target="_blank"
                >
                <FaGithubSquare />
                <p> Github</p>
              </a>
              <a
                 className="bg-white p-4 m-4 text-gray-700 flex items-center gap-2 text-[1.7rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                 href="https://x.com/SameepChau84289"
                 target="_blank"
                >
                < FaXTwitter />
                <p> </p>
              </a>
              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/100"
                href="/assets/ResumeMine.pdf"
                download
                >
                  Download Resume{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>

              <div className="copy-container" onClick={handleCopy1}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Phone no. - 8887011889</p>
              </div>

              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">chaurasiasameep26@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;