import React from "react";
import BackgroundBlob from "./BackgroundBlob";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import Button from "../../components/Button";
import LinkIcon from "../../components/LinkIcon";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Header() {
  const { scrollYProgress } = useViewportScroll();
  const arrowDownOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const backgroundBlobs = [
    <BackgroundBlob key="header-blob-1" color="purple" className="w-96 h-96 lg:w-[512px] lg:h-[512px]" />,
    <BackgroundBlob key="header-blob-2" color="pink" className="w-96 h-96 left-1/2 top-32" />,
    <BackgroundBlob key="header-blob-3" color="yellow" className="w-96 h-96 right-1/2 top-1/2 " />,
  ];

  return (
    <SectionWrapper background={backgroundBlobs}>
      <div className="flex items-center lg:justify-end h-screen">
        <div>
          <div className="flex lg:grid grid-cols-2 items-center">
            <div />
            <div>
              <div className="flex lg:justify-end relative -top-1 lg:top-2 space-x-4">
                <div>
                  <span className="sr-only">Github</span>
                  <LinkIcon Icon={FaGithub} href="#" className="w-8 sm:w-auto" />
                </div>
                <div>
                  <span className="sr-only">Linkedin</span>
                  <LinkIcon Icon={FaLinkedin} href="#" className="w-8 sm:w-auto" />
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
            <div>
              <Button buttonType="secondary" className="flex items-center space-x-2">
                <>
                  <div>Scarica il CV</div>
                  <HiOutlineDownload className="relative bottom-[1px]" size={22} />
                </>
              </Button>
            </div>
            <Button buttonType="primary">I miei progetti</Button>
          </div>
          <motion.button
            style={{ opacity: arrowDownOpacity }}
            className="relative inline-block transition-colors top-20 animate-bounce text-gray-400 hover:text-gray-500 text-opacity-25 drop-shadow-xl animation-duration-4000"
          >
            <IoChevronDownOutline size={80} />
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Header;
