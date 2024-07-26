"use client";
import React, { useState } from "react";
import "./white-label.css";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const page = () => {
  const FAQs = [
    {
      question: "What makes Unnity different from other Digital Agencies?",
      answer:
        "As a reliable operational partner - we are inclined towards expertise and quality. With more than 5+ years of experience and having worked with more than 50+ clients globally, we have helped agencies quantify their marketing efforts. How? With a full-fledged and dedicated workforce professionals. Be it achieving scalability, business objectives or even brand value - we have provided an edge over their competitors. Hence choosing us as your Digital Agency is not a bad idea at all.",
    },

    {
      question: "How will progress and analytics reports be shared with me?",
      answer:
        "Being a Unnity PPC Agency, we ensure that the teams hired will share the reports on a weekly/biweekly/monthly basis as per your needs. In fact, real-time tracking and analytics reports will also be shared on a regular basis to keep you updated regarding your campaign’s performance.",
    },

    {
      question: "What is the Standard operating procedure Unnity follow?",
      answer:
        "Talking about the SOP we follow, then it begins with hand picking the right resources/team for your project. Our internal team has tools and rating systems in place, built on the feedback given by our 500+ clients to help choose the better.Upon confirmation, our onboarding specialist will help you set-up and introduce you to your team.",
    },

    {
      question:
        "Do you take any significant measures for the maintenance & safety of IT security and firewalls?",
      answer:
        "At Unnity, all of our devices are IP restricted along with firewall protection. ",
    },

    {
      question: "What is the preferred mode of communication?",
      answer:
        "Well, we always ensure to consider the client's preferences over ours. But, to your answer, here are some of the tools we use as a mode of communication <br/> Email, Skype, Slack, Hangout, PMS or any other form of communication that is comfortable for you and the resources. We also encourage video calls as we believe that a face-to-face conversation helps a lot in understanding your business and its needs",
    },

    {
      question:
        "We want to know about the local time-zone support. Do you provide it? If yes -then how?",
      answer:
        "Yes, we do provide local time-zone support. But, there will be some additional charges applied. Say, if you need a team to work on the Australian or Singapore time-zone - 10% extra will be charged. And 20% extra for United States time-zone support.",
    },

    {
      question:
        "Which are the popular Unnity Digital Marketing Services your clients prefer?",
      answer:
        "As a leading unnity marketing agency, every service that we provide is appreciated. But, to name them, these are the unnity digital marketing services that have gained popularity and appreciation.",
    },

    {
      question:
        "What is the experience you hold when it comes to working with agencies?",
      answer:
        "We are recognized as a trustworthy Unnity PPC agency and Unnity SEO for Agencies. Our experience talks about our capabilities to work with 500+ agencies across 52 nations worldwide when it comes to outsourcing Unnity Marketing Services.",
    },

    {
      question:
        "Do I get a referral bonus if I refer your agency to someone and they end up choosing your Unnity Services?",
      answer:
        "Yes, yes you surely do get a bonus when you refer us to others. That’s how we love to push our journey of growth ahead! So, if someone is in need of any services - be it Unnity SEO Services for Agencies, Unnity PPC services or other marketing services, we are happy to help.",
    },

    {
      question: "Do you sign the NDA documents before the project kickstarts?",
      answer:
        "Being a Unnity Digital Marketing Agency, NDAs are the first and foremost documentation that is being taken care of. We do sign NDAs and adhere to it, strictly!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const showHandler = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [showFourCard, setShowFourCard] = useState(false);
  const [showFiveCard, setShowFiveCard] = useState(false);

  const carousel = (slider) => {
    const z = 300;
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    });
    slider.on("detailsChanged", rotate);
  };

  const [sliderRef2] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="special-main-container">
      <section className="advertisement">
        <h4>
          For digital marketing services, <b>Visit Mavlers</b> and for email
          marketing services, <b>Visit Email Unnity</b>
        </h4>
      </section>

      <section className="front-special">
        <div className="navbar">
          <div className="special-logo">
            <Image
              id="spec-logo"
              src="/check.png"
              width={0}
              height={0}
              alt="logo-image"
              unoptimized
              style={{ width: "150px", height: "85px" }}
            ></Image>
          </div>

          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <svg
                id="hamb-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </label>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Service</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Sign up</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="front-banner-content">
          <div className="front-banner-content-left">
            <h2>Unnity Digital Marketing Services</h2>
            <h3>
              We provide top-notch Unnity Marketing Services including SEO, PPC,
              and Social Media Marketing. Our well-versed team of Digital
              Marketing experts helps your clients get noticed and bring digital
              DNA into their business.
            </h3>
            <button>Get a custom Quote</button>
          </div>
        </div>
      </section>

      <section className="special-projects">
        <div className="special-projects-df">
          <span>
            <h3>$3M</h3>
            <h4>Media Spend Managed</h4>
          </span>

          <span>
            <h3>5000+</h3>
            <h4>Keywords Optimized Every Month</h4>
          </span>

          <span>
            <h3>100+</h3>
            <h4>Campaigns Scheduled Every Month</h4>
          </span>
        </div>
      </section>

      {/* <section className="ratings">
        <div className="ratings-df">
          <div className="ratings-df-left">
            <span>
              <Image
                src={"/clutch.png"}
                width={0}
                height={0}
                alt="cluth"
                unoptimized
                priority
              ></Image>
              <h3>We are rated 4.5 out of 5 on average across 90 reviews</h3>
            </span>
          </div>

          <div className="ratings-df-right">
            <span>
              <Image
                src={"/trust.png"}
                width={0}
                height={0}
                alt="cluth"
                unoptimized
                priority
              ></Image>
              <h3>We are rated 4.5 out of 5 on average across 90 reviews</h3>
            </span>
          </div>
        </div>
      </section> */}

      <section className="brand-card">
        <div className="trust-brand">
          <div className="trust-brand-label">
            <h4>
              Trusted by
              <br /> Global Brands
            </h4>
          </div>

          <div className="trust-brand-img">
            <span>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="166.1px"
                height="73px"
                viewBox="0 0 166.1 73"
              >
                <g>
                  <path d="M31.3,52.3c0,0.5-0.1,1-0.2,1.5c-0.7,2.1-2.7,2.5-4.3,1.8c-0.7-0.3-1-0.9-1.2-1.5c-0.4-0.9-0.5-2-0.6-2.9   c-0.1-0.4-0.1-0.8-0.1-1.2c-0.8-0.4-1.6-0.9-2.3-1.3c-3.2-1.9-6.2-4-8.8-6.7c-1.2-1.3-2.4-2.6-3.4-4.1c-0.4-0.6-0.7-1.3-0.9-2   c-0.2-1.4,0.3-2.5,1.2-3.5c1-1,2.2-1.7,3.5-2.3c3.1-1.4,6.4-2.3,9.7-2.9c0.7-0.1,1.4-0.2,2.1-0.3c0-0.5,0.1-1,0.1-1.5   c0.2-3.1,0.6-6.1,1.6-9.1c0.1-0.3,0.2-0.7,0.4-1c0.3-0.6,0.8-0.7,1.4-0.3c0.3,0.2,0.5,0.5,0.8,0.8c1,1.3,1.4,2.8,1.6,4.4   c0.1,1.6,0.1,3.1,0.2,4.7c0,0.5,0,0.9,0,1.4c0.7,0.1,1.3,0.1,1.9,0.2c2.2,0.2,4.4,0.4,6.6,0.7c2.5,0.4,5,0.9,7.3,2   c1.4,0.7,2.6,1.5,3.5,2.7c1.7,2.4,1.4,5.3-1,7.1c-1.4,1.1-2.9,1.5-4.6,0.9c-0.7-0.2-1.2-0.6-1.7-1.2c0.2-0.4,0.4-0.6,0.8-0.8   c0.5-0.2,1-0.4,1.5-0.6c0.3-0.1,0.5-0.2,0.7-0.4c0.5-0.4,0.6-1.1,0.1-1.6s-1.1-0.8-1.7-1c-1.6-0.6-3.3-0.9-5-1.2   c-2.8-0.5-5.5-0.8-8.3-0.8c-0.1,0-0.2,0-0.4,0c-0.5,5.1-0.2,10.1-0.3,15.1c0.9,0.3,1.7,0.4,2.6,0.6c2.1,0.4,4.2,0.6,6.3,0.6   c4.4,0,8.8-0.7,12.9-2.4c2.4-1,4.5-2.4,6-4.5c1.6-2.2,2.1-4.7,2-7.4c-0.2-2.9-1.3-5.4-2.9-7.7c-2.1-3.1-4.8-5.6-7.7-8   c-3.7-2.9-7.8-5.2-12-7.3C33.9,8.8,29.1,7,24,5.8C20.4,5,16.7,4.5,13,4.3c-2.3-0.1-4.5,0-6.8,0.4c-1,0.2-1.9,0.5-2.9,0.9   C3.5,5.9,3.8,6,4,6c0.4,0.1,0.7,0.2,1.1,0.2c0.2,0,0.4,0.1,0.7,0.2c0.5,0.1,0.8,0.4,0.7,0.7c0,0.4-0.4,0.6-0.7,0.7   c-1.5,0.4-3,0.4-4.5-0.2C1,7.6,0.7,7.3,0.4,7c-0.5-0.5-0.5-1-0.2-1.7c0.3-0.6,0.7-1.2,1-1.7C2,2.5,3,1.8,4.2,1.4   c1.6-0.5,3.3-0.8,5-1c1.2-0.1,2.3-0.3,3.5-0.4c0.1,0,0.3,0,0.4,0c6.1-0.2,12,0.9,17.8,2.5C40,5,48.2,9.3,55.5,15.2   c4.3,3.5,7.9,7.6,10.4,12.6c1.2,2.4,2,5,1.9,7.7c-0.1,4.5-1.7,8.4-4.9,11.6c-2.4,2.4-5.3,3.8-8.4,4.9c-4.4,1.5-8.9,2.1-13.6,1.9   c-3.2-0.1-6.3-0.5-9.3-1.5C31.5,52.3,31.4,52.3,31.3,52.3z M25.6,32.1c-0.1,0-0.2,0-0.3,0c-2.1,0.1-4.1,0.2-6.2,0.5   c-1.9,0.3-3.8,0.6-5.7,1.2c-0.6,0.2-1.2,0.4-1.7,0.9c-0.5,0.4-0.6,0.9-0.4,1.5c0.1,0.3,0.3,0.6,0.5,0.9c0.7,0.9,1.5,1.6,2.3,2.3   c2.7,2.4,5.8,4.2,9.1,5.6c0.5,0.2,0.9,0.4,1.4,0.6C25.3,41,25.6,36.6,25.6,32.1z" />
                  <path d="M152.7,28.3c0.3,0.8,0.2,1.6,0,2.4c-0.4,1.5-1.2,2.9-2.1,4.2c-0.9,1.3-1.8,2.6-2.4,4c-0.5,1.3-0.8,2.7-0.9,4.1   c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1c0.4-0.4,0.7-0.8,1.1-1.2c1.5-1.9,3-3.9,4.6-5.8c1.6-1.8,3.3-3.5,5.4-4.6c0.9-0.5,1.7-0.8,2.7-0.9   c1.4-0.1,2.6,0.4,3.4,1.5c0.8,1.1,1.3,2.3,1.3,3.6c0.1,2,0.1,4.1-0.6,6.1c-0.8,2.2-2,4.1-3.5,5.8c-1.4,1.6-3,3.1-5,4   c-2,1-4.1,1.3-6.3,0.8c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.2,0c-0.2,0.6-0.5,1.2-0.8,1.8c-1.8,4.3-3.2,8.7-4.2,13.2   c-0.2,1.2-0.3,2.4-0.6,3.6c-0.1,0.3-0.2,0.6-0.3,0.9c-0.3,0.7-0.7,0.9-1.5,0.6c-0.6-0.2-1-0.6-1.5-1.1c-1.8-2-2.5-4.3-2.3-7   c0.4-3.8,1.6-7.4,3-10.9c0.7-1.8,1.5-3.5,2.4-5.2c-0.4-0.7-0.7-1.4-0.9-2.2c-0.6-2.4-0.4-4.8,0.4-7.1c1.2-3.6,3.2-6.6,5.8-9.3   c0.7-0.7,1.4-1.4,2.4-1.7C152.3,28.3,152.5,28.2,152.7,28.3z M153,46.9c1.7-0.2,3.2-0.6,4.6-1.4c3.7-2,5.6-5.1,5.4-9.3   c0-0.4-0.2-0.6-0.5-0.6c-0.2,0-0.4,0.1-0.6,0.2c-0.9,0.5-1.6,1.1-2.2,1.9c-1.6,1.8-3,3.7-4.4,5.7C154.4,44.4,153.7,45.6,153,46.9z" />
                  <path d="M82.6,34.2c0.5,0.5,1.1,0.7,1.7,0.8c2.2,0.2,4.3,0.5,6.5,0.7c2,0.2,4.1,0.4,6,1.1c2.4,0.8,3.8,2.4,4,4.9   c0.2,1.8,0,3.5-0.7,5.2c-0.5,1.1-1.2,1.9-2.3,2.4c-1.8,0.8-3.7,1.2-5.6,1.5c-2.4,0.3-4.7,0.2-7-0.6c-1.9-0.6-3.7-1.6-5.1-3.1   c-0.5-0.5-0.8-1-1.1-1.6c-0.9-1.8-0.4-3.6,1.2-4.8c1.2-0.9,2.6-1.2,4-1.3c3-0.1,6,0.5,8.8,1.6c0.4,0.2,0.8,0.4,1.1,0.7   c0.6,0.6,0.5,1.2-0.1,1.7c-0.5,0.4-1.1,0.5-1.7,0.6c-1.6,0.3-3.2,0.2-4.8-0.2c-0.6-0.1-1.2-0.4-1.8-0.8c-0.7-0.4-1.4-0.8-2.2-1   c-0.8-0.2-1.5,0-2,0.7c-0.6,0.7-0.5,1.4,0.3,1.9c0.6,0.4,1.2,0.6,1.9,0.7c3.9,0.7,7.6,0.4,11.2-1.2c0.6-0.3,1.1-0.6,1.6-1   c0.8-0.8,0.8-1.7-0.1-2.4s-1.9-0.9-2.9-1.2c-1.9-0.5-3.9-0.7-5.9-0.8c-2.4-0.2-4.7-0.3-7.1-0.8c-0.3-0.1-0.6-0.2-0.9-0.3   c-1.2-0.4-1.7-1.2-1.8-2.4c-0.1-1.4,0.2-2.6,0.9-3.8c0.5-1,1.5-1.6,2.4-2.1c1.8-1,3.8-1.5,5.9-1.9c3.3-0.6,6.6-0.6,9.9-0.2   c1.3,0.2,2.7,0.3,3.9,0.8c0.4,0.1,0.7,0.3,1,0.5c0.4,0.3,0.5,0.6,0.4,1.1c-0.3,1.4-1,2.1-2.4,2.2c-1.7,0.1-3.3,0.1-5,0.2   c-3.1,0.2-6.3,0.3-9.4,0.8c-0.7,0.1-1.3,0.2-1.9,0.4C83.1,33.6,82.8,33.8,82.6,34.2z" />
                  <path d="M126.6,37.6c0.9-1.1,1.2-2.4,2-3.5c-2.1-0.4-3.7-1.2-4-3.6c0.7-0.4,1.4-0.6,2.2-0.8c2-0.5,4.1-0.7,6.2-0.8   c1.8-0.1,3.7-0.2,5.5-0.4c0.8-0.1,1.6,0,2.4,0.1c0.3,0.1,0.6,0.1,0.9,0.3c1,0.8,1.9,1.7,2.5,2.8c0.6,1.4,0.2,1.9-1,2.1   c-1.1,0.2-2.2,0.3-3.3,0.3c-2.1,0.1-4.2,0.2-6.3,0.3c-0.1,0-0.1,0-0.2,0c-0.5,0.9-0.6,1.9-1,2.8c2.4,0.1,4.7-0.3,7,0.4   c0.3,1.2,0.3,2.3-0.1,3.4c-1.1,0.4-2.2,0.5-3.4,0.5c-1.7,0-3.4-0.1-5.1,0.1c-0.1,0-0.1,0-0.2,0c-0.6,1.4-1.1,2.8-1.4,4.3   c0.9,0,1.7-0.2,2.5-0.3c2-0.3,4-0.7,6-0.8c0.2,0,0.4,0,0.6,0c1.3-0.3,2.7,1.6,2.4,2.7c-0.2,0.6-0.5,1-0.9,1.4c-0.9,0.8-2,1.4-3,2   c-1.9,1-3.9,1.8-6.1,2.2c-0.8,0.1-1.7,0.2-2.6,0.1c-2.1-0.3-3.4-1.7-4.1-3.6c-0.7-2.2-0.5-4.3,0.4-6.4c0.1-0.2,0.2-0.5,0.3-0.7   c0.3-0.7,0.4-1.5,0.1-2.2c-0.2-0.5-0.3-1-0.3-1.6s0.3-0.9,0.9-1.1C125.7,37.7,126.1,37.7,126.6,37.6z" />
                  <path d="M108.1,37.8c-0.4,1.2-0.5,2.4-0.6,3.6c-0.1,2-0.1,4-0.4,6c-0.1,0.9-0.3,1.9-0.6,2.8c-0.2,0.5-0.5,0.8-1,0.9   c-1.6,0.4-2.7-0.1-3.2-1.7c-0.1-0.4-0.2-0.9-0.3-1.3c-0.2-1.7-0.1-3.4,0.1-5.2c0.3-2.7,0.7-5.4,1.4-8.1c0.3-1.3,0.7-2.5,1.3-3.6   c0.3-0.5,0.6-1,1-1.4c0.7-0.6,1.5-0.7,2.3-0.2c0.6,0.4,1,0.9,1.4,1.5c2.4,3.3,4.5,6.7,6.5,10.2c0.2,0.3,0.3,0.6,0.5,1   c0.2,0.3,0.4,0.6,0.8,0.6c0.1-0.7,0.1-1.4,0-2c-0.1-3.5-0.9-6.9-1.8-10.3c-0.3-1.2-0.7-2.3-0.9-3.5c-0.1-0.6-0.1-1.2,0-1.7   c0.2-0.8,0.6-1,1.4-0.7c0.6,0.2,1.1,0.7,1.6,1.2c2.3,2.5,3.6,5.5,4.3,8.7c0.7,3.1,0.8,6.2,0.3,9.4c-0.2,1.4-0.5,2.7-1.2,3.9   c-0.6,1.1-1.4,2-2.7,2.3c-1.2,0.2-2.2,0-3.1-0.8s-1.5-1.7-2.1-2.7c-1.2-2-2.2-4.1-3.2-6.2c-0.4-0.8-0.9-1.7-1.4-2.4   C108.3,37.9,108.3,37.8,108.1,37.8z" />
                  <path d="M70.5,23.2c-0.3,0.3-0.5,0.7-0.8,1.1c-0.7,1.1-1.8,1.2-2.6,0.2c-0.4-0.5-0.7-1-0.8-1.6c-0.1-0.4-0.2-0.9,0-1.3   c0.3-0.6,0.1-1.1-0.3-1.6c-1-1-1.2-2.2-1.2-3.5c0-1.2,0.4-2.2,1-3.2c1.8-2.9,4.3-4.9,7.5-6c2.2-0.8,4.4-1.1,6.7-1   c0.6,0,1.3,0.1,1.9,0.3c1.1,0.4,1.7,0.9,2.3,2c0.5,0.1,1.1,0.1,1.6,0.3c2.2,0.6,3.2,2.4,2.8,4.7c-0.3,1.7-1.1,3.2-2.3,4.5   c-2.7,3-5.9,5-9.9,5.8c-2,0.4-3.9,0.3-5.7-0.7C70.6,23.2,70.6,23.2,70.5,23.2z M72.5,19.6c0.1,0,0.2,0,0.2,0c1.5,0.3,3,0.3,4.5,0.1   c1.9-0.3,3.8-0.9,5.3-2.2c1-0.9,1.9-1.8,2.3-3.2c0.4-1.3-0.1-2.3-1.3-2.5c-0.4-0.1-0.7-0.1-1.1,0c-1.1,0.2-2.1,0.6-3,1.1   c-2.2,1.3-4,3-5.6,5C73.4,18.5,73,19,72.5,19.6z M75.3,10.7c-1.3,0-2.5,0.2-3.7,0.8c-1.8,0.9-3,2.3-3.2,4.5c0,0.4-0.1,0.8,0.1,1.2   C70.6,14.7,72.6,12.4,75.3,10.7z" />
                  <path d="M75.6,39.9c0,1.9,0,3.7,0,5.6c0,1.4,0,2.8-0.4,4.1c-0.3,1.1-0.5,1.3-1.7,1.4c-0.7,0.1-1.4,0-2.1-0.2s-1.1-0.7-1.3-1.4   c-0.2-0.8-0.2-1.7-0.3-2.5c-0.1-4,0.1-8,0.4-12c0.2-1.9,0.3-3.7,0.7-5.5c0.1-0.5,0.3-1,0.6-1.5c0.4-0.6,1-0.8,1.7-0.4   c0.4,0.2,0.8,0.6,1,1c0.8,1.1,1,2.3,1.1,3.6c0.2,2.3,0.1,4.6,0.1,6.9C75.5,39.2,75.5,39.5,75.6,39.9C75.5,39.9,75.6,39.9,75.6,39.9   z" />
                  <path d="M150.7,69.9c0,0.9-0.6,1.6-1.4,1.6c-0.9,0-1.6-0.8-1.5-1.7c0-0.8,0.7-1.4,1.6-1.4C150.2,68.4,150.7,69,150.7,69.9z    M149.4,68.6c-0.8,0-1.3,0.5-1.3,1.2c0,0.8,0.6,1.5,1.3,1.5s1.2-0.6,1.2-1.4C150.5,69.1,150,68.6,149.4,68.6z" />
                  <path d="M149.9,70.6c-0.3,0.3-0.7,0.4-1,0.1c-0.4-0.3-0.5-1-0.2-1.4c0.2-0.3,0.6-0.4,1.1-0.1c-0.1,0.1-0.3,0.1-0.5,0.1   c-0.5,0.1-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7C149.6,70.6,149.7,70.6,149.9,70.6z" />
                </g>
              </svg>
            </span>

            <span>
              <Image
                src={"/facebook.png"}
                width={0}
                height={0}
                alt="Facebook-img"
                unoptimized
                priority
              ></Image>
            </span>

            <span>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="180.9px"
                height="53.9px"
                viewBox="0 0 180.9 53.9"
              >
                <g>
                  <path
                    class="st0"
                    d="M36.9,53.9c-12.3,0-24.6,0-36.9,0C0,35.9,0,18,0,0c12.3,0,24.5,0,36.9,0C36.9,17.9,36.9,35.9,36.9,53.9z    M5.3,5.4c0,14.4,0,28.7,0,43.1c8.8,0,17.5,0,26.3,0c0-14.4,0-28.7,0-43.1C22.8,5.4,14.1,5.4,5.3,5.4z"
                  />
                  <path
                    class="st1"
                    d="M159.3,48.4c-1.1,0-2.1,0-3.2,0c0-3,0-5.9,0-8.9c-2.2,0-4.3,0-6.6,0c0,3,0,5.9,0,8.9c-1.1,0-2.1,0-3.1,0   c0-6.2,0-12.4,0-18.7c1,0,2,0,3.1,0c0,2.4,0,4.7,0,7.2c2.2,0,4.3,0,6.6,0c0-2.4,0-4.7,0-7.1c1.1,0,2.1,0,3.2,0   C159.3,36,159.3,42.1,159.3,48.4z"
                  />
                  <path
                    class="st2"
                    d="M94.5,14c0.1-2.8,1-5.8,4-7.7c3.2-2.2,7.2-1.4,9.6,1.6c3.1,4,2.8,10.8-0.6,14.4c-3.1,3.3-8.6,2.7-11-1.1   C95.1,19.2,94.6,16.9,94.5,14z M97.9,14.4c0.1,1.9,0.3,3.5,1,5c0.7,1.4,1.8,2.4,3.4,2.4s2.8-0.8,3.5-2.2c1.5-3.2,1.6-6.5,0.1-9.7   c-0.7-1.4-1.9-2.2-3.5-2.1c-1.6,0-2.7,0.9-3.5,2.2C98.1,11.4,97.9,13,97.9,14.4z"
                  />
                  <path
                    class="st3"
                    d="M72.9,38.4c0.1-2.8,1-5.7,3.9-7.7c3.2-2.1,7.1-1.5,9.6,1.5c3.2,3.9,2.9,10.8-0.5,14.5c-3.1,3.3-8.6,2.8-11.1-1   C73.5,43.6,73,41.4,72.9,38.4z M76.3,38.8c0,1.6,0.2,3.3,0.9,4.7c0.7,1.4,1.7,2.5,3.4,2.5c1.6,0.1,2.8-0.6,3.5-2   c1.6-3.3,1.7-6.7,0-10c-0.7-1.4-1.9-2.1-3.5-2c-1.6,0-2.7,0.9-3.4,2.3C76.5,35.7,76.3,37.2,76.3,38.8z"
                  />
                  <path
                    class="st4"
                    d="M125.9,24.2c-0.8,0-1.5,0-2.2,0c-3-4.3-6-8.7-8.9-13.4c0,4.5,0,8.8,0,13.2c-0.9,0.1-1.7,0.1-2.6,0.1   c0-6.3,0-12.4,0-18.7c0.7-0.2,1.4,0,2.2-0.1c3.1,4.3,6.1,8.6,9,13.1c0-4.3,0-8.7,0-13c0.9,0,1.7,0,2.5,0   C125.9,11.6,125.9,17.9,125.9,24.2z"
                  />
                  <path
                    class="st4"
                    d="M59.1,5.4c0.9,0,1.7,0,2.6,0c0,6.2,0,12.4,0,18.7c-0.7,0.2-1.4,0-2.2,0.1c-3.1-4.4-6-8.8-9-13.5   c0,4.6,0,9,0,13.4c-0.9,0.1-1.7,0.1-2.5,0c0-6.2,0-12.4,0-18.7c0.7,0,1.4,0,2.2,0c3.1,4.2,6,8.6,9,13.3   C59.1,14.1,59.1,9.8,59.1,5.4z"
                  />
                  <path
                    class="st2"
                    d="M117.8,48.4c-1.1,0-2.2,0-3.3,0c-1-2.3-2-4.6-3-7c-0.5-0.1-1-0.1-1.6,0c0,2.3,0,4.6,0,7c-1.1,0-2.1,0-3.1,0   c0-6.2,0-12.4,0-18.8c2.4,0.1,4.7-0.3,7.1,0.3c2.5,0.6,3.9,3,3.5,5.9c-0.3,2.1-1.2,3.7-3.1,4.9c1.2,2.5,2.4,4.9,3.5,7.4   C117.8,48.2,117.8,48.3,117.8,48.4z M110,32.3c0,2.3,0,4.5,0,6.8c3.2-0.3,4.5-1.6,4.3-4.2C114.1,32.8,112.8,32,110,32.3z"
                  />
                  <path
                    class="st5"
                    d="M103.7,47.5c-3.7,1.9-8.2,1.5-10.9-0.9c-2.2-2-3.2-4.6-3.2-7.5c0-3.5,1.2-6.5,4.3-8.5c2.8-1.8,6.7-1.7,9.2,0.2   c-0.3,0.7-0.6,1.4-0.9,2.1c-0.6-0.2-1.2-0.5-1.8-0.7c-3-0.8-5.5,0.5-6.7,3.4c-1.2,3.1-0.5,7.1,1.7,9.1c1.4,1.3,3.4,1.6,5.3,0.8   c0-1.9,0-3.8,0-5.8c1.1,0,2.1,0,3.1,0C103.7,42.4,103.7,44.9,103.7,47.5z"
                  />
                  <path
                    class="st2"
                    d="M56.5,45.6c0-1.9,0-3.8,0-5.8c1,0,2,0,3.1,0c0,2.5,0,5.1,0,7.6c-4.3,2-8.9,1.5-11.5-1.5S45,39.4,46,35.6   s4.4-6.4,8.3-6.4c1.7,0,3.2,0.4,4.7,1.5c-0.3,0.7-0.6,1.4-1,2.2c-0.4-0.2-0.8-0.4-1.2-0.5c-3.1-1.2-6.1,0.1-7.2,3.2   c-1.1,2.9-0.9,5.7,0.9,8.3C51.8,45.9,54.4,46.6,56.5,45.6z"
                  />
                  <path
                    class="st3"
                    d="M117.8,48.4c0-0.1,0-0.2,0-0.3c0.1,0.1,0.2,0.1,0.3,0.2c2.1-6.2,4.2-12.4,6.4-18.6c0.9,0,1.7,0,2.6,0   c1.9,6.2,3.9,12.4,5.8,18.7c-1.2,0-2.3,0-3.5,0c-0.5-1.7-1-3.4-1.5-5.1c-1.9,0-3.7,0-5.6,0c-0.5,1.7-1,3.4-1.6,5.1   C119.8,48.4,118.8,48.4,117.8,48.4z M123.3,40.9c1.5,0,2.8,0,4.2,0c-0.7-2.5-1.4-4.9-2-7.2C124.7,36.1,124,38.5,123.3,40.9z"
                  />
                  <path
                    class="st3"
                    d="M141.7,24.1c-1.2,0-2.3,0-3.5,0c-0.5-1.7-1-3.4-1.5-5.1c-1.9,0-3.7,0-5.6,0c-0.5,1.7-1,3.4-1.6,5.1   c-0.9,0-1.7,0-2.7,0c2.1-6.3,4.3-12.5,6.4-18.7c0.9,0,1.7,0,2.6,0C137.8,11.6,139.7,17.8,141.7,24.1z M132,16.7c1.5,0,2.8,0,4.2,0   c-0.7-2.5-1.4-4.9-2.1-7.6C133.5,11.7,132.8,14.2,132,16.7z"
                  />
                  <path
                    class="st3"
                    d="M77.3,24.1c-1.2,0-2.3,0-3.5,0c-0.5-1.7-1-3.4-1.5-5.1c-1.8,0-3.6,0-5.5,0c-0.5,1.7-1,3.4-1.6,5.1   c-0.9,0-1.7,0-2.7,0c2.1-6.3,4.2-12.4,6.4-18.7c0.8,0,1.7,0,2.6,0C73.5,11.5,75.4,17.8,77.3,24.1z M69.8,9.1   c-0.6,2.7-1.3,5.1-2.1,7.6c1.4,0,2.8,0,4.2,0C71.3,14.2,70.6,11.7,69.8,9.1z"
                  />
                  <path
                    class="st5"
                    d="M134,29.7c2,0,4-0.1,5.9,0c3.4,0.3,5.4,3.1,4.6,6.6c-0.7,3.2-2.9,5-6.2,5.1c-0.4,0-0.7-0.1-1.1,0.1   c0,2.3,0,4.5,0,6.9c-1.1,0-2.1,0-3.1,0C134,42.2,134,36,134,29.7z M137.1,39c3.2-0.2,4.6-1.6,4.3-4.2c-0.3-2.1-1.8-3-4.3-2.6   C137.1,34.5,137.1,36.7,137.1,39z"
                  />
                  <path
                    class="st5"
                    d="M65.9,37.4c1.7,0,3.4,0,5.1,0c0,0.8,0,1.6,0,2.5c-1.6,0-3.3,0-5.1,0c0,2.1,0,4,0,6.1c2,0,4,0,6.1,0   c0.2,0.8,0.1,1.6,0.1,2.4c-3.2,0-6.2,0-9.4,0c0-6.2,0-12.4,0-18.7c2.8,0,5.5,0,8.4,0c0,0.8,0,1.6,0,2.5c-1.7,0-3.4,0-5.1,0   C65.9,34,65.9,35.7,65.9,37.4z"
                  />
                  <path
                    class="st3"
                    d="M180.9,30.8c-0.3,0.7-0.7,1.4-1,2.2c-0.3-0.1-0.6-0.2-0.8-0.3c-3.2-1.4-6.2-0.3-7.4,3c-1.1,3-1,6.1,1.2,8.7   c1.6,1.9,4.3,2.2,6.4,1.1c0.2-0.1,0.4-0.2,0.6-0.3c0.3,0.8,0.6,1.5,0.9,2.3c-2,1.2-4.1,1.5-6.3,1c-3.6-0.9-6.2-4-6.7-7.8   c-0.4-3.4,0.3-6.5,2.8-9C173.5,28.9,177.7,28.6,180.9,30.8z"
                  />
                  <path
                    class="st4"
                    d="M83.6,24.1c-1.1,0-2.1,0-3.2,0c0-5.4,0-10.7,0-16.1c-1.6,0-3.2,0-4.8,0c0-0.9,0-1.7,0-2.5c4.2,0,8.4,0,12.7,0   c0.2,0.8,0,1.6,0.1,2.5c-1.6,0-3.2,0-4.8,0C83.6,13.3,83.6,18.7,83.6,24.1z"
                  />
                  <path
                    class="st6"
                    d="M142.8,5.4c1,0,2,0,3.1,0c0,5.4,0,10.8,0,16.3c2.1,0,4.2,0,6.3,0c0.1,0.8,0.1,1.6,0,2.4c-3.1,0-6.2,0-9.3,0   C142.8,17.9,142.8,11.7,142.8,5.4z"
                  />
                  <path
                    class="st7"
                    d="M162.4,48.4c0-6.2,0-12.4,0-18.7c1,0,2,0,3.1,0c0,6.2,0,12.4,0,18.7C164.5,48.4,163.5,48.4,162.4,48.4z"
                  />
                  <path
                    class="st6"
                    d="M89.5,24.1c0-6.2,0-12.4,0-18.6c1,0,2,0,3,0c0,6.2,0,12.4,0,18.6C91.6,24.1,90.6,24.1,89.5,24.1z"
                  />
                </g>
              </svg>
            </span>

            <span>
              <Image
                src={"/oracle.png"}
                width={0}
                height={0}
                alt="oracle-img"
                unoptimized
                priority
              ></Image>
            </span>

            <span>
              <Image
                src={"/amazon.png"}
                width={0}
                height={0}
                alt="oracle-img"
                unoptimized
                priority
              ></Image>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h1>Our Unnity Digital Marketing Services</h1>
          </div>

          <div className="caed-box">
            <div className="card-box-df">
              <div className="card-box-top">
                <div className="card-box-top-n-cover">
                  <div
                    className="card-box-top-n"
                    onClick={() => {
                      setShowFirstCard(true);
                    }}
                  >
                    <Image
                      id="pluss"
                      src={"/ben-plus.png"}
                      width={0}
                      height={0}
                      alt="plus"
                      unoptimized
                      priority
                    ></Image>

                    <span>
                      <svg
                        id="search-svg"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="63.95"
                        height="55.09"
                        viewBox="0 0 63.95 55.09"
                      >
                        <defs></defs>
                        <polygon
                          class="cls-1"
                          points="62.95 48.2 57.9 53.25 44.93 40.29 50.06 35.32 62.95 48.2 62.95 48.2"
                        />
                        <path
                          class="cls-1"
                          d="M11.65,28.89A21.5,21.5,0,0,1,32.16,1h0a21.48,21.48,0,1,1-5.75,42.18L25.89,43"
                        />
                        <path
                          class="cls-1"
                          d="M32,7.09A15.54,15.54,0,0,1,47.5,22.63"
                        />
                        <path
                          class="cls-2"
                          d="M33.81,40.24A16.46,16.46,0,0,0,34,37.69a16.27,16.27,0,0,0-.19-2.55H29.92a12.54,12.54,0,0,0-1.87-4.48l2.75-2.75a15.55,15.55,0,0,0-3.62-3.62L24.45,27A12.71,12.71,0,0,0,20,25.17V21.28a17.14,17.14,0,0,0-5.09,0v3.89A12.54,12.54,0,0,0,10.38,27L7.63,24.29A15.74,15.74,0,0,0,4,27.91l2.75,2.75a12.54,12.54,0,0,0-1.87,4.48H1a17.58,17.58,0,0,0-.19,2.55A17.79,17.79,0,0,0,1,40.24H4.89a12.74,12.74,0,0,0,1.87,4.49L4,47.47a15.51,15.51,0,0,0,3.62,3.61l2.75-2.75a12.54,12.54,0,0,0,4.48,1.87v3.89a16.29,16.29,0,0,0,5.09,0V50.2a12.71,12.71,0,0,0,4.5-1.87l2.73,2.75a15.32,15.32,0,0,0,3.62-3.61l-2.75-2.74a12.74,12.74,0,0,0,1.87-4.49Zm-16.4,5.1a7.66,7.66,0,1,1,7.65-7.65A7.65,7.65,0,0,1,17.41,45.34Z"
                        />
                      </svg>
                    </span>
                    <h4>Unnity SEO Services for Agencies</h4>
                  </div>

                  {showFirstCard && (
                    <div
                      className="card-box-top-n-second"
                      onClick={() => setShowFirstCard(false)}
                    >
                      <Image
                        id="pluss-two"
                        src={"/ben-plus.png"}
                        width={0}
                        height={0}
                        alt="plus"
                        unoptimized
                        priority
                      ></Image>

                      <h4>Unnity SEO Services for Agencies</h4>
                      <p>
                        Full Suite SEO , Local SEO , Google Analytics
                        Configuration , Link Building , SEO Audits , Content
                        Support
                      </p>
                    </div>
                  )}
                </div>

                <div className="card-box-top-n-cover">
                  <div
                    className="card-box-top-n"
                    onClick={() => {
                      setShowSecondCard(true);
                    }}
                  >
                    <Image
                      id="pluss"
                      src={"/ben-plus.png"}
                      width={0}
                      height={0}
                      alt="plus"
                      unoptimized
                      priority
                    ></Image>

                    <span>
                      <Image
                        id="pc"
                        src={"/pc.png"}
                        width={0}
                        height={0}
                        unoptimized
                        priority
                      ></Image>
                    </span>
                    <h4>Unnity PPC Services</h4>
                  </div>

                  {showSecondCard && (
                    <div
                      className="card-box-top-n-second"
                      onClick={() => setShowSecondCard(false)}
                    >
                      <Image
                        id="pluss-two"
                        src={"/ben-plus.png"}
                        width={0}
                        height={0}
                        alt="plus"
                        unoptimized
                        priority
                      ></Image>

                      <h4>Unnity PPC Services</h4>
                      <p>
                        Ad Management , Ad Remarketing , Video Ad Management ,
                        PPC Audits
                      </p>
                    </div>
                  )}
                </div>

                <div className="card-box-top-n-cover">
                  <div
                    className="card-box-top-n"
                    onClick={() => {
                      setShowThirdCard(true);
                    }}
                  >
                    <Image
                      id="pluss"
                      src={"/ben-plus.png"}
                      width={0}
                      height={0}
                      alt="plus"
                      unoptimized
                      priority
                    ></Image>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="speak-svg"
                      data-name="Layer 1"
                      width="65.25"
                      height="63.19"
                      viewBox="0 0 65.25 63.19"
                    >
                      <defs></defs>
                      <path
                        class="cls-1"
                        d="M45,11.88l-.71-3.83,1.28-.23-.09-1.53L44,6.56l-.18-.95c-.08-.43,0-.75.61-.86l.79-.15L45,3.27a11.2,11.2,0,0,0-1.16.15,1.83,1.83,0,0,0-1.55,2.33l.2,1.1-1.29.24.28,1.49,1.29-.24.71,3.83L45,11.88Z"
                      />
                      <rect
                        class="cls-2"
                        x="37.51"
                        y="1.75"
                        width="12.11"
                        height="12.11"
                        transform="translate(-0.69 8.08) rotate(-10.52)"
                      />
                      <rect
                        class="cls-2"
                        x="51.31"
                        y="15.55"
                        width="12.11"
                        height="12.11"
                        transform="translate(-0.55 1.52) rotate(-1.51)"
                      />
                      <rect
                        class="cls-2"
                        x="51.97"
                        y="32.63"
                        width="12.11"
                        height="12.11"
                        transform="matrix(1, 0.07, -0.07, 1, 2.97, -4.13)"
                      />
                      <rect
                        class="cls-2"
                        x="42.77"
                        y="49.71"
                        width="12.11"
                        height="12.11"
                        transform="translate(6.37 -4.99) rotate(6.26)"
                      />
                      <path
                        class="cls-1"
                        d="M55.68,21.82a1.44,1.44,0,1,1,1.48,1.4,1.44,1.44,0,0,1-1.48-1.4m-.78,0a2.22,2.22,0,1,0,2.16-2.28,2.23,2.23,0,0,0-2.16,2.28m4-2.41a.52.52,0,0,0,1,0,.52.52,0,1,0-1,0m-3.38,5.92a2.65,2.65,0,0,1-.81-.13,1.24,1.24,0,0,1-.5-.31,1.28,1.28,0,0,1-.34-.49,2.48,2.48,0,0,1-.17-.8c0-.45,0-.59-.07-1.74s0-1.3,0-1.75a2.68,2.68,0,0,1,.12-.81,1.52,1.52,0,0,1,.32-.51,1.25,1.25,0,0,1,.48-.33,2.23,2.23,0,0,1,.8-.17c.46,0,.59,0,1.75-.07s1.29,0,1.75,0a2.31,2.31,0,0,1,.8.12,1.44,1.44,0,0,1,.85.8,2.48,2.48,0,0,1,.17.8c0,.46,0,.59.07,1.75s0,1.29,0,1.75a2.25,2.25,0,0,1-.13.8,1.28,1.28,0,0,1-.31.51,1.37,1.37,0,0,1-.49.33,2.23,2.23,0,0,1-.8.17c-.45,0-.59.05-1.74.08s-1.29,0-1.75,0m-.24-7.82a3.22,3.22,0,0,0-1,.23,2.08,2.08,0,0,0-.75.52,2.15,2.15,0,0,0-.48.78,3.19,3.19,0,0,0-.17,1.05c0,.46,0,.61,0,1.79s0,1.32.07,1.78a3.43,3.43,0,0,0,.23,1,2.08,2.08,0,0,0,.52.75,2,2,0,0,0,.78.48,3.16,3.16,0,0,0,1.05.18c.47,0,.61,0,1.79,0s1.32,0,1.78-.07a2.92,2.92,0,0,0,1-.23,2.2,2.2,0,0,0,.76-.52,2,2,0,0,0,.47-.78,3.11,3.11,0,0,0,.18-1.05c0-.46,0-.61,0-1.78s0-1.32-.08-1.78a3,3,0,0,0-.23-1.05,2,2,0,0,0-.52-.75,2,2,0,0,0-.77-.48,3.25,3.25,0,0,0-1.06-.17c-.46,0-.61,0-1.78,0s-1.32,0-1.78.07"
                      />
                      <path
                        class="cls-1"
                        d="M54.64,35.84a.79.79,0,0,1,.3-.58.93.93,0,0,1,.67-.18.87.87,0,0,1,.62.27.8.8,0,0,1,.21.64.74.74,0,0,1-.29.55.91.91,0,0,1-.68.19h0a.86.86,0,0,1-.62-.28A.8.8,0,0,1,54.64,35.84Zm-.36,6.29.35-4.8,1.59.12-.35,4.79Zm2.48.18,1.59.12.2-2.68a1.15,1.15,0,0,1,.08-.39A1,1,0,0,1,59,39a.81.81,0,0,1,.52-.13c.54,0,.78.42.73,1.14L60,42.55l1.6.11.2-2.75a2.32,2.32,0,0,0-.39-1.65,1.71,1.71,0,0,0-1.29-.64,1.63,1.63,0,0,0-1.5.69h0l.05-.68-1.59-.12c0,.15,0,.63-.09,1.43S56.87,40.86,56.76,42.31Z"
                      />
                      <path
                        class="cls-1"
                        d="M50.67,53.45h0l.33,0,.12,0,.21.09.18.12a1,1,0,0,1,.15.13.71.71,0,0,1,.12.13c0,.05.09.06.18.06l.28,0,.3-.08.19-.05,0,0h0v0l-.08.12a1.62,1.62,0,0,1-.18.2.6.6,0,0,1-.18.15l-.1.07-.06,0,0,0h.16l.36,0,.18,0h0l-.1.09-.1.1,0,0-.16.12-.28.19a.27.27,0,0,0-.15.22c0,.09,0,.2-.07.32a3.61,3.61,0,0,1-.1.38,3.5,3.5,0,0,1-.18.45,4.52,4.52,0,0,1-.25.49,4.85,4.85,0,0,1-.29.41,3,3,0,0,1-.26.31l-.23.23-.29.24-.19.14-.14.08-.27.15-.25.12-.28.1a2.75,2.75,0,0,1-.34.1l-.38.07-.38,0h-.65l-.42-.07h0l-.09,0-.26-.07-.35-.12a2.89,2.89,0,0,1-.37-.18,3.67,3.67,0,0,1-.42-.24L45.36,58l-.1-.08,0,0h0l.16,0,.27,0,.3,0,.37,0a2.26,2.26,0,0,0,.39-.07l.26-.08a1.56,1.56,0,0,0,.24-.1l.16-.08h0l-.1,0-.15,0-.21-.11a1.37,1.37,0,0,1-.21-.15l-.15-.14s-.06-.09-.1-.15a1,1,0,0,1-.11-.2,1.13,1.13,0,0,1-.08-.22l0-.12h0l.07,0,.22,0a.82.82,0,0,0,.21,0h.07l0,0-.16-.1a1,1,0,0,1-.21-.15,1,1,0,0,1-.14-.15,1.16,1.16,0,0,1-.13-.2,1.69,1.69,0,0,1-.13-.27,1.77,1.77,0,0,1-.06-.3,1.22,1.22,0,0,1,0-.27v-.13h0l.1.06a1.67,1.67,0,0,0,.23.11l.17.06h.05l-.05,0-.1-.12-.09-.15a1.3,1.3,0,0,1-.08-.17,1.94,1.94,0,0,1-.07-.22,2,2,0,0,1,0-.26,2.18,2.18,0,0,1,0-.25.88.88,0,0,1,0-.2.89.89,0,0,1,.07-.19.9.9,0,0,1,.11-.22l.07-.11h0l.07.11.17.25.12.14s0,0,0,0l.11.14a3,3,0,0,0,.25.24l.36.3c.13.09.27.18.43.27a2.64,2.64,0,0,0,.33.17l.32.13L49,55l.16,0h0v-.08s0-.13,0-.22,0-.19.06-.27a2.4,2.4,0,0,1,.11-.23c0-.08.08-.14.11-.19l.14-.15.21-.18a2,2,0,0,1,.29-.14,1.21,1.21,0,0,1,.28-.08l.21,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M19,32.93a1.51,1.51,0,1,0,1.5,1.51A1.51,1.51,0,0,0,19,32.93Z"
                      />
                      <path
                        class="cls-2"
                        d="M9.32,32.93a1.51,1.51,0,1,0,1.5,1.51,1.51,1.51,0,0,0-1.5-1.51Z"
                      />
                      <path
                        class="cls-3"
                        d="M30.63,18.43H31a2.2,2.2,0,0,1,2.19,2.19V49.09A2.2,2.2,0,0,1,31,51.28h-.36c-1.21,0-8.77-11.16-16.85-11.16H3.72a3,3,0,0,1-3-3V32.56a3,3,0,0,1,3-3H13.78c8.09,0,15.64-11.16,16.85-11.16Z"
                      />
                      <path
                        class="cls-2"
                        d="M35.12,29.53a5.55,5.55,0,0,1,0,10.65"
                      />
                      <line
                        class="cls-2"
                        x1="13.97"
                        y1="29.59"
                        x2="13.97"
                        y2="40.12"
                      />
                      <path
                        class="cls-2"
                        d="M11.57,40.12c.4,2.32-.19,4.75,1.22,7l2.4,3.77a1.89,1.89,0,0,1-1.46,2.6H10.14a2.72,2.72,0,0,1-2.5-2L4.94,40.12Z"
                      />
                      <path
                        class="cls-2"
                        d="M35.4,21.63a13.6,13.6,0,0,1,0,26.11"
                      />
                    </svg>

                    <h4>Unnity SMM Services</h4>
                  </div>

                  {showThirdCard && (
                    <div
                      className="card-box-top-n-second"
                      onClick={() => setShowThirdCard(false)}
                    >
                      <Image
                        id="pluss-two"
                        src={"/ben-plus.png"}
                        width={0}
                        height={0}
                        alt="plus"
                        unoptimized
                        priority
                      ></Image>

                      <h4>Unnity SMM Services</h4>
                      <p>
                        Facebook Ads , Instagram Ads , LinkedIn Ads , YouTube
                        Ads
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="card-box-last">
                <div className="card-box-top-n-cover">
                  <div
                    className="card-box-top-n"
                    onClick={() => {
                      setShowFourCard(true);
                    }}
                  >
                    <Image
                      id="pluss"
                      src={"/ben-plus.png"}
                      width={0}
                      height={0}
                      alt="plus"
                      unoptimized
                      priority
                    ></Image>
                    <span>
                      <svg
                        version="1.1"
                        id="blog"
                        x="0px"
                        y="0px"
                        width="45.7px"
                        height="45.7px"
                        viewBox="0 0 45.7 45.7"
                      >
                        <g>
                          <polygon
                            class="st0"
                            points="0.4,16.3 14.2,16.3 16.4,17.6 16.4,34.6 18.7,34.6 17.2,36.9 14.2,37.7 1.2,37.7  "
                          />
                          <path
                            class="st1"
                            d="M6.9,23.6H0.8C0.3,23.6,0,24,0,24.4v6.1c0,0.4,0.3,0.8,0.8,0.8h6.1c0.4,0,0.8-0.3,0.8-0.8v-6.1   C7.6,24,7.3,23.6,6.9,23.6 M6.1,29.7H1.5v-4.6h4.6V29.7z"
                          />
                          <path
                            class="st1"
                            d="M42.3,0H3.4C1.5,0,0,1.5,0,3.4v38.9c0,1.9,1.5,3.4,3.4,3.4h38.9c1.9,0,3.4-1.5,3.4-3.4V3.4   C45.7,1.5,44.2,0,42.3,0 M44.2,42.3c0,1.1-0.9,1.9-1.9,1.9H3.4c-1,0-1.9-0.9-1.9-1.9V3.4c0-1.1,0.9-1.9,1.9-1.9h38.9   c1.1,0,1.9,0.9,1.9,1.9C44.2,3.4,44.2,42.3,44.2,42.3z"
                          />
                          <path
                            class="st1"
                            d="M6.9,3h-3C3.4,3,3,3.4,3,3.8v3c0,0.4,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8v-3C7.6,3.4,7.3,3,6.9,3    M6.1,6.1H4.6V4.6h1.5V6.1z"
                          />
                          <path
                            class="st1"
                            d="M13,3h-3C9.5,3,9.1,3.4,9.1,3.8v3c0,0.4,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8v-3C13.7,3.4,13.4,3,13,3    M12.2,6.1h-1.5V4.6h1.5V6.1z"
                          />
                          <path
                            class="st1"
                            d="M19.1,3h-3c-0.4,0-0.8,0.3-0.8,0.8v3c0,0.4,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8v-3   C19.8,3.4,19.5,3,19.1,3 M18.3,6.1h-1.5V4.6h1.5V6.1z"
                          />
                          <path
                            class="st1"
                            d="M42.3,0H3.4C1.5,0,0,1.5,0,3.4v6.5c0,0.4,0.3,0.8,0.8,0.8H45c0.4,0,0.8-0.3,0.8-0.8V3.4   C45.7,1.5,44.2,0,42.3,0 M44.2,9.1H1.5V3.4c0-1,0.9-1.9,1.9-1.9h38.9c1.1,0,1.9,0.9,1.9,1.9C44.2,3.4,44.2,9.1,44.2,9.1z"
                          />
                          <path
                            class="st1"
                            d="M38.1,21.3H23.6c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.8,0.8,0.8h14.5c0.4,0,0.8-0.3,0.8-0.8   C38.9,21.7,38.5,21.3,38.1,21.3"
                          />
                          <path
                            class="st1"
                            d="M34.3,18.3H23.6c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.8,0.8,0.8h10.7c0.4,0,0.8-0.3,0.8-0.8   C35.1,18.6,34.7,18.3,34.3,18.3"
                          />
                          <path
                            class="st1"
                            d="M40.4,24.4H23.6c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h16.8c0.4,0,0.8-0.3,0.8-0.8S40.8,24.4,40.4,24.4"
                          />
                          <path
                            class="st1"
                            d="M38.1,32.8H23.6c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h14.5c0.4,0,0.8-0.3,0.8-0.8S38.5,32.8,38.1,32.8"
                          />
                          <path
                            class="st1"
                            d="M34.3,29.7H23.6c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h10.7c0.4,0,0.8-0.3,0.8-0.8S34.7,29.7,34.3,29.7"
                          />
                          <path
                            class="st1"
                            d="M40.4,35.8H23.6c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h16.8c0.4,0,0.8-0.3,0.8-0.8S40.8,35.8,40.4,35.8"
                          />
                          <path
                            class="st1"
                            d="M13,19.1H0.8c-0.4,0-0.8,0.3-0.8,0.8v15.2c0,0.4,0.3,0.8,0.8,0.8H13c0.4,0,0.8-0.3,0.8-0.8V19.8   C13.7,19.4,13.4,19.1,13,19.1 M12.2,34.3H1.5V20.6h10.7V34.3z"
                          />
                          <path
                            class="st1"
                            d="M13.9,16H0.8C0.3,16,0,16.3,0,16.8v18.3c0,0.4,0.3,0.8,0.8,0.8H16c0.4,0,0.8-0.3,0.8-0.8V18.8   C16.8,17.3,15.5,16,13.9,16 M15.2,34.3H1.5V17.5h12.4c0.7,0,1.3,0.6,1.3,1.3V34.3z"
                          />
                          <path
                            class="st1"
                            d="M18.3,34.3H0.8c-0.4,0-0.8,0.3-0.8,0.8v3c0,0.4,0.3,0.8,0.8,0.8h14.5c2.1,0,3.8-1.7,3.8-3.8   C19.1,34.6,18.7,34.3,18.3,34.3 M15.2,37.3H1.5v-1.5h15.9C17.1,36.7,16.2,37.3,15.2,37.3"
                          />
                        </g>
                      </svg>
                    </span>
                    <h4>Unnity Programmatic Advertising </h4>
                  </div>

                  {showFourCard && (
                    <div
                      className="card-box-top-n-second"
                      onClick={() => setShowFourCard(false)}
                    >
                      <Image
                        id="pluss-two"
                        src={"/ben-plus.png"}
                        width={0}
                        height={0}
                        alt="plus"
                        unoptimized
                        priority
                      ></Image>

                      <h4>Unnity Programmatic Advertising</h4>
                      <p>
                        Campaign Development , Google Analytics Integration ,
                        Custom Ad Targeting , Campaign Optimization &
                        Remarketing , Revenue Management
                      </p>
                    </div>
                  )}
                </div>

                <div className="card-box-top-n-cover">
                  <div
                    className="card-box-top-n"
                    onClick={() => {
                      setShowFiveCard(true);
                    }}
                  >
                    <Image
                      id="pluss"
                      src={"/ben-plus.png"}
                      width={0}
                      height={0}
                      alt="plus"
                      unoptimized
                      priority
                    ></Image>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="message-svg"
                        data-name="Layer 1"
                        width="66.02"
                        height="53.2"
                        viewBox="0 0 66.02 53.2"
                      >
                        <defs></defs>
                        <rect
                          class="cls-1"
                          x="19.25"
                          y="1"
                          width="43.55"
                          height="31.07"
                          rx="3.38"
                        />
                        <path
                          class="cls-2"
                          d="M19.59,5.68l16.91,11a7.65,7.65,0,0,0,8.07.18L62.8,6.1"
                        />
                        <line
                          class="cls-2"
                          x1="31.67"
                          y1="17.93"
                          x2="19.59"
                          y2="26.15"
                        />
                        <line
                          class="cls-2"
                          x1="50.22"
                          y1="17.93"
                          x2="62.31"
                          y2="26.15"
                        />
                        <line
                          class="cls-1"
                          x1="14.55"
                          y1="8.29"
                          x2="1"
                          y2="8.29"
                        />
                        <line
                          class="cls-1"
                          x1="65.02"
                          y1="45.1"
                          x2="51.48"
                          y2="45.1"
                        />
                        <line
                          class="cls-1"
                          x1="7.32"
                          y1="1"
                          x2="25.63"
                          y2="1"
                        />
                        <line
                          class="cls-1"
                          x1="42.94"
                          y1="52.2"
                          x2="61.26"
                          y2="52.2"
                        />
                        <path
                          class="cls-2"
                          d="M46.53,36.67V49.79a2.42,2.42,0,0,1-2.42,2.41H5.39A2.42,2.42,0,0,1,3,49.79V23.55a2.42,2.42,0,0,1,2.42-2.41h9.16"
                        />
                        <path
                          class="cls-2"
                          d="M3.31,25.81l16.91,11a7.67,7.67,0,0,0,8.07.17l2-1.17"
                        />
                        <line
                          class="cls-2"
                          x1="15.4"
                          y1="38.07"
                          x2="3.31"
                          y2="46.28"
                        />
                        <line
                          class="cls-2"
                          x1="33.94"
                          y1="38.07"
                          x2="46.03"
                          y2="46.28"
                        />
                      </svg>
                    </span>
                    <h4>Unnity Email Marketing</h4>
                  </div>

                  {showFiveCard && (
                    <div
                      className="card-box-top-n-second"
                      onClick={() => setShowFiveCard(false)}
                    >
                      <Image
                        id="pluss-two"
                        src={"/ben-plus.png"}
                        width={0}
                        height={0}
                        alt="plus"
                        unoptimized
                        priority
                      ></Image>

                      <h4>Unnity Email Marketing</h4>
                      <p>
                        HTML5 Email Template , Newsletters , Email Automation ,
                        Email Template Audit
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-section">
        <div className="growth-section-df">
          <div className="growth-section-left">
            <Image
              src={"/growth-two-img.png"}
              width={0}
              height={0}
              alt="Boxes"
              unoptimized
            ></Image>
          </div>

          <div className="growth-section-right">
            <h1>
              Don’t let anything come in between your business and its growth
            </h1>
            <p>
              When you are on the path of growth, you need to start delegating
              more. Delegating to the right people. Why? Because while a White
              Label Marketing Agency like ours is taking care of your client’s
              projects, you can focus on your core business. So that you can
              plan your next move and incline towards Client Acquisition goals.
              After all, at some point your business needs to evolve and offer
              something more!
            </p>
          </div>
        </div>

        <div className="growth-section-df" id="growth-section-id">
          <div className="growth-section-left">
            <Image
              src={"/speak.png"}
              width={0}
              height={0}
              alt="Boxes"
              unoptimized
            ></Image>
          </div>

          <div className="growth-section-right">
            <h1>
              Planning to expand your Digital Marketing Service offerings?
            </h1>
            <p>
              It doesn’t matter whether you are new in the game or just scaling
              your service offerings - we can address your business’ digital
              marketing needs. With our Unnity SEO Services, Unnity PPC Services
              and other Unnity Digital Services, we have helped agencies like
              yours save the day.
            </p>
          </div>
        </div>

        <div className="growth-section-df">
          <div className="growth-section-left">
            <Image
              src={"/speaker.png"}
              width={0}
              height={0}
              alt="Boxes"
              unoptimized
            ></Image>
          </div>

          <div className="growth-section-right">
            <h1>We Drive - You Lead</h1>
            <p>
              You Lead Times are changing and Unnity Digital Services is
              becoming the new trend businesses are picking up. And when demands
              increase, delivering quality and desirable outputs comes into
              question. Because that’s what Digital Marketing is all about -
              Traffic, ROIs and Profits. That’s where we come into the picture -
              your trustworthy Unnity Marketing Service Partner.
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-header">
          <h1>Why Choose our Unnity Marketing Services?</h1>
        </div>

        <div className="why-choose-df">
          <div className="why-choose-bottom">
            <span>
              <h3>Qualitative Services</h3>
              <p>Quality is the first and foremost ethic we follow.</p>
            </span>

            <span>
              <h3>Well-documented NDA</h3>
              <p>
                You can trust us with data confidentiality and intellectual
                project rights.
              </p>
            </span>

            <span>
              <h3>Dedicated Project Manager</h3>
              <p>
                We make communications easier with a single point of contact.
              </p>
            </span>

            <span>
              <h3>Agency-Centric Processes</h3>
              <p>We follow your agency processes to match your goals.</p>
            </span>

            <span>
              <h3>Scalable Operations</h3>

              <p>When it comes to resources - you'll always have enough.</p>
            </span>

            <span>
              <h3>Quick Turnaround Time</h3>
              <p>
                That's something we can bet on without compromising quality.
              </p>
            </span>

            <span>
              <h3>Global Client Base</h3>
              <p>We have more than 500+ happy clients across the globe.</p>
            </span>
          </div>
        </div>
      </section>

      <section className="section-nine" id="nine">
        <div className="section-nine-header">
          <h1>
            some call it work <br /> we call it <span id="blue">passion</span>
          </h1>
        </div>

        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef2}>
              <div className="carousel__cell number-slide1 ">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/bab-video.mp4" type="video/mp4" />
                  </video>
                  <h3>Bablouie</h3>
                </div>
              </div>
              <div className="carousel__cell number-slide2">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/isu-video.mp4" type="video/mp4" />
                  </video>
                  <h3>ISU Fashion</h3>
                </div>
              </div>
              <div className="carousel__cell number-slide3">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/cupid4-video.mp4" type="video/mp4" />
                  </video>
                  <h3>Cupid Clothing</h3>
                </div>
              </div>
              <div className="carousel__cell number-slide4">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/comforto-video.mp4" type="video/mp4" />
                  </video>
                  <h3>Comforto Bedding</h3>
                </div>
              </div>
              <div className="carousel__cell number-slide5">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/aurave-video.mp4" type="video/mp4" />
                  </video>
                  <h3>Aurave</h3>
                </div>
              </div>
              <div className="carousel__cell number-slide6">
                <div className="video" id="video-one">
                  <video muted autoPlay={true} loop controls={false}>
                    <source src="/uberlyfe2-video.mp4" type="video/mp4" />
                  </video>
                  <h3>Uberlyfe</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inquire">
        <div className="inquire-df">
          <div className="inquire-left">
            <h3>
              Let us redefine your conversions and ROIs with effective White
              Label Marketing Services
            </h3>
            <h2>Our hourly rates start from $25/hour to $40/hour.</h2>
          </div>
          <div className="inquire-right">
            <button>Inquire Today</button>
          </div>
        </div>
      </section>

      <section className="reason-to-choose">
        <div className="reason-to-choose-header">
          <h1>
            Reasons to choose Unnitys as your = Digital
            <br /> Marketing Agency
          </h1>
        </div>

        <div className="reason-to-choose-check">
          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Google and Meta Certiﬁed Search & Analytics professionals</h3>
          </span>

          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Better return on investment (ROI)</h3>
          </span>

          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Amazing customer service</h3>
          </span>

          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Equipped with industry-leading tools and software</h3>
          </span>

          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Results-driven approach</h3>
          </span>

          <span>
            <svg
              version="1.1"
              id="tick"
              x="0px"
              y="0px"
              width="33.7px"
              height="33.7px"
              viewBox="0 0 33.7 33.7"
            >
              <g>
                <rect class="st0" width="33.7" height="33.7" />
                <path d="M7,17.2c0.2-0.2,0.5-0.5,0.7-0.7c1.3,1.3,4.5,4.6,5.8,5.8c4.8-4.8,7.6-7.6,12.4-12.4c0.2,0.3,0.5,0.5,0.7,0.7   c-5,5-8.1,8.1-13.1,13.2C12.1,22.3,8.5,18.7,7,17.2" />
              </g>
            </svg>
            <h3>Flexible outlook, committed deliverables</h3>
          </span>
        </div>
      </section>

      <section className="faq-sec">
        <h1>Frequently Asked Questions</h1>
        {/* <div className="questions-ans">
          <span id="title-ans" onClick={showHandler}>
            <h3>What makes Unnity different from other Digital Agencies?</h3>

            {hidePlusButton && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButton && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerOne && (
            <p>
              As a reliable operational partner - we are inclined towards
              expertise and quality. With more than 5+ years of experience and
              having worked with more than 50+ clients globally, we have helped
              agencies quantify their marketing efforts. How? With a
              full-fledged and dedicated workforce professionals. Be it
              achieving scalability, business objectives or even brand value -
              we have provided an edge over their competitors. Hence choosing us
              as your Digital Agency is not a bad idea at all.
            </p>
          )}
          <hr className="faq-border" />
        </div> */}
        <div>
          {FAQs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div className="questions-ans" key={index}>
                <span
                  id="title-ans"
                  onClick={() => showHandler(index)}
                  className="faq-question"
                >
                  <h3>{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className={`bi ${isActive ? "bi-dash-lg" : "bi-plus"}`}
                    viewBox="0 0 16 16"
                  >
                    {isActive ? (
                      <path
                        fillRule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                      />
                    ) : (
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    )}
                  </svg>
                </span>
                {isActive && <p>{faq.answer}</p>}
                <hr className="faq-border" />
              </div>
            );
          })}
        </div>

        {/*         
        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerTwo}>
            <h3>How will progress and analytics reports be shared with me?</h3>

            {hidePlusButtonTwo && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonTwo && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerTwo && (
            <p>
              Being a Unnity PPC Agency, we ensure that the teams hired will
              share the reports on a weekly/biweekly/monthly basis as per your
              needs. In fact, real-time tracking and analytics reports will also
              be shared on a regular basis to keep you updated regarding your
              campaign’s performance.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerThree}>
            <h3>What is the Standard operating procedure Unnitys follow?</h3>

            {hidePlusButtonThree && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonThree && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerThree && (
            <p>
              Talking about the SOP we follow, then it begins with hand picking
              the right resources/team for your project. Our internal team has
              tools and rating systems in place, built on the feedback given by
              our 7000+ clients to help choose the better.Upon confirmation, our
              onboarding specialist will help you set-up and introduce you to
              your team.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerFour}>
            <h3>
              Do you take any significant measures for the maintenance & safety
              of IT security and firewalls?
            </h3>

            {hidePlusButtonFour && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonFour && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerFour && (
            <p>
              At Unnitys, all of our devices are IP restricted along with
              firewall protection.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerFive}>
            <h3>What is the preferred mode of communication?</h3>

            {hidePlusButtonFive && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonFive && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerFive && (
            <p>
              Well, we always ensure to consider the client's preferences over
              ours. But, to your answer, here are some of the tools we use as a
              mode of communication.
              <br /> <br /> Email, Skype, Slack, Hangout, PMS or any other form
              of communication that is comfortable for you and the resources. We
              also encourage video calls as we believe that a face-to-face
              conversation helps a lot in understanding your business and its
              needs.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerSix}>
            <h3>
              We want to know about the local time-zone support. Do you provide
              it? If yes -then how?
            </h3>

            {hidePlusButtonSix && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonSix && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerSix && (
            <p>
              Yes, we do provide local time-zone support. But, there will be
              some additional charges applied. Say, if you need a team to work
              on the Australian or Singapore time-zone - 10% extra will be
              charged. And 20% extra for United States time-zone support.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerSeven}>
            <h3>
              Which are the popular Unnity Digital Marketing Services your
              clients prefer?
            </h3>

            {hidePlusButtonSeven && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonSeven && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerSeven && (
            <p>
              As a leading Unnity marketing agency, every service that we
              provide is appreciated. But, to name them, these are the white
              label digital marketing services that have gained popularity and
              appreciation.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerEight}>
            <h3>
              What is the experience you hold when it comes to working with
              agencies?
            </h3>

            {hidePlusButtonEight && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonEight && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerEight && (
            <p>
              We are recognized as a trustworthy Unnity PPC agency and Unnity
              SEO for Agencies. Our experience talks about our capabilities to
              work with 500+ agencies across 52 nations worldwide when it comes
              to outsourcing Unnity Marketing Services.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerNine}>
            <h3>
              Do I get a referral bonus if I refer your agency to someone and
              they end up choosing your Unnity Services?
            </h3>

            {hidePlusButtonNine && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonNine && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerNine && (
            <p>
              Yes, yes you surely do get a bonus when you refer us to others.
              That’s how we love to push our journey of growth ahead! So, if
              someone is in need of any services - be it Unnity SEO Services for
              Agencies, Unnity PPC services or other marketing services, we are
              happy to help.
            </p>
          )}
          <hr className="faq-border" />
        </div>

        <div className="questions-ans">
          <span id="title-ans" onClick={showHandlerTen}>
            <h3>
              Do you sign the NDA documents before the project kickstarts?
            </h3>

            {hidePlusButtonTen && (
              <svg
                id="plus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            )}

            {showMinusButtonTen && (
              <svg
                id="minus"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            )}
          </span>

          {showAnswerTen && (
            <p>
              Being a Unnity Digital Marketing Agency, NDAs are the first and
              foremost documentation that is being taken care of. We do sign
              NDAs and adhere to it, strictly!
            </p>
          )}
          <hr className="faq-border" />
        </div> */}
      </section>

      <footer>
        <div className="footer-logo">
          <Image
            src="/check.png"
            width={0}
            height={0}
            alt="logo-image"
            unoptimized
            style={{ width: "150px", height: "85px" }}
          ></Image>
        </div>
        <div className="footer-text">
          <span className="footer-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <h6>Phone No - +91 93150 03754</h6>
          </span>
          <span className="footer-email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <h6>Email Id : sayam@unnity.in</h6>
          </span>
          <span className="footer-address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <h6>
              Address : SF-40 2nd Floor, Pearl Omaxe, Netaji Subhash Place,
              Pitampura, New Delhi - 110034
            </h6>
          </span>
        </div>

        <div className="form-boottom">
          <div className="footer-services">
            <h4>Services</h4>
            <li>SEO</li>
            <li>Gogle Ads</li>
            <li>Meta Ads</li>
            <li>UI/UX</li>
            <li>Website Devlopment</li>
            <li>Brand Consult</li>
          </div>
          <div className="follow-us">
            <h4>Follow Us</h4>
            <Link href="https://www.instagram.com/_unnity/">
              <span id="insta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <h6>Instagram</h6>
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/sayam-jain-2708031b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span id="linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <h6>Linkedin</h6>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
