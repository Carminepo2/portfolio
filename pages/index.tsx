import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import Button from "../components/Button";
import LinkIcon from "../components/LinkIcon";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <div className="">
        <div className="animate-blob absolute w-96 h-96 lg:w-[512px] lg:h-[512px] rounded-full bg-purple-300 bg-opacity-70 filter blur-xl"></div>
        <div className="animate-blob animation-delay-2000 absolute w-96 h-96 left-1/2 top-32 rounded-full bg-pink-300 bg-opacity-70 filter blur-xl"></div>
        <div className="animate-blob animation-delay-4000 absolute w-96 h-96 right-1/2 top-1/2 rounded-full bg-yellow-300 bg-opacity-70 filter blur-xl"></div>
      </div>

      <div className="relative z-20 bg-white/60">
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-screen flex items-center lg:justify-end">
            <div>
              <div className="flex lg:grid grid-cols-2 items-center">
                <div />
                <div>
                  <div className="flex lg:justify-end relative -top-1 lg:top-2 space-x-4">
                    <div>
                      <span className="sr-only">Github</span>
                      <LinkIcon Icon={FaGithub} href="#" className="w-8 sm:w-full" />
                    </div>
                    <div>
                      <span className="sr-only">Linkedin</span>
                      <LinkIcon Icon={FaLinkedin} href="#" className="w-8 sm:w-full" />
                    </div>
                  </div>
                  <h1 className="lg:text-right font-medium text-7xl sm:text-9xl text-gray-700">
                    <span className="text-6xl sm:text-8xl relative top-3">Carmine</span>
                    <br />
                    Porricelli
                  </h1>
                </div>
              </div>
              <p className="lg:text-right text-2xl sm:text-3xl mt-4 sm:mt-8 text-gray-400 text-opacity-50 font-medium w-3/4 sm:w-full">
                Aiuto <span className="text-purple-300 drop-shadow-purple">start up</span> e{" "}
                <span className="text-pink-300 drop-shadow-pink">aziende</span> a creare{" "}
                <span className="text-yellow-300 drop-shadow-yellow">eccezionali prodotti web</span>.
              </p>
              <div className="flex lg:justify-end space-x-4 py-8 md:text-lg">
                <Button buttonType="secondary" className="flex items-center space-x-2">
                  <>
                    <div>Scarica il CV</div>
                    <HiOutlineDownload className="relative bottom-[1px]" size={22} />
                  </>
                </Button>
                <Button buttonType="primary">I miei progetti</Button>
              </div>
              <div className="relative top-40 sm:top-20 animate-bounce text-gray-400 text-opacity-25 drop-shadow-xl animation-duration-4000">
                <IoChevronDownOutline size={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
