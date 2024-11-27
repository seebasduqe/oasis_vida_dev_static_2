"use client"
import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ReactPlayer from "react-player";
import { use, useRef } from "react";

export default function Home() {

  const featuresRef = useRef<HTMLDivElement>(null);
  const campRef = useRef<HTMLDivElement>(null);
  const scrollToFeatures = () => featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToCamp = () => campRef.current?.scrollIntoView({ behavior: 'smooth' });
  
  return (
    <>
    </>
  )
}
