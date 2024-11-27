"use client"
import Image from "next/image";
import { FEATURES } from "../constants";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Features = () => {
  return (
    <section className="flexCenter flex-col rounded-3xl px-7 py-4
    overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full 
      flex justify-end">

        <div className="z-20 flex flex-col w-full">
          <div className="relative">
          <Image src="/logodeOasis.png" alt='logo' width={100} height={100} style={{ borderRadius: '60%' }} />
            <h2 className="bold-40 lg:bold-64 text-gray-200">Nuestros Podcasts</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  const maxDescriptionLength = 150; // Define el límite de caracteres
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;

  return (
    <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div
        className="w-55 h-70 mx-auto rounded-lg mb-4 mt-4 shadow-lg shadow-teal-500">
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          width="100%"
          height="250px"
          controls={true}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="block text-xl font-semibold text-center text-white">{title}</h2>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-200 opacity-75 sm:text-xs md:text-sm">
          {truncatedDescription}
        </p>
      </div>
    </div>
  )
}
export default Features