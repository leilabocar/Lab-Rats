import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import HomepageBottom from "../components/HomepageBottom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero/>
    <HomepageBottom/>
    <Footer/>

  </div>
  );
}
