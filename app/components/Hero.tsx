"use client"
import Image from "next/image";
import Button from "./Button";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type HeroProps = {
    scrollToFeatures: () => void;
    scrollToCamp: () => void;
};

const Hero = ({ scrollToFeatures, scrollToCamp }: HeroProps) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsPlaying(true);
        setIsClient(true);
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isClient) return null;

    return (
        <section
            className="max-container  padding-container flex flex-col
    gap-20 pb-32 md:gap-28 lg:py-5 xl:flex-row"
        >
            {isLargeScreen && (
                <div>
                    <div className="hero-map">
                        <ReactPlayer
                            url="/trailer.mov"
                            playing={isPlaying}
                            loop={true}
                            controls={false}
                            muted={true}
                            width="100%"
                            height="1100px"
                            onReady={() => setIsPlaying(true)}
                        />
                    </div>

                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="relative z-20 flex justify-end items-end mb-4">
                        <div className="w-[900px]">
                            <p className="bold-16 lg:bold-20 mt-6 text-gray-200 xl:max-w-[520] text-center leading-relaxed">
                                EN EL CORAZÓN DE LA GUAJIRA, UNA REGIÓN AZOTADA POR LA DESIGUALDAD Y LA ESCASEZ, “EL OASIS DE LA VIDA” SIGUE LA HISTORIA DE NELSON, UN JOVEN WAYUU QUE TRANSFORMA SU VIDA Y LA DE SU COMUNIDAD A TRAVÉS DEL DEPORTE CON EL KITESURFING. TRAS UNA INFANCIA MARCADA POR LA POBREZA EXTREMA, NELSON Y SU HERMANO BETO ENCUENTRAN EN ESTE DEPORTE NO SOLO UNA PASIÓN, SINO UN PUENTE HACIA NUEVAS OPORTUNIDADES. A MEDIDA QUE SUPERAN LOS DESAFÍOS PERSONALES Y COLECTIVOS, INCLUIDA UNA CARRERA TRUNCADA POR UNA LESIÓN DE PARTE DE NELSON, ESTE REGRESA A SU TIERRA NATAL PARA FUNDAR LA ESCUELA “AWALAYUU”, UN REFUGIO PARA ENSEÑAR KITESURFING Y VALORES ESENCIALES A LA PRÓXIMA GENERACIÓN DE JÓVENES WAYUU Y BUSCANDO OFRECER EL MISMO APOYO QUE ÉL TUVO EN SU NIÑEZ PARA SALIR ADELANTE
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-end">
                        <p className="bold-16 lg:bold-20 text-white w-full relative z-20">
                            <span className="regular-16 lg:regular-20 ml-1">
                                !Somos una Fundación que trabaja para mejorar la calidad de vida de las comunidades Wayúu.! 2023🧡 #construyendosueñoswayúu
                            </span>
                        </p>
                        <div className="flex flex-wrap-reverse xl:flex-wrap justify-between gap-5 lg:gap-10">
                            <div>

                                <div className="relative flex flex-1 items-start">
                                    <div className="relative z-20 w-[268px] flex-col gap-8
rounded-3xl bg-green-90 px-7 py-8">

                                        <div className="flex flex-col">

                                            <div className="flexBetween">
                                                <p className="bold-20 text-gray-30"> Ubicaciòn </p>
                                            </div>

                                            <p className="bold-20 text-white">La Guajira</p>

                                            <div className="flexBetween">

                                                <div className="flex flex-col">
                                                    <p className="regular-16 block text-gray-20">Latitud</p>
                                                    <p className="bold text-gray-20"> 11.5500° N </p>
                                                </div>

                                                <div className="flex flex-col">
                                                    <p className="regular-16 block text-gray-20">Longitud</p>
                                                    <p className="bold text-gray-20">72.3500° W</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            )}

            {!isLargeScreen && (
                <div>
                    <div className="relative flex flex-1 items-start">
                        <div className="relative z-10 w-full flex-col gap-8 rounded-3xl  px-4 py-4 shadow-lg shadow-teal-500">
                            <ReactPlayer
                                url="/trailer.mov"
                                playing={isPlaying && !isLargeScreen}
                                loop={true}
                                controls={true}
                                muted={false}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="padding-container max-container w-full">
                        <div className="flex flex-wrap-reverse xl:flex-wrap justify-between gap-5 lg:gap-10">
                            <div>
                                <p className="bold-16 lg:bold-20 text-white max-w-xl">
                                    <span className="regular-16 lg:regular-20 ml-1">
                                        !Somos una Fundación que trabaja para mejorar la calidad de vida de las comunidades Wayúu.! 2023🧡 #construyendosueñoswayúu
                                    </span>
                                </p>

                                {/* Video para pantallas pequeñas */}
                                {!isLargeScreen && (
                                    <div className="flex w-full gap-3 sm:flex-row">
                                        <Button type="button" title="Podcasts" icon="/android.svg" variant="btn_orange" onclick_function={scrollToFeatures} />
                                        <Button type="button" title="¿Que es oasis de vida?" variant="btn_sky" onclick_function={scrollToCamp} />
                                    </div>
                                )}
                                <br />
                                <div className="relative flex flex-1 items-start">
                                    <div className="relative z-20 w-full flex-col gap-8 rounded-3xl bg-gray-800 px-7 py-8">

                                        <div className="flex flex-col">

                                            <div className="flexBetween">
                                                <div></div>
                                                <p className="bold-20 text-white">Proyecto Guajira</p>
                                            </div>

                                            <div className="flexBetween">
                                                <p className="bold-16 lg:bold-20 mt-6 text-lg text-white tracking-tight transition duration-150 xl:max-w-[520]">
                                                    En el corazón de La Guajira, una región azotada por la desigualdad y la escasez,  “el oasis de la vida” sigue la  historia de Nelson, un joven Wayuu que transforma su vida y la de su comunidad a través del deporte con el kitesurfing. Tras una infancia marcada por la pobreza extrema, Nelson y su hermano Beto encuentran en este deporte no solo una pasión, sino un puente hacia nuevas oportunidades. A medida que superan los desafíos personales y colectivos, incluida una carrera truncada por una lesión de parte de Nelson,  este regresa a su tierra natal para fundar la Escuela “Awalayuu”, un refugio para enseñar kitesurfing y valores esenciales a la próxima generación de jóvenes Wayuu y buscando ofrecer el mismo apoyo que él tuvo en su niñez para salir adelante.
                                                </p>
                                            </div>

                                            <br />

                                            <p className="border border-gray-50 rounded-3xl py-2 px-2 bold-16 lg:bold-20 text-white xl:max-w-[520] lg:max-w-xl">
                                                Paralelamente, el documental sigue a Ernesto, el promotor de la “Fundación Proyecto Guajira”, quien trabaja incansablemente para proporcionar educación, recursos hídricos y alimentarios, y promover prácticas deportivas que ofrecen a los niños Wayuu oportunidades y una nueva visión de vida, sin tener que recurrir a la guerra por recursos. A través de estas iniciativas, el proyecto busca resaltar la dignidad y promover un futuro donde la paz no solo sea la ausencia de conflicto, sino también una manifestación de integridad y dignidad humana.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Hero