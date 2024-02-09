import React from "react";
import "./case-studies.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="case-study-conatiner">
        <section className="add-navbar">
          <a href="/">
            <div className="logo">
              <Image
                src="/check.png"
                width={90}
                height={75}
                alt="logo-image"
                unoptimized
              ></Image>
            </div>
          </a>

          <div className="contact-btn">
            <a href="/#connect">
              <button className="animate__animated animate__bounceIn">
                Contact
              </button>
            </a>

            <div className="number">
              <a href="/#connect">
                <h4>+91 93150 03754</h4>
              </a>
            </div>
          </div>
        </section>
        <section className="challenge">
          <div className="challenge-header">
            <h1>The Challenge</h1>
          </div>
          <div className="challenge-df">
            <div className="challenge-image">
              <Image
                src="/girl-happy.jpg"
                width={100}
                height={100}
                alt="logo-image"
                unoptimized
              ></Image>
            </div>
          </div>

          <div className="challenge-text-df">
            <div className="challenge-text">
              <div className="puzzle">
                <Image
                  src="/puzzle.png"
                  width={100}
                  height={100}
                  alt="logo-image"
                  unoptimized
                ></Image>
              </div>

              <div className="color-line-df">
                <div className="color-line"></div>
              </div>

              <ul>
                <li>
                  Complex Campaign Structuring and managing more than 200+
                  campaigns under single ad account
                </li>
                <li>
                  No Account Hygiene maintain in terms of Improving the adcopies
                  and negating the high CPC and irrelevant keywords
                </li>
                <li>
                  Multiple Conversion Events created and not proper firing of
                  events
                </li>
                <li>
                  More than 200+ landing pages to be managed on promotion ads
                  was complex task
                </li>
                <li>
                  Poor Landing Page Experience(Below Average) & Low Keyword
                  Quality{"(<5)"} resulting in poor results across the accounts
                  based on google ads data was identified
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="goals">
          <div className="goal-image">
            <Image
              src="/dent-pic-two.jpg"
              width={50}
              height={85}
              alt="logo-image"
              unoptimized
            ></Image>
          </div>

          <div className="goal-opacity"></div>

          <div className="goal-text">
            <div className="goal-header">
              <h1>Goals in the Dentistry Category</h1>
            </div>
            <div className="goal-df">
              <div id="goal-line-one"></div>
              <div id="goal-line-two"></div>
              <ul id="goals-point">
                <li>
                  <div className="goal-color-box"></div>
                  <p>
                    Top Level was definitely increasing conversions. But the
                    priority was better data clarity in terms of the performance
                    of the campaigns and based on that optimizing campaigns
                    better
                  </p>
                  <ul id="bottom-points">
                    <p>Initial process was to maintain hygiene.</p>
                    <li>
                      First thing was to rectify the nomenclature that makes
                      analysis of the campaigns better through filter
                    </li>
                    <li>Wrong Landing Pages across the cities in the ads</li>
                    <li>
                      UTM parameters across all the campaigns were updated
                    </li>
                    <li>
                      Removed keywords from campaigns to avoid keyword
                      cannibalization across the account
                    </li>
                    <li>
                      Placement Negation with irrelevant traffic that was
                      generated
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="goal-color-box"></div>
                  <p>
                    Splitted campaigns into 3 main different categories 1{")"}
                    {""} General Dentistry 2{")"} Implants 3{")"} Ortho
                    (Aligners & Braces)
                  </p>
                </li>
                <li>
                  <div className="goal-color-box"></div>
                  <p>
                    Started recording separate leads for these campaigns to
                    check the lead flow of each category.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="strategy-execution">
          <div className="strategy-header">
            <h1>STRATEGY AND EXECUTION</h1>
          </div>

          <div className="strategy-df">
            <div className="strategy-image">
              <Image
                src="/girl-happy2.jpg"
                width={100}
                height={100}
                alt="logo-image"
                unoptimized
              ></Image>
            </div>
          </div>

          <div className="strategy-text">
            <div className="str-text-img">
              <Image
                src="/idea.png"
                width={80}
                height={145}
                alt="logo-image"
                unoptimized
              ></Image>
            </div>
            <div className="st-color-line-df">
              <div id="strategy-color"></div>
            </div>
            <li>
              Initially most of the time was consumed in creating plan before
              getting things executed. Since there were 200 campaigns and any
              change without any strategy can result in negative performance
              across the account
            </li>
            <li>
              <b>Efficient Management of Pages</b> - Collaboratively worked with
              the team and instead of managing 200 landing pages 6 pages were
              only created which automatically updated based on the UTM
              parameters.
            </li>
            <li>
              Since the campaigns were running city specific wherever the
              clinics were based. The campaigns were divided in two zones- North
              & South. To view the top level data it gave us a clarity how to
              manage it
            </li>
            <li>
              Team Effort Taken to improve the landing page experience in terms
              of UI/UX. Involved the expertise and the performance marketer
              learnings based on
            </li>
          </div>
        </section>

        <section className="result">
          <div className="result-image">
            <Image
              src="/dent-pic-seven.webp"
              width={100}
              height={100}
              alt="logo-image"
              unoptimized
              // layout="fill"
            ></Image>
          </div>
          <div className="result-opacity"></div>

          <div className="result-text">
            <div className="result-text-left">
              <h1>
                the <br />
                <span id="result-w">Result</span>
              </h1>
            </div>
            <div className="result-text-right">
              <ul>
                <li>Increase CTR by 25%</li>
                <li>
                  Massive Increase in the Lead calls received on the landing
                  page
                </li>
                <li>Conversions increased by 60%</li>
                <li>
                  Rs 600-800 cost of footfall to the clinic for all the
                  treatment
                </li>
                <li>
                  Quality Leads Identified from which campaigns are being
                  received
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="lets-started">
          <div className="start-left">
            <img src="/call.png" alt="" />
          </div>
          <div className="start-right">
            <div className="right-header">
              <h1>Let's get Started</h1>
              <p>
                Schedule a call at your convenience time to help us understand
                your brand, vision & expectations.
              </p>
              <div className="call-btn">
                <a href="https://calendly.com/sayam-unnity/30min">
                  <button id="btn-first">Schedule A Call</button>
                </a>
                <a href="mailto:naveenbishwas4@gmail.com">
                  <button id="btn-second">Send a Email</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="address">
            <div className="footer-logo">
              <Image
                src="/check.png"
                width={150}
                height={85}
                alt="logo-image"
                unoptimized
              ></Image>
            </div>
            <div className="footer-text">
              <span className="footer-phone">
                <h6>Phone No - 93150 03754</h6>
              </span>
              <span className="footer-email">
                <h6>Email Address: sayam@unnity.in</h6>
              </span>
            </div>
          </div>
          <div className="social">
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
              <span id="twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                <h6>Twitter</h6>
              </span>
              <span id="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <h6>Facebook</h6>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default page;
