import React from "react";
import {
  ArrowSmallRightIcon,
  PuzzlePieceIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import supportImage from "../assets/support.jpeg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen pt-28 rounded-br-[130px] sm:rounded-br-[400px] overflow-hidden"
    >
      {/* Background Image with Frosted Glass Effect */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-lg">
        <img
          className="object-cover w-full h-full"
          src={supportImage}
          alt="Support"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto text-white px-4 py-24 flex flex-col justify-center">
        {/* Section Heading */}
        <div className="mb-12 text-center text-gray-900">
          <h3 className="text-5xl font-bold mt-4 leading-tight text-gradient">
            Finding the right team
          </h3>
          <p className="mt-4 text-xl leading-relaxed font-semibold">
            We take pride in our work, ensuring that every application we build
            meets not only your needs but also our high quality standards.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Web Design */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-8">
              <div className="bg-indigo-600 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <PuzzlePieceIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">
                Web Design
              </h3>
              <p className="mt-4 text-lg text-gray-800">
                Our mobile-first responsive web design ensures optimal user
                experience across all devices.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-50 px-8 py-4">
              <Link to="contact">
                <p className="flex items-center text-indigo-600 cursor-pointer">
                  Contact Us <ArrowSmallRightIcon className="w-4 h-4 ml-2" />
                </p>
              </Link>
            </div>
          </div>

          {/* Hosting */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-8">
              <div className="bg-indigo-600 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <ServerStackIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">Hosting</h3>
              <p className="mt-4 text-lg text-gray-800">
                Fast, reliable web hosting services with free domain
                registration and SSL certificate.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-50 px-8 py-4">
              <Link to="platform">
                <p className="flex items-center text-indigo-600 cursor-pointer">
                  Our Services <ArrowSmallRightIcon className="w-4 h-4 ml-2" />
                </p>
              </Link>
            </div>
          </div>

          {/* Application Development */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-8">
              <div className="bg-indigo-600 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <CpuChipIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">
                Application Development
              </h3>
              <p className="mt-4 text-lg text-gray-800">
                Custom software solutions tailored to meet your business needs
                and enhance productivity.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-50 px-8 py-4">
              <Link to="work">
                <p className="flex items-center text-indigo-600 cursor-pointer">
                  What We've done{" "}
                  <ArrowSmallRightIcon className="w-4 h-4 ml-2" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
