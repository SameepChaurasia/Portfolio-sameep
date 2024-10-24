import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

          <div className="flex gap-3">
            <div>
              <a
                 className="bg-white p-4 m-4 text-gray-700 hover:text-gray-950 flex items-center gap-1 text-[1rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                   href="https://www.linkedin.com/in/sameep-chaurasia-00b8a725a/"
                  target="_blank"
                  >
                  <BsLinkedin />
                </a>
            </div>
            <div>
              <a
                  className="bg-white p-4 m-4 text-gray-700 flex items-center gap-1 text-[1rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/SameepChaurasia"
                  target="_blank"
                >
                <FaGithubSquare />
                {/* <p> Github</p> */}
              </a>
            </div>
            <div>
            <a
                  className="bg-white p-4 m-4 text-gray-700 flex items-center gap-1 text-[1rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://x.com/SameepChau84289"
                  target="_blank"
                >
                < FaXTwitter />
                {/* <p> Github</p> */}
              </a>
            </div>
          </div> 

        <p className="text-white-500">© 2003 Sameep Chaurasia. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;