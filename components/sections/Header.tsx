import React from "react";
import BackgroundBlob from "./BackgroundBlob";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import Button from "../../components/Button";
import LinkIcon from "../../components/LinkIcon";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Router from "next/dist/client/router";

function Header() {
  const { scrollYProgress } = useViewportScroll();
  const arrowDownOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const backgroundBlobs = [
    <BackgroundBlob
      key="header-blob-1"
      color="purple"
      sizeClasses="w-96 h-96 lg:h-[512px] lg:w-[512px]"
      positionClasses="-left-48 "
    />,
    <BackgroundBlob key="header-blob-2" color="pink" sizeClasses="w-96 h-96" positionClasses="right-96 top-16" />,
    <BackgroundBlob key="header-blob-3" color="yellow" sizeClasses="w-96 h-96" positionClasses="left-52 top-[512px]" />,
  ];

  return (
    <SectionWrapper background={backgroundBlobs}>
      <div className="flex items-center lg:justify-end h-screen">
        <div className="relative">
          <div className="flex lg:grid grid-cols-2 items-center">
            <div />
            <div>
              <div className="flex lg:justify-end relative -top-1 lg:top-2 space-x-4">
                <div>
                  <LinkIcon Icon={FaGithub} href="#" className="w-8 sm:w-auto">
                    <span className="sr-only">Github</span>
                  </LinkIcon>
                </div>
                <div>
                  <LinkIcon Icon={FaLinkedin} href="#" className="w-8 sm:w-auto">
                    <span className="sr-only">Linkedin</span>
                  </LinkIcon>
                </div>
              </div>
              <h1 className="lg:text-right font-medium text-7xl sm:text-9xl text-gray-700">
                <span className="text-6xl sm:text-8xl relative top-3">Carmine</span>
                <br />
                Porricelli
              </h1>
            </div>
          </div>
          <p className="lg:text-right text-2xl sm:text-3xl mt-4 sm:mt-8 text-gray-600/50 w-3/4 sm:w-full">
            Aiuto <span className="text-purple-300 drop-shadow-purple font-bold">start up</span> e{" "}
            <span className="text-pink-300 drop-shadow-pink font-bold">aziende</span> a creare{" "}
            <span className="text-yellow-300 drop-shadow-yellow font-bold">eccezionali prodotti web</span>.
          </p>
          <div className="flex lg:justify-end items-start space-x-4 py-8 md:text-lg">
            <div>
              <Button buttonType="secondary" className="flex items-center space-x-2">
                <>
                  <div>Scarica il CV</div>
                  <HiOutlineDownload className="relative bottom-[1px]" size={22} />
                </>
              </Button>
              <small className="text-gray-400/60 text-xs relative bottom-0.5 select-none">
                Aggiornato il <span className="font-medium text-gray-500/60">26/06/2021</span>
              </small>
            </div>
            <Button onClick={() => Router.push("/projects")} buttonType="primary">
              I miei progetti
            </Button>
          </div>
          <motion.button
            aria-hidden="true"
            style={{ opacity: arrowDownOpacity }}
            className="absolute hidden sm:block transition-colors -bottom-20 animate-bounce text-gray-400 hover:text-gray-500 text-opacity-25 drop-shadow-xl animation-duration-4000"
          >
            <IoChevronDownOutline size={80} />
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Header;
