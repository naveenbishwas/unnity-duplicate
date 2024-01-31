"use client";

import "animate.css";
import ReactPlayer from "react-player";
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        id="change-color"
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
  return (
    <div className="main-container">
      <header>
        <section className="add-navbar">
          <div className="logo">
            <Image
              src="/check.png"
              width={90}
              height={75}
              alt="logo-image"
              unoptimized
            ></Image>
          </div>

          <div className="contact-btn">
            <a href="#connect">
              <button className="animate__animated animate__bounceIn">
                Contact
              </button>
            </a>
          </div>
        </section>

        <section className="banner">
          <Image
            src="/target.png"
            width={100}
            height={700}
            alt="Banner-img"
            unoptimized
          ></Image>
        </section>
      </header>

      <section className="intro">
        <div className="intro-wrap">
          <div className="intro-df">
            <div className="intro-upper-part" id="connect">
              <div className="intro-heading">
                <h1>
                  Empower Your Brand with <br />
                  <span className="brand-name">
                    {""} Unnity Digital Marketing Solutions
                  </span>
                </h1>
              </div>
              <div className="intro-desc">
                <p>
                  At Unnity, we empower brands to thrive in the digital age. Our
                  comprehensive suite of digital marketing solutions is designed
                  to amplify your online visibility, engage your audience, and
                  drive meaningful conversions. Unleash the full potential of
                  your brand with Unnity.
                </p>
              </div>
            </div>
            <div className="intro-bottom-part">
              <div className="intro-bottom-part-left">
                <Image
                  src="/Blue-Modern.png"
                  width={550}
                  height={650}
                  alt="digi-img"
                  unoptimized
                ></Image>
              </div>
              <div className="intro-bottom-part-right">
                <form action="" className="contact-form needs-validation">
                  <div className="was-validated">
                    <input
                      type="text"
                      name=""
                      id="company-name"
                      placeholder="Company Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Company Name
                    </div>
                  </div>
                  <div className="was-validated">
                    <select required name="budget" id="budget">
                      <option value="">Monthly Marketing Budget</option>
                      <option value="">Less Than Rs 2L Budget</option>
                      <option value="">Rs 2L to Rs 5L</option>
                      <option value="">Rs 5L to Rs 25L</option>
                      <option value="">More Than 50L</option>
                      <option value="">
                        I am Looking For Organic Services
                      </option>
                    </select>
                    <div className="invalid-feedback">
                      Please Select Your Budget
                    </div>
                  </div>
                  <div className="was-validated">
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Your Name
                    </div>
                  </div>
                  <div className="was-validated">
                    <input
                      type="tel"
                      name=""
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Phone Number
                    </div>
                  </div>
                  <div className="was-validated">
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Email Adress
                    </div>
                  </div>
                  <div className="was-validated">
                    <select required name="service" id="service">
                      <option value="">Choose The Service</option>
                      <option value="">SEO & Content</option>
                      <option value="">Paid Search</option>
                      <option value="">MarketPlace Management</option>
                      <option value="">
                        Social Media/Influencer Marketing
                      </option>
                      <option value="">Account Based Marketing</option>
                      <option value="">Programmatic Ads</option>
                      <option value="">CRO & Marketing Automation</option>
                      <option value="">Website Design & Development</option>
                      <option value="">Creatives & Videos</option>
                      <option value="">Hyperlocal Marketing</option>
                      <option value="">Digital Marketing Services</option>
                    </select>
                    <div className="invalid-feedback">
                      Please Select Service
                    </div>
                  </div>
                  <div className="was-validated">
                    <input
                      type="text"
                      name=""
                      id="designation"
                      placeholder="Designation"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Designation
                    </div>
                  </div>

                  <div className="">
                    <input type="submit" value="Submit" id="submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="float">
              <div className="float-one">
                <h5>CPR</h5>
              </div>
              <div className="float-two">
                <h5>CPM</h5>
              </div>
              <div className="float-three">
                <h5>CTR</h5>
              </div>
              <div className="float-four">
                <h5>Cost Per Purchase</h5>
              </div>
              <div className="float-five">
                <h5>Frequency</h5>
              </div>
              <div className="float-six">
                <h5>Conversion rate</h5>
              </div>
              {/* <div className="float-seven">
                  <h5>
                    Search
                    <br /> ImpressionSearch
                    <br /> Share
                  </h5>
                </div>
                <div className="float-eight">
                  <h5>
                    Cost per
                    <br /> Add to
                    <br /> Cart
                  </h1>
                </div>
                <div className="float-nine">
                  <h1>Thumbstop Ratio</h1>
                </div>
                <div className="float-ten">
                  <h1>Recall Lift</h1>
                </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="about-unnity">
        {/* <svg
            id="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,64L34.3,96C68.6,128,137,192,206,202.7C274.3,213,343,171,411,170.7C480,171,549,213,617,197.3C685.7,181,754,107,823,80C891.4,53,960,75,1029,96C1097.1,117,1166,139,1234,128C1302.9,117,1371,75,1406,53.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg> */}
        <div className="about-unnity-df">
          <div className="about-unnity-left">
            <h1>Boost Your Business Online with Our Smart Marketing Moves</h1>
            <p>
              We're here to supercharge your brand's online presence. Our clever
              digital marketing strategies are designed to bring you more
              customers and make your business shine. Discover a new era of
              digital marketing with us. Our team combines creativity and
              strategy to bring you success in the online world. Let us be your
              digital wizards. We'll help your business get noticed, captivate
              your audience, and be the talk of the online town.
            </p>
            <button>Read More</button>
          </div>
          <div className="about-unnity-right">
            {/* <img src="/about-us-image.jpg" alt="" fill /> */}
            <Image
              src="/trans-purple.png"
              width={700}
              height={700}
              alt="digi-img-two"
              unoptimized
            ></Image>
          </div>
        </div>
        {/* <svg
            id="down-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L120,181.3C240,171,480,149,720,144C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg> */}
      </section>

      <section className="video">
        <video width="100%" height="100%" loop muted autoPlay="autoplay">
          <source src="/videoone.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="brand-we-worked">
        <div className="brand-we-worked-header">
          <h1>
            brand <span id="italic"> we </span> worked
          </h1>
        </div>

        <hr className="brand-border" />
        <div className="achievement-first" id="cupidclothig"></div>

        <div className="achievement-first" id="auravebrand"></div>

        <div className="naveen-slider">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1" id="dis-grid">
                <div className="achieve-name">
                  <svg
                    id="cupid"
                    xmlns="http://www.w3.org/2000/svg"
                    width="108"
                    height="43"
                    viewBox="0 0 108 43"
                    fill="none"
                  >
                    <path
                      d="M22.0234 2.00809C32.8219 -1.65571 40.7807 4.58535 44.3067 8.31215C44.3927 8.40303 44.3824 8.54443 44.2878 8.62639L38.3557 13.7694C38.2628 13.8499 38.1225 13.8388 38.0375 13.7499C36.9196 12.5807 35.043 12.0493 34.2113 11.9278C31.3852 11.7939 29.4429 12.8662 28.6712 13.5412C28.5783 13.6225 28.4375 13.6228 28.3459 13.54C26.6055 11.9654 23.7367 11.8045 22.4848 11.9278C18.4529 12.747 16.8245 15.6339 16.5143 16.9749C15.6785 20.1844 16.507 22.3361 17.5499 23.9631C17.5591 23.9774 17.5699 23.9905 17.5821 24.0023L28.3654 34.4138C28.451 34.4964 28.5867 34.4965 28.6724 34.4139L36.6029 26.7666C36.6841 26.6883 36.8114 26.6837 36.898 26.7561L44.93 33.4631C45.0169 33.5357 45.0379 33.6584 44.9728 33.7511C42.2834 37.5837 33.2498 44.9237 22.0234 40.9024C9.12695 36.2828 7.46859 25.2468 8.08013 19.8652C8.16167 15.4621 11.0645 5.72628 22.0234 2.00809Z"
                      fill="#F87387"
                    ></path>
                    <path
                      d="M24.1133 19.8423L28.5827 24.3583L33.0521 19.8423"
                      stroke="#2ACBD2"
                      stroke-width="11.053"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M52.8262 27.7815C51.533 27.7815 50.4221 27.5328 49.4937 27.0354C48.5652 26.538 47.8523 25.8362 47.3549 24.9298C46.8686 24.0235 46.6254 22.9624 46.6254 21.7465C46.6254 20.8402 46.7636 20.0167 47.0399 19.2762C47.3273 18.5356 47.7363 17.9001 48.2668 17.3695C48.8084 16.839 49.4605 16.4355 50.2232 16.1592C50.9969 15.8718 51.8646 15.7281 52.8262 15.7281C53.3346 15.7281 53.8596 15.7889 54.4012 15.9105C54.9539 16.0211 55.4402 16.1924 55.8602 16.4245C56.1697 16.5903 56.3853 16.8003 56.5069 17.0545C56.6284 17.3087 56.6671 17.5685 56.6229 17.8338C56.5898 18.099 56.4958 18.3367 56.3411 18.5467C56.1863 18.7567 55.9874 18.9004 55.7442 18.9777C55.501 19.0441 55.2358 19.0054 54.9484 18.8617C54.6168 18.7069 54.2852 18.5909 53.9536 18.5135C53.6331 18.4251 53.2959 18.3809 52.9422 18.3809C52.257 18.3809 51.6822 18.5135 51.218 18.7788C50.7648 19.033 50.4221 19.4088 50.19 19.9062C49.9579 20.4036 49.8419 21.017 49.8419 21.7465C49.8419 22.476 49.9579 23.095 50.19 23.6034C50.4221 24.1008 50.7648 24.4822 51.218 24.7474C51.6822 25.0017 52.257 25.1288 52.9422 25.1288C53.2296 25.1288 53.5391 25.0956 53.8707 25.0293C54.2023 24.9519 54.5284 24.8359 54.8489 24.6811C55.1805 24.5374 55.4734 24.4987 55.7276 24.5651C55.9929 24.6314 56.2029 24.764 56.3576 24.963C56.5234 25.1619 56.6284 25.394 56.6726 25.6593C56.7169 25.9135 56.6782 26.1678 56.5566 26.422C56.4461 26.6762 56.2471 26.8807 55.9597 27.0354C55.5729 27.2675 55.0921 27.4499 54.5173 27.5825C53.9536 27.7152 53.3899 27.7815 52.8262 27.7815ZM63.5113 27.7815C62.6602 27.7815 61.9086 27.6765 61.2565 27.4665C60.6044 27.2454 60.0517 26.9194 59.5986 26.4883C59.1564 26.0572 58.8193 25.5211 58.5872 24.8801C58.3661 24.2279 58.2556 23.4763 58.2556 22.6252V17.3032C58.2556 16.7948 58.3882 16.4134 58.6535 16.1592C58.9188 15.8939 59.2946 15.7613 59.7809 15.7613C60.2783 15.7613 60.6541 15.8939 60.9083 16.1592C61.1736 16.4134 61.3062 16.7948 61.3062 17.3032V22.6584C61.3062 23.5095 61.4942 24.1506 61.87 24.5816C62.2458 25.0127 62.7929 25.2282 63.5113 25.2282C64.2187 25.2282 64.7603 25.0127 65.1361 24.5816C65.5119 24.1506 65.6998 23.5095 65.6998 22.6584V17.3032C65.6998 16.7948 65.8269 16.4134 66.0812 16.1592C66.3464 15.8939 66.7222 15.7613 67.2086 15.7613C67.6949 15.7613 68.0652 15.8939 68.3194 16.1592C68.5736 16.4134 68.7007 16.7948 68.7007 17.3032V22.6252C68.7007 23.7637 68.5018 24.7198 68.1039 25.4935C67.717 26.2562 67.1367 26.8309 66.363 27.2178C65.5893 27.5936 64.6387 27.7815 63.5113 27.7815ZM72.2661 27.7483C71.7798 27.7483 71.404 27.6157 71.1387 27.3504C70.8734 27.0741 70.7408 26.6928 70.7408 26.2064V17.4524C70.7408 16.955 70.8734 16.5737 71.1387 16.3084C71.415 16.0432 71.7964 15.9105 72.2827 15.9105H76.3613C77.6876 15.9105 78.7101 16.2532 79.4285 16.9385C80.158 17.6127 80.5228 18.5467 80.5228 19.7404C80.5228 20.9341 80.158 21.8736 79.4285 22.5589C78.7101 23.2332 77.6876 23.5703 76.3613 23.5703H73.7914V26.2064C73.7914 26.6928 73.6643 27.0741 73.4101 27.3504C73.1559 27.6157 72.7746 27.7483 72.2661 27.7483ZM73.7914 21.2326H75.8307C76.4055 21.2326 76.8476 21.111 77.1571 20.8678C77.4666 20.6136 77.6213 20.2378 77.6213 19.7404C77.6213 19.232 77.4666 18.8562 77.1571 18.613C76.8476 18.3698 76.4055 18.2482 75.8307 18.2482H73.7914V21.2326ZM83.4703 27.7483C82.984 27.7483 82.6082 27.6157 82.3429 27.3504C82.0776 27.0741 81.945 26.6872 81.945 26.1899V17.3198C81.945 16.8113 82.0776 16.4245 82.3429 16.1592C82.6082 15.8939 82.984 15.7613 83.4703 15.7613C83.9677 15.7613 84.3435 15.8939 84.5977 16.1592C84.863 16.4245 84.9956 16.8113 84.9956 17.3198V26.1899C84.9956 26.6872 84.8685 27.0741 84.6143 27.3504C84.3601 27.6157 83.9787 27.7483 83.4703 27.7483ZM88.7015 27.5991C88.182 27.5991 87.7841 27.4665 87.5078 27.2012C87.2425 26.9249 87.1099 26.5325 87.1099 26.0241V17.4856C87.1099 16.9771 87.2425 16.5903 87.5078 16.325C87.7841 16.0487 88.182 15.9105 88.7015 15.9105H91.9511C93.9849 15.9105 95.5544 16.419 96.6597 17.4358C97.7761 18.4527 98.3343 19.8896 98.3343 21.7465C98.3343 22.675 98.1906 23.504 97.9032 24.2335C97.6158 24.9519 97.2013 25.5654 96.6597 26.0738C96.1181 26.5712 95.4494 26.9525 94.6536 27.2178C93.8688 27.472 92.968 27.5991 91.9511 27.5991H88.7015ZM90.1605 25.1288H91.7522C92.338 25.1288 92.8409 25.0569 93.2609 24.9132C93.692 24.7695 94.0457 24.5595 94.322 24.2832C94.6094 24.0069 94.8194 23.6587 94.952 23.2387C95.0957 22.8187 95.1676 22.3213 95.1676 21.7465C95.1676 20.597 94.8857 19.7515 94.322 19.2099C93.7583 18.6572 92.9017 18.3809 91.7522 18.3809H90.1605V25.1288Z"
                      fill="black"
                    ></path>
                    <path
                      d="M96.1445 13.022H96.8594C96.9991 13.022 97.1205 13.0428 97.2237 13.0844C97.3268 13.1259 97.4062 13.1875 97.462 13.269C97.5185 13.3505 97.5468 13.4511 97.5468 13.5709C97.5468 13.6749 97.5306 13.7618 97.4981 13.8316C97.4657 13.9015 97.4204 13.9593 97.3622 14.0051C97.3048 14.05 97.2378 14.087 97.1613 14.1161L97.0178 14.1972H96.4177L96.4153 13.8591H96.8594C96.9151 13.8591 96.9613 13.8491 96.9979 13.8291C97.0345 13.8092 97.0619 13.7809 97.0802 13.7443C97.0993 13.7069 97.1089 13.6624 97.1089 13.6108C97.1089 13.5584 97.0993 13.5135 97.0802 13.4761C97.0611 13.4387 97.0328 13.41 96.9954 13.39C96.9588 13.37 96.9134 13.3601 96.8594 13.3601H96.5824V14.8384H96.1445V13.022ZM97.1388 14.8384L96.7371 14.035L97.2012 14.0325L97.6079 14.8197V14.8384H97.1388Z"
                      fill="black"
                    ></path>
                    <circle
                      cx="96.8782"
                      cy="13.9305"
                      r="1.5252"
                      stroke="black"
                      stroke-width="0.284211"
                    ></circle>
                  </svg>
                </div>
                <div className="achieve-first-row">
                  <div className="achieve-numbers">
                    <div className="">
                      {/* <img src="/growth.png" alt="" /> */}
                      <Image
                        id="network"
                        src="/growth.png"
                        width={50}
                        height={50}
                        alt="digi"
                        unoptimized
                      ></Image>
                    </div>
                    <div className="red">
                      <h1>+71%</h1>
                    </div>
                    <div className="catego">
                      <h2>
                        Increase <span className="achieve-color">Revenue</span>{" "}
                        in Last 12 months
                      </h2>
                    </div>
                  </div>

                  <div className="achieve-numbers">
                    <div className="">
                      {/* <img src="/shopping.png" alt="" /> */}
                      <Image
                        id="network"
                        src="/shopping.png"
                        width={50}
                        height={50}
                        alt="digi"
                        unoptimized
                      ></Image>
                    </div>
                    <div className="red">
                      <h1>+60%</h1>
                    </div>
                    <div className="catego">
                      <h2>
                        Number of
                        <span className="achieve-color"> Order </span>
                        Increase
                      </h2>
                    </div>
                  </div>

                  <div className="achieve-numbers">
                    <div className="">
                      {/* <img src="/interest-rate.png" alt="" /> */}
                      <Image
                        id="network"
                        src="/interest-rate.png"
                        width={50}
                        height={50}
                        alt="digi"
                        unoptimized
                      ></Image>
                    </div>
                    <div className="red">
                      <h1>+22%</h1>
                    </div>
                    <div className="catego">
                      <h2>
                        Increase in
                        <span className="achieve-color"> Conversion Rate</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
                <div className="achievement-first" id="auravebrand">
                  <div className="achieve-name">
                    <Image
                      id="aurave"
                      src="/aurav.avif"
                      width={50}
                      height={60}
                      alt="digi"
                      unoptimized
                    ></Image>
                  </div>

                  <div className="achieve-first-row" id="aurave-row">
                    <div className="achieve-numbers">
                      <div className="">
                        {/* <img src="/growth.png" alt="" /> */}
                        <Image
                          id="network"
                          src="/growth.png"
                          width={50}
                          height={50}
                          alt="digi"
                          unoptimized
                        ></Image>
                      </div>
                      <div className="red">
                        <h1>+56%</h1>
                      </div>
                      <div className="catego">
                        <h2>
                          Increase{" "}
                          <span className="achieve-color">Revenue</span> in Last
                          6 months
                        </h2>
                      </div>
                    </div>

                    <div className="achieve-numbers">
                      <div className="">
                        <Image
                          id="network"
                          src="/shopping.png"
                          width={50}
                          height={50}
                          alt="digi"
                          unoptimized
                        ></Image>
                      </div>
                      <div className="red">
                        <h1>+86%</h1>
                      </div>
                      <div className="catego">
                        <h2>
                          Number of
                          <span className="achieve-color"> Order </span>
                          Increase
                        </h2>
                      </div>
                    </div>

                    <div className="achieve-numbers">
                      <div className="">
                        <Image
                          id="network"
                          src="/interest-rate.png"
                          width={50}
                          height={50}
                          alt="digi"
                          unoptimized
                        ></Image>
                      </div>
                      <div className="red">
                        <h1>+36%</h1>
                      </div>
                      <div className="catego">
                        <h2>
                          Increase in
                          <span className="achieve-color">
                            {" "}
                            Conversion Rate
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">3</div>
              <div className="keen-slider__slide number-slide4">4</div>
              <div className="keen-slider__slide number-slide5">5</div>
              <div className="keen-slider__slide number-slide6">6</div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
        </div>
        <hr className="brand-border" id="down" />
      </section>
    </div>
  );
}
