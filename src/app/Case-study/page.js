import React from "react";
import "./case-studies.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="case-study-conatiner">
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
            <Link href="/connect">
              <button className="animate__animated animate__bounceIn">
                Contact
              </button>
            </Link>

            <div className="number">
              <a href="#connect">
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
      </div>
    </>
  );
};

export default page;
