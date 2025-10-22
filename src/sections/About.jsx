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
    navigator.clipboard.writeText(' 88870XXXXX');
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
            <img src="assets/grid1.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Sameep Chaurasia</p>
              <p className="grid-subtext">
               Hi, I’m Sameep Chaurasia 👋<br/><br/>

              I’m a Full-Stack Developer in the making, passionate about learning and building scalable, real-time applications that create seamless user experiences.<br/><br/>

              I’m also the Building <p className='font-bold text-white'>TheCodersTrade.in</p><br/>
              <a className="font-serif font-semibold text-xl group text-black bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/100" href="https://thecoderstrade.in" target="_blank" rel="noreferrer">
                <p> Visit <p className='underline'>thecoderstrade.in ↗</p> </p>
              </a><br/>
               — A platform that delivers real-time market insights, stock data, and analytics to help investors make smarter decisions.<br/>
               I enjoy exploring new technologies, experimenting with projects, and learning by building. From frontends that engage users to backends that scale, I’m continuously improving my skills in development, DevOps, and real-time systems.<br/><br/>

              🌟 My Goal: Keep growing as a Full-Stack / Cloud-Native Engineer, contribute to impactful projects, and scale TheCodersTrade.in into a leading fintech and analytics platform.<br/>

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
                <p className="grid-headtext">Languages:</p> C++, JavaScript, TypeScript, Python<br/>
                <p className="grid-headtext">Frontend:</p> Dynamic HTML, TailwindCSS, React.js, Next.js, WebRTC<br/>
                <p className="grid-headtext">Backend:</p> Node.js, Express.js, Prisma, REST APIs, MongoDB, PostgreSQL<br/>
                <p className="grid-headtext">Cloud & DevOps:</p> Docker, Kubernetes, Linux, Git/GitHub<br/>
                <p className="grid-headtext">Systems & Automation:</p> Kafka, Zapier<br/>
                <p className="grid-headtext">Problem Solving:</p> Strong foundation in Data Structures & Algorithms (C++)
                </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
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
                href="/assets/Sameep01_Resume.pdf"
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
                Coding, for me, is not just a technical skill but a passion that has shaped the way I think, learn, and create. What started as a simple curiosity about how software works quickly turned into a deep interest in building things from scratch, solving problems, and continuously improving myself as a developer. Over time, I’ve realized that coding is much more than writing instructions for a machine — it’s about bringing ideas to life, finding creative solutions to challenges, and making an impact through technology.<br/>

                One of the things I love most about coding is the process of problem-solving. Every new challenge is like a puzzle, and finding the most efficient, elegant solution gives me a sense of achievement. My strong foundation in data structures and algorithms has taught me how to approach problems logically and optimize solutions, while my experience with modern technologies allows me to translate those solutions into real-world applications.<br/>

                I’m equally fascinated by the creative side of coding. Designing user-friendly frontends with React and TailwindCSS, developing scalable backends with Node.js and databases like PostgreSQL or MongoDB, and exploring automation and cloud technologies like Docker and Kubernetes — all of these excite me because they allow me to build systems that are not only functional but also meaningful.<br/>

                What drives me most is the fact that coding is an endless journey of learning. Technology keeps evolving, and I enjoy keeping pace with it — experimenting with new frameworks, reading about advancements, and applying them to projects. For me, every project is not just a task but an opportunity to learn something new, to innovate, and to push my boundaries.<br/>

                Coding is not just my career path; it is a passion that motivates me to create, explore, and contribute to the world of technology
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3">
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
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Phone no. - 88870XXXXX</p>
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