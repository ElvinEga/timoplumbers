"use client";
import Image from "next/image";
import JOS from "jos-animation";
import {
  CalendarIcon,
  CheckSquare,
  ClockIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import TikTokGrid from "@/components/tiktokgrid";

export default function Home() {
  useEffect(() => {
    const initJOS = () => {
      const options = {
        debugMode: true,
        animation: "flip",
        duration: 0.7,
        rootMargin: "0% 0% 0% 0%",
      };
      JOS.init(options);
    };

    initJOS();
    JOS.refresh();

    return () => {
      // Clean up JOS if necessary
    };
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Navbar />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          <div className="relative z-10">
            {/* Hero Background */}
            <div className="bg-[#F5F3EA]">
              {/* Hero Space */}
              <div className="section-space-bottom pt-[105px] sm:pt-[145px] lg:pt-[185px]">
                {/* Hero Container */}
                <div className="container-default">
                  {/* Hero Area */}
                  <div className="grid gap-16 md:grid-cols-[1fr_minmax(0,_0.8fr)] xl:gap-28 xxl:gap-6">
                    {/* Hero Content Block */}
                    <div className="jos" data-jos_animation="fade-left">
                      <h1 className="mb-6 font-GeneralSans font-semibold leading-[1.04] text-[#1B1C1D] lg:text-6xl xl:text-[76px] xxl:text-[90px]">
                        Your Plumbing Problems, Our Priority!
                      </h1>
                      <p className="mb-8 lg:mb-[50px]">
                        At Timoplumbers, we offer professional plumbing services
                        to homes and businesses across Kenya. With a team of
                        skilled and certified plumbers, we are committed to
                        delivering reliable, efficient, and affordable plumbing
                        solutions. Whether it&apos;s installations, repairs, or
                        maintenance, we ensure your water and drainage systems
                        are functioning smoothly.
                      </p>
                      <div className="mb-6 flex flex-wrap justify-center gap-5 sm:justify-normal">
                        <a
                          href="#contact"
                          className="btn is-atomic-tangerine btn-animation is-large inline-block rounded"
                        >
                          <span>Make Appointment</span>
                        </a>
                        <a
                          href="#contact"
                          className="btn is-outline-black btn-animation is-large inline-block rounded"
                        >
                          <span>Get a Quote</span>
                        </a>
                      </div>
                    </div>
                    {/* Hero Content Block */}
                    {/* Hero Image Block */}
                    <div className="relative inline-block">
                      <Image
                        className="max-w-full rounded-xl"
                        src="/assets/img/content/hero1.jpeg"
                        alt="hero-card-1"
                        width={600}
                        height={600}
                        data-jos_animation="fade-up"
                        data-jos_delay={0}
                      />
                    </div>
                    {/* Hero Image Block */}
                  </div>
                  {/* Hero Area */}
                </div>
                {/* Hero Container */}
              </div>
              {/* Hero Space */}
            </div>
            {/* Hero Background */}
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/* Horizontal Line Separator */}
        <div className="horizontal-line bg-ColorBlack" />
        {/* Horizontal Line Separator */}
        {/* Features Section Start */}
        <section className="section-features">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[636px]">
                  <h2 className="text-center font-GeneralSans font-semibold">
                    Why Choose Us?
                  </h2>
                </div>
                {/* Section Content Block */}
              </div>
              {/* Section Content Wrapper */}
              {/* Features List */}
              <div className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {/* Features Item */}
                <div
                  className="jos relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block"
                  data-jos_animation="fade-left"
                  data-jos_delay={0}
                >
                  <Image
                    src="/assets/img/icons/icon-tangerine-feature-1.svg"
                    alt="icon-tangerine-feature-1"
                    width={70}
                    height={70}
                    className="h-[70px] w-auto"
                  />
                  <div>
                    <div className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                      Experienced Team
                    </div>
                    <p>
                      Our plumbers are highly skilled and trained to handle a
                      variety of plumbing challenges.
                    </p>
                  </div>
                </div>
                {/* Features Item */}
                {/* Features Item */}
                <div
                  className="jos relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.3"
                >
                  <Image
                    src="/assets/img/icons/icon-tangerine-feature-2.svg"
                    alt="icon-tangerine-feature-2"
                    width={72}
                    height={70}
                    className="h-[70px] w-auto"
                  />
                  <div>
                    <div className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                      Affordable Pricing
                    </div>
                    <p>
                      We offer competitive pricing without compromising on the
                      quality of our work.
                    </p>
                  </div>
                </div>
                {/* Features Item */}
                {/* Features Item */}
                <div
                  className="jos relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.6"
                >
                  <Image
                    src="/assets/img/icons/icon-tangerine-feature-3.svg"
                    alt="icon-tangerine-feature-3"
                    width={70}
                    height={70}
                    className="h-[70px] w-auto"
                  />
                  <div>
                    <div className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                      Customer Satisfaction
                    </div>
                    <p>
                      We work to ensure all projects are completed to the
                      highest standards.
                    </p>
                  </div>
                </div>
                {/* Features Item */}
              </div>
              {/* Features List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/* Features Section End */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Background */}
          <div className="bg-[#F5F3EA]">
            {/* Section Spacer */}
            <div className="section-space">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                {/* Section Container */}
                <div className="container-custom">
                  {/* Content Area Single */}
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1fr_minmax(0,_0.9fr)] xl:gap-[87px]">
                    {/* Content Block Left */}
                    <div className="jos" data-jos_animation="fade-left">
                      {/* Section Wrapper */}
                      <div>
                        {/* Section Block */}
                        <div className="mb-5">
                          <h2 className="font-GeneralSans font-semibold">
                            About Timoplumbers
                          </h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                        Timoplumbers is a leading plumbing company in Kenya with
                        a mission to provide top-tier plumbing services to
                        residential, commercial, and industrial clients. With
                        years of experience and a dedication to quality, we have
                        built a reputation for delivering reliable, timely, and
                        cost-effective plumbing solutions.
                      </p>
                      <p>
                        Our team of professionals is trained to handle projects
                        of all sizes, ensuring customer satisfaction at every
                        stage.
                      </p>
                      <a
                        href="signup.html"
                        className="btn is-atomic-tangerine btn-animation is-large group mt-4 hidden rounded-[3px] sm:inline-block"
                      >
                        <span>Get a Quote</span>
                      </a>
                    </div>
                    {/* Content Block Left */}
                    {/* Content Block Right */}
                    <div
                      className="jos relative z-10"
                      data-jos_animation="fade-right"
                    >
                      {/* Content Image */}
                      <Image
                        src="/assets/img/content/content1.jpeg"
                        alt="content-img-2"
                        width={569}
                        height={383}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />
                      {/* Content Background */}
                      <div className="absolute inset-0 left-0 -z-10 translate-x-1 translate-y-1 rounded-md bg-ColorBlack" />
                    </div>
                    {/* Content Block Right */}
                  </div>
                  {/* Content Area Single */}
                </div>
                {/* Section Container */}
              </div>
            </div>
            {/* Section Spacer */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Service Section Start :::... */}
        <div className="section-service" id="services">
          {/* Section Background */}
          <div className="relative z-10 bg-[#1B1C1D]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-GeneralSans font-semibold text-white">
                      Our Services
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Service List */}
                <div className="grid gap-x-6 gap-y-[50px] md:grid-cols-2 lg:grid-cols-3">
                  {/* Service Item */}
                  <div className="jos" data-jos_delay={0}>
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/residential.jpg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Residential Plumbing
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        From fixing leaks to full bathroom installations, we
                        handle all your home plumbing needs with precision and
                        care.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  {/* Service Item */}
                  <div className="jos" data-jos_delay="0.3">
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/commercial.jpg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Commercial Plumbing
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        We provide efficient plumbing solutions for offices,
                        hotels, restaurants, and other businesses, ensuring
                        minimal disruption to your operations.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  {/* Service Item */}
                  <div className="jos" data-jos_delay="0.6">
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/emergency.jpeg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Emergency Plumbing
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        Available 24/7, our emergency plumbing services ensure
                        that urgent issues are resolved promptly to avoid damage
                        to your property.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  {/* Service Item */}
                  <div className="jos" data-jos_delay="0.9">
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/solar1.jpeg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Water Heater Installation & Repair
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        We install and repair a range of water heaters, ensuring
                        your home or business has a reliable supply of hot
                        water.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  {/* Service Item */}
                  <div className="jos" data-jos_delay="1.2">
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/sewer.jpg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Sewer & Drain Services
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        From drain cleaning to sewer line repairs, we ensure
                        your drainage system is functioning smoothly and
                        efficiently.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  {/* Service Item */}
                  <div className="jos" data-jos_delay="1.5">
                    <div className="group flex h-full flex-col text-[#FDFBF9]">
                      <Image
                        src="/assets/img/content/leak.jpeg"
                        alt="content-img-2"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
                      />

                      <a
                        href="service-details.html"
                        className="mt-5 inline-flex items-center gap-x-4 font-GeneralSans text-xl font-semibold group-hover:text-ColorAtomicTangerine"
                      >
                        Leak Detection & Repair
                        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
                          <i className="fa-sharp fa-regular fa-arrow-right-long" />
                        </span>
                      </a>
                      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">
                        Using advanced equipment, we detect and fix leaks to
                        prevent water wastage and property damage.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                </div>
                {/* Service List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Background Shape */}
            <Image
              src="/assets/img/elements/home-5-service-bg-shape.svg"
              alt="home-5-service-bg-shape"
              width={140}
              height={140}
              className="absolute right-12 top-[197px] -z-10 hidden xl:inline-block"
            />
          </div>
          {/* Section Background */}
        </div>
        {/*...::: Service Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="process">
          {/* Section Background */}
          <div className="bg-[#F5F3EA]">
            {/* Section Spacer */}
            <div className="section-space">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                {/* Section Container */}

                {/* Section Container */}
                {/* Horizontal Line */}
                <div className="container-default">
                  {/* Section Content Wrapper */}
                  <div className="jos mb-[60px] xl:mb-20">
                    {/* Section Content Block */}
                    <div className="mx-auto max-w-[670px]">
                      <h2 className="text-center font-GeneralSans font-semibold">
                        We follow a simple, yet effective Working process
                      </h2>
                    </div>
                    {/* Section Content Block */}
                  </div>
                  {/* Section Content Wrapper */}
                  {/* Process Area */}
                  <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-20 xxl:gap-x-[104px]">
                    {/* Process Single Item */}
                    <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-ColorBlack last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
                      <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-ColorBlack bg-white font-GeneralSans text-[26px] font-semibold leading-[1.2] text-ColorBlack transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
                        <CalendarIcon className="h-10 w-10" />
                      </div>
                      <div className="mb-[15px] font-GeneralSans text-2xl font-semibold leading-[1.4] text-ColorBlack xl:text-3xl">
                        Make Appointment
                      </div>
                      <p className="text-xl leading-[1.5]">
                        Reach out to us via phone or our online booking form to
                        discuss your needs and schedule an appointment
                      </p>
                    </div>
                    {/* Process Single Item */}
                    {/* Process Single Item */}
                    <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-ColorBlack last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
                      <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-ColorBlack bg-white font-GeneralSans text-[26px] font-semibold leading-[1.2] text-ColorBlack transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
                        <ClockIcon className="h-10 w-10" />
                      </div>
                      <div className="mb-[15px] font-GeneralSans text-2xl font-semibold leading-[1.4] text-ColorBlack xl:text-3xl">
                        Arrive Within 1 Hour
                      </div>
                      <p className="text-xl leading-[1.5]">
                        Our handyman will arrive on time, complete the job
                        efficiently, and ensure everything is done to your
                        satisfaction.
                      </p>
                    </div>
                    {/* Process Single Item */}
                    {/* Process Single Item */}
                    <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-ColorBlack last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
                      <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-ColorBlack bg-white font-GeneralSans text-[26px] font-semibold leading-[1.2] text-ColorBlack transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
                        <CheckSquare className="h-10 w-10" />
                      </div>
                      <div className="mb-[15px] font-GeneralSans text-2xl font-semibold leading-[1.4] text-ColorBlack xl:text-3xl">
                        Your Problem Solved
                      </div>
                      <p className="text-xl leading-[1.5]">
                        We’ll follow up to make sure you’re happy with the
                        service and address any remaining concerns.
                      </p>
                    </div>
                    {/* Process Single Item */}
                  </div>
                  {/* Process Area */}
                </div>
              </div>
            </div>
            {/* Section Spacer */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <section className="section-team">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] flex flex-wrap items-center justify-between gap-8 xl:mb-20">
                {/* Section Content Block */}
                <div className="max-w-[526px]">
                  <h2 className="font-GeneralSans font-semibold">
                    Our Experts are available to assist you
                  </h2>
                </div>
                {/* Section Content Block */}
                <div>
                  <a
                    href="teams.html"
                    className="btn is-atomic-tangerine btn-animation is-large group mt-4 inline-block rounded-[3px]"
                  >
                    <span>Meet All Members</span>
                  </a>
                </div>
              </div>
              {/* Section Content Wrapper */}
              {/* Team List */}
              <div className="grid overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-2">
                {/* Team Item */}
                <div
                  className="jos"
                  data-jos_animation="flip-left"
                  data-jos_delay={0}
                >
                  <div className="group relative overflow-hidden">
                    <Image
                      src="/assets/img/content/team1.jpeg"
                      alt="team-img-1"
                      width={324}
                      height={320}
                      className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-5 right-5 translate-y-full rounded-[5px] bg-[#F5F3EA] p-5 transition-all duration-300 group-hover:-translate-y-5">
                      <a
                        href="#"
                        className="mb-1 block font-bold leading-[1.44] text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                      >
                        Cameron Williamson
                      </a>
                      <div className="text-sm">
                        <span>CEO@Company</span>
                        <div className="mt-2 flex gap-x-[10px]">
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-facebook" />
                          </a>
                          <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-instagram" />
                          </a>
                          <a
                            href="https://www.github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-github" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team Item */}
                {/* Team Item */}
                <div
                  className="jos"
                  data-jos_animation="flip-left"
                  data-jos_delay="0.3"
                >
                  <div className="group relative overflow-hidden">
                    <Image
                      src="/assets/img/content/team2.jpeg"
                      alt="team-img-2"
                      width={324}
                      height={320}
                      className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-5 right-5 translate-y-full rounded-[5px] bg-[#F5F3EA] p-5 transition-all duration-300 group-hover:-translate-y-5">
                      <a
                        href="#"
                        className="mb-1 block font-bold leading-[1.44] text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                      >
                        Leslie Alexander
                      </a>
                      <div className="text-sm">
                        <span>Senior SEO Manager</span>
                        <div className="mt-2 flex gap-x-[10px]">
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-facebook" />
                          </a>
                          <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-instagram" />
                          </a>
                          <a
                            href="https://www.github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
                          >
                            <i className="fa-brands fa-github" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Team Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <div className="section-service" id="services">
          {/* Section Background */}
          <div className="relative z-10 bg-[#1B1C1D]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-GeneralSans font-semibold text-white">
                      Gallery
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Service List */}
                <TikTokGrid />
                {/* Service List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Background Shape */}
            <Image
              src="/assets/img/elements/home-5-service-bg-shape.svg"
              alt="home-5-service-bg-shape"
              width={140}
              height={140}
              className="absolute right-12 top-[197px] -z-10 hidden xl:inline-block"
            />
          </div>
          {/* Section Background */}
        </div>
        {/*...::: Service Section End :::... */}

        {/* Horizontal Line Separator */}
        <div className="horizontal-line -mt-px bg-ColorBlack" />
        {/* Horizontal Line Separator */}
        {/*...::: Testimonial Section Start :::... */}
        <div className="section-testimonial" id="faq">
          {/* Section Background */}
          <div className="bg-[#F5F3EA]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] flex flex-wrap items-center justify-between gap-8 xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <div className="mb-5">
                      <h2 className="text-center font-GeneralSans font-semibold">
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* FAQ Area */}
                <div className="jos">
                  {/* Accordion List */}
                  <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack">
                    {/* Accordion Item */}
                    <li className="accordion-item active overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          What areas do you serve?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          We provide plumbing services throughout Kenya, with a
                          focus on Nairobi and its surrounding areas. If
                          you&apos;re unsure whether we cover your area, feel
                          free to contact us!
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Do you offer emergency plumbing services?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Yes, we offer 24/7 emergency plumbing services.
                          Whether it&apos;s a burst pipe, a leaking water
                          heater, or a blocked drain, our team is available
                          around the clock to handle urgent issues.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          How much do your plumbing services cost?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Our pricing depends on the type and scope of the
                          service. We believe in providing affordable and
                          transparent pricing. Contact us for a free quote based
                          on your specific plumbing needs.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Can you help with water heater installation and
                          repairs?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Yes, we specialize in the installation, maintenance,
                          and repair of all types of water heaters, including
                          tankless systems.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          How soon can you respond to a service request?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          For non-emergency services, we aim to schedule an
                          appointment within 24 hours. For emergencies, we have
                          a rapid response team that can be at your location as
                          soon as possible.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Do you offer guarantees for your work?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Yes, we stand behind the quality of our work and offer
                          a satisfaction guarantee on all services. If there’s
                          an issue with our work, we will address it promptly.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          What payment methods do you accept?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          We accept cash, mobile payments, and bank transfers.
                          We also offer flexible payment plans for larger
                          projects.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Can you handle large commercial projects?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Absolutely. Our team has the expertise and equipment
                          to manage large-scale commercial plumbing projects,
                          including installations, repairs, and maintenance for
                          hotels, restaurants, offices, and more.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                  </ul>
                  {/* Accordion List */}
                  <div className="jos mt-[60px] flex justify-center xl:mt-20">
                    <a
                      href="#contact"
                      className="btn is-atomic-tangerine is-rounded btn-animation is-large group"
                    >
                      <span>Still, have any questions? Contact us</span>
                    </a>
                  </div>
                </div>
                {/* FAQ Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
          {/* Section Background */}
        </div>
        {/*...::: Testimonial Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <div className="section-testimonial" id="contact">
          {/* Section Background */}
          <div className="bg-[#FFFFFF]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] flex flex-wrap items-center justify-between gap-8 xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <div className="mb-5">
                      <h2 className="text-center font-GeneralSans font-semibold">
                        Contact Us
                      </h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Testimonial Area */}
                <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20 xl:grid-cols-[0.9fr_1fr] xl:gap-32 xxl:grid-cols-[0.7fr_1fr] xxl:gap-[210px]">
                  {/* Contact Info List */}
                  <div className="flex flex-col gap-[60px]">
                    {/* Contact Info Item */}
                    <div className="jos flex gap-[30px]" data-jos_delay={0}>
                      <Image
                        src="/assets/img/icons/icon-duotone-chat.svg"
                        alt="icon-duotone-chat"
                        width={64}
                        height={60}
                        className="mb-[30px] h-[60px] w-auto"
                      />
                      <div>
                        <div className="mb-4 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                          Chat with us
                        </div>
                        <p>
                          We&apos;re waiting to help you every Monday-Friday
                          from 9 am to 5 pm EAT easily.
                        </p>
                      </div>
                    </div>
                    {/* Contact Info Item */}
                    {/* Contact Info Item */}
                    <div className="jos flex gap-[30px]" data-jos_delay="0.3">
                      <Image
                        src="/assets/img/icons/icon-duotone-phone.svg"
                        alt="icon-duotone-phone"
                        width={64}
                        height={60}
                        className="mb-[30px] h-[60px] w-auto"
                      />
                      <div>
                        <div className="mb-4 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                          Give us a call
                        </div>
                        <p>
                          Give us a ring at
                          <a
                            href="tel:+01234567890"
                            className="font-semibold hover:text-ColorBlue"
                          >
                            (+012-345-567-890)
                          </a>
                          . Every monday-friday from 9 am to 5 pm.
                        </p>
                      </div>
                    </div>
                    {/* Contact Info Item */}
                    {/* Contact Info Item */}
                    <div className="jos flex gap-[30px]" data-jos_delay="0.6">
                      <Image
                        src="/assets/img/icons/icon-duotone-message.svg"
                        alt="icon-duotone-message"
                        width={64}
                        height={60}
                        className="mb-[30px] h-[60px] w-auto"
                      />
                      <div>
                        <div className="mb-4 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                          Email Us
                        </div>
                        <p>
                          Drop us an email at
                          <a
                            href="mailto:example@yourmail.com"
                            className="font-semibold underline underline-offset-4 hover:text-ColorBlue"
                          >
                            example@gmail.com
                          </a>
                          and you&apos;ll receive a reply within 24 hours.
                        </p>
                      </div>
                    </div>
                    {/* Contact Info Item */}
                  </div>
                  {/* Contact Info List */}
                  {/* Contact Form Block */}
                  <div className="jos xm:p-10 rounded-[10px] border-2 border-ColorBlack/50 bg-ColorOffWhite p-[30px]">
                    <div className="mb-5  text-xl font-semibold tracking-tight text-ColorBlack lg:text-2xl">
                      Send us a message
                    </div>
                    <form
                      action="https://formspree.io/f/{form_id}"
                      method="post"
                    >
                      {/* From Group List */}
                      <div className="flex flex-col gap-6">
                        {/* Form Group Item*/}
                        <div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
                            className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          />
                        </div>
                        {/* Form Group Item*/}
                        {/* Form Group Item*/}
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number*"
                            className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          />
                        </div>
                        {/* Form Group Item*/}
                        {/* Form Group Item*/}
                        <div>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          />
                        </div>
                        {/* Form Group Item*/}
                        {/* Form Group Item*/}
                        <div>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write us your question here..."
                            className="min-h-[130px] w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                            defaultValue={""}
                          />
                        </div>
                        {/* Form Group Item*/}
                      </div>
                      {/* From Group List */}
                      <button
                        type="submit"
                        className="btn is-atomic-tangerine is-rounded is-large mt-8 block w-full"
                      >
                        Make Appointment
                      </button>
                    </form>
                  </div>
                  {/* Contact Form Block */}
                </div>

                {/* Testimonial Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
          {/* Section Background */}
        </div>
        {/*...::: Testimonial Section End :::... */}
      </main>

      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-[#1B1C1D]">
          {/* Footer Area Top*/}
          <div className="">
            {/* Footer Top Spacing */}
            <div className="pt-[60px] lg:pt-20 xl:pt-[100px]">
              <div className="container-default">
                <div className="flex flex-col items-center justify-between gap-x-10 gap-y-8 rounded-[5px] bg-ColorAtomicTangerine p-10 md:flex-row lg:gap-x-20 lg:p-[50px]">
                  <div className="max-w-none md:max-w-[60%] lg:max-w-[62%] xl:max-w-[636px]">
                    <h2 className="text-center font-GeneralSans font-semibold text-[#1B1C1D] md:text-left">
                      Are you ready for a professional experience?
                    </h2>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="btn is-black is-large btn-animation group inline-block w-full rounded-[3px] border-2"
                    >
                      <span>Get a Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Top Spacing */}
          </div>
          {/* Footer Area Top*/}
          {/* Footer Area Center */}
          <div className="text-white">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20 xl:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                    {/* Footer Logo */}
                    <a href="index.html">
                      <Image
                        src="/assets/img/logo-tangerine-light.png"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </a>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        Serving homes and businesses across Kenya, we are
                        committed to delivering top-quality plumbing services.
                      </div>
                      {/* Footer Mail */}
                      <a
                        href="mailto:yourdemo@email.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        yourdemo@email.com
                      </a>
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]"
                          aria-label="twitter"
                        >
                          <Twitter />
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]"
                          aria-label="facebook"
                        >
                          <Facebook />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]"
                          aria-label="instagram"
                        >
                          <Instagram />
                        </a>
                        <a
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]"
                          aria-label="github"
                        >
                          <Youtube />
                        </a>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize">
                      Primary Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          href="/"
                          className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#services"
                          className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          href="#process"
                          className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Process
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}

                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widget List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Center Spacing */}
          </div>
          {/* Footer Area Center */}
          <div className="horizontal-line bg-white" />
          {/* Footer Area Bottom */}
          <div>
            {/* Footer Bottom Spacing */}
            <div className="py-[18px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="text-center text-[#FDFBF9]/80">
                  © Copyright 2024, All Rights Reserved by Twisac
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom Spacing */}
          </div>
          {/* Footer Area Bottom */}
        </div>
      </footer>
      {/*...::: Footer Section End :::... */}
    </div>
  );
}
