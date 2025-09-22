import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import HackathonData from "../data/HackathonData";
import HackathonPage from "../components/Hackathon";

export default function Hackathon() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100">
      <section>
        <div className="bg-white py-2 text-white">
          <div className="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
            <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
              {/* Add content for the left column */}
              <p className="tracking-loose ml-2 font-semibold uppercase text-black">
                Department of Computer Engineering
              </p>
              <p className="mb-2 ml-2 text-sm text-black md:text-base">
                Our Story
              </p>
              <p className="my-2 font-bold leading-normal text-green-800 md:text-4xl md:leading-relaxed lg:text-6xl ">
                Algorithm
              </p>
              <p className="mb-4 text-sm text-black md:text-base">
                Algorithm hackathon is an event where participants come together
                to solve real world problems, basically in a competitive
                environment.
              </p>
              <a
                href="https://algorithm8.aiktc.ac.in/"
                class="group relative my-2 inline-block text-lg"
              >
                <span class="relative z-10 block overflow-hidden rounded-lg border-2 border-orange-600 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300  ease-out group-hover:text-white">
                  <span class="absolute inset-0 h-full w-full rounded-lg bg-orange-50 px-5 py-3"></span>
                  <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-orange-600 transition-all duration-300 group-hover:-rotate-180"></span>
                  <span class="relative">Algorithm 8.O</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-orange-600 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
            <div className=" sticky ml-2 text-sm  font-semibold md:ml-12 lg:w-2/3">
              <div className="container mx-auto h-full w-full">
                <div className="wrap relative h-full overflow-hidden p-10">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid green",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute min-h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid green",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div>
                    {HackathonData.map((hackathon) => (
                      <HackathonPage
                        key={hackathon.title}
                        hackathon={hackathon}
                      />
                    ))}
                  </div>
                  <img
                    className="mx-auto mb-36 "
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                    alt="Hackathon Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
