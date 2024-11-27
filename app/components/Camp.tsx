import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}


const CampSite = ({backgroundImage, title, subtitle} : CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        
        <div className="flexCenter gap-4">

            <Image src="/logodeOasis.png" alt='logo' width={100} height={100} style={{ borderRadius: '60%' }} />

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>

        </div>

        <div className="flexcenter gap-6">
        </div>


      </div>
    </div>
  )
}


const Camp = () => {
  return (
    <section className="2xl:max-container
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

      <div className="hide-scrollbar flex xl:h-[640px] h-[640px] w-full items-start 
      justify-start gap-8 overflow-x-auto lg:h-[400px]">
        <CampSite 
        backgroundImage="bg-bg-img-2"
        title="Proyecto Guajira"
        subtitle="Oasis de vida"
        />
        <CampSite
        backgroundImage="bg-bg-img-1"
        title="Proyecto Guajira"
        subtitle="Oasis de vida"
        />
      </div>

      <div className="flexCenter -mt-60 px-6 lg:-mt-60">
        <div className="border-orange-100 bg-gray-300 bg-opacity-30 p-8 lg:max-w-[500px] xl:max-w-[734px]
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
        
          <h2 className="regular-24 md:regular-32 2xl: regular-64 capitalize text-gray-200">
            <strong>¿Que es Oasis de la Vida?</strong>
          </h2>
          <p className="regular-18 xl:regular-16 mt-5 text-gray-200">
          "El Oasis de la Vida" es un proyecto transmedia que combina documental y podcast, financiado por MinTIC Abre Cámara 2024, con la misión de dar voz y visibilidad al talento deportivo de los jóvenes Wayuu.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    
    </section>
  )
}

export default Camp