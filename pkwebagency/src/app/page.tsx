import Layout from "@/components/layout/Layout";
import Headline1 from "@/components/sections/HeadLine/Headline1";
import Headline2 from "@/components/sections/HeadLine/Headline2";
import Headline3 from "@/components/sections/HeadLine/Headline3";
import Headline4 from "@/components/sections/HeadLine/Headline4";
import Headline5 from "@/components/sections/HeadLine/Headline5";
import Hero from "@/components/sections/Hero/Hero";
import Image from "next/image";
import About from "@/components/sections/About/About";
import Video from "@/components/sections/Videos/Video";
import Service from "@/components/sections/Services/Service";
import AboutAgency from "@/components/sections/About/AboutAgency";
import Portfolio from "@/components/sections/Portifolio/Portifolio";
import Awward from "@/components/sections/Awward/Awward";
import Team from "@/components/sections/Team/Team";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Blog from "@/components/sections/Blog/Blog";
import LetsTalk from "@/components/sections/Contact/LetsTalk";

export default function Home() {
  
  return (
    <>

        <Layout headerStyle={1} footerStyle={1} bodyCls="home-one"  breadcrumbTitle="">
            <Hero />
            <Headline1 />
            <About />
            <Video />
            <Service />
            <Headline2 />
            <AboutAgency />
            <Headline3 />
            <Portfolio />
            <Team />
            <Headline5 />
            <LetsTalk />
        </Layout>
    </>
  );
}
