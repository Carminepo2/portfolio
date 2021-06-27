import React from "react";
import BackgroundBlob from "./BackgroundBlob";
import SectionWrapper from "./SectionWrapper";
import LinePortrait from "../../components/LinePortrait";

function ChiSono() {
  const backgroundBlobs = [
    <BackgroundBlob key="chi-sono-blob-1" sizeClasses="w-64 h-64" positionClasses="right-80 top-96" color="purple" />,
    <BackgroundBlob key="chi-sono-blob-2" sizeClasses="w-96 h-96" positionClasses="right-0 top-0" color="pink" />,
  ];

  return (
    <SectionWrapper background={backgroundBlobs}>
      <div className="flex flex-col justify-center ">
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="mt-8 sm:mt-0 text-4xl sm:text-6xl font-medium text-gray-700">Chi sono</h2>
              <p className="text-xl sm:text-2xl leading-8 sm:leading-10 text-gray-400 mt-4 w-10/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam consequatur rerum iusto sequi,
                sunt eveniet ab doloribus aperiam maiores vero quod obcaecati a perferendis officia quis alias suscipit
                nulla!
              </p>
            </div>
          </div>
          <div className="relative flex md:justify-center lg:justify-end order-first md:order-last">
            <LinePortrait />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ChiSono;
