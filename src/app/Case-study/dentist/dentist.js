import React from "react";
import "./dentist.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="main-container">
      <section className="section-one">
        <div className="section-one-df">
          <div className="section-one-left">
            <h1>Dentistry Digital Marketing Overhaul</h1>
            <p>
              Welcome to a comprehensive overview of transforming a large
              dentistry chain's digital marketing strategy. Through meticulous
              analysis, strategic restructuring, and skillful execution, we
              confronted the challenges head-on and leveraged opportunities to
              enhance campaign performance and brand presence in the dental
              industry.
            </p>
            <p>
              Join us as we delve into the challenges faced, strategies
              formulated, and impressive results achieved in this marketing
              success story. Our journey maps the meticulous processes required
              in campaign management, landing page optimization, and
              cost-efficient customer acquisition in the competitive space of
              dentistry services.
            </p>
          </div>
          <div className="section-one-right">
            <Image
              src="/dentist-case.png"
              alt=""
              width={300}
              height={550}
              unoptimized
              priority
            ></Image>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="implementing-header">
          <h1>Initial Challenges Faced</h1>
        </div>
        <div className="implementing-df">
          <div className="autotag">
            <div className="autotag-left">1</div>
            <div className="autotag-right">
              <h1>Complex Campaigns</h1>
              <p>
                Managing over 200 individual campaigns under a single ad account
                presented a significant challenge due to its complexity and the
                requirement for a refined approach to campaign structuring
              </p>
            </div>
          </div>
          <div className="autotag" id="pincode-spec">
            <div className="autotag-left">2</div>
            <div className="autotag-right">
              <h1>Account Hygiene</h1>
              <p>
                Lack of proper account hygiene, reflected in stagnant ad copies
                and an accumulation of irrelevant and high CPC keywords, was
                crippling the campaign's cost-efficiency.
              </p>
            </div>
          </div>
          <div className="autotag" id="section-two-three">
            <div className="autotag-left">3</div>
            <div className="autotag-right">
              <h1>Inconsistent Events</h1>
              <p>
                The campaign suffered from multiple conversion events being
                created with irregular event triggers, leading to unreliable
                conversion tracking.
              </p>
            </div>
          </div>

          <div className="autotag" id="section-two-four">
            <div className="autotag-left">4</div>
            <div className="autotag-right">
              <h1>Multiple Landing Pages to manage</h1>
              <p>
                The enormity of managing over 200+ promotion-tied landing pages
                added to the complexity and reduced overall campaign
                effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="section-three-image">
          <Image
            src="/dent-pic-one.jpg"
            alt="dent-pic"
            width={0}
            height={0}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className="section-three-color"></div>

        <div className="section-three-text">
          <h1>Cataloging the Marketing Goals</h1>

          <div className="scaling-attempt">
            <div className="scaling-attempt-left">
              <div className="scaling-attempt-left-center">1</div>
              <div className="scaling-attempt-left-right"></div>
            </div>
            <div className="scaling-attempt-right">
              <h3>Data-Driven Decisions</h3>
              <p>
                Better data clarity took precedence to enable optimized campaign
                performance based on concrete analytics. Enhancing account
                hygiene was the foundational goal.
              </p>
            </div>
          </div>

          <div className="performance-analysis">
            <div className="performance-analysis-left">
              <div className="performance-analysis-left-center">2</div>
              <div className="performance-analysis-left-right"></div>
            </div>
            <div className="performance-analysis-right">
              <h3>Nomenclature Precision</h3>
              <p>
                Improving the campaign nomenclature to enable refined analysis
                and filters was fundamental for achieving a streamlined
                workflow.
              </p>
            </div>
          </div>

          <div className="strategy-over">
            <div className="strategy-over-left">
              <div className="strategy-over-left-center">3</div>
              <div className="strategy-over-left-right"></div>
            </div>
            <div className="strategy-over-right">
              <h3>Correct Landing Pages</h3>
              <p>
                Ensuring accurate alignment of landing pages to their
                corresponding city campaigns to avoid visitor misdirection and
                enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="restructuring-header">
          <h1>Strategic Splitting of Campaigns</h1>
        </div>
        <div className="restructuring-camp-df">
          <div className="experimentation">
            <h1>Category Specification</h1>
            <p>
              Campaigns were strategically segregated into three main
              categories: General Dentistry, Implants, and Ortho (Aligners &
              Braces), leading to more targeted advertising and clearer
              performance metrics.
            </p>
          </div>
          <div className="bud-management">
            <h1>Lead Segmentation</h1>
            <p>
              By initiating separate lead recordings for each campaign category,
              we were able to precisely track and analyze the lead flow and
              customer interest in each dental service.
            </p>
          </div>
          <div className="experimentation">
            <h1>UTM Tracking</h1>
            <p>
              The implementation of uniform UTM parameters across campaigns
              enabled accurate traffic sourcing, facilitating in-depth campaign
              analysis and optimizing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-five">
        <div className="conversion-rate1-header">
          <h1>Efficient Execution & Monitoring</h1>
        </div>

        <div className="performance-df">
          <div className="deep-analyse">
            <div className="deep-analyse-left" id="deep-first">
              <div className="triangle-up"></div>
              <h4>1</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Strategic Planning</h1>
              <p>
                Significant efforts were invested in strategizing before
                implementation, ensuring that any modifications to the expansive
                array of campaigns did not adversely affect performance.
              </p>
            </div>
          </div>

          <div className="deep-analyse">
            <div className="deep-analyse-left" id="pinpoint">
              <div className="triangle-up"></div>
              <h4>2</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Page Management</h1>
              <p>
                Our collaborative team approach resulted in the consolidation of
                landing pages - from 200 to 6 - dynamically updated based on UTM
                parameters, significantly simplifying page management.
              </p>
            </div>
          </div>

          <div className="deep-analyse" id="deep-last">
            <div className="deep-analyse-left" id="complex">
              <div className="triangle-up"></div>
              <h4>3</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Zone-Based Approach</h1>
              <p>
                The division of campaigns into North and South zones based on
                clinic locations provided essential insights for regional
                performance management and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="strategy">
        <Image
          src={"/dentist-case.webp"}
          alt="strategy"
          width={100}
          height={100}
          unoptimized
        ></Image>
      </div>

      <section className="section-six">
        <div className="revamping-header">
          <h1>Optimizing Landing Pages</h1>
        </div>
        <div className="revamping-df" id="revamping-color">
          <div className="delivery-breakdown">
            <h1>Collective Improvements</h1>
            <p>
              Fostering team collaboration led to a considerable enhancement in
              landing page experiences, focusing on user-oriented UI/UX design
              informed by marketing expertise.
            </p>
          </div>
          <div className="warehouse">
            <h1>Keyword Refinement</h1>
            <p>
              Removing overlapping and cannibalizing keywords streamlined
              campaigns, preventing internal competition and waste of ad spend.
            </p>
          </div>
          <div className="delivery-breakdown">
            <h1>Placement Precision</h1>
            <p>
              Negative placements were meticulously curated to reduce irrelevant
              traffic and to focus the budget on reaching the intended audience
              more effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="section-seven">
        <div className="sealing-header">
          <h1>Impressive Campaign Outcomes</h1>
        </div>
        <div className="sealing-df">
          <div className="initial">
            <h1>25%</h1>
            <h3>CTR Boost</h3>
            <p>
              Click-through rates surged by a notable 25%, demonstrating
              enhanced ad relevancy and audience engagement.
            </p>
          </div>
          <div className="scaled">
            <h1>60%</h1>
            <h3>Conversions</h3>
            <p>
              Lead conversions experienced a remarkable 60% increase, signaling
              effective campaign targeting and improved lead quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-eight">
        <div className="custome-header">
          <h1>Cost Per Clinic Visit</h1>
        </div>

        <div className="custome-label">
          <h3>Cost Per Clinic Visit</h3>
          <p>Rs 600-800</p>
        </div>
        <div className="automatic-label">
          <h3>Lead Calls Increase</h3>
          <p>68%</p>
        </div>
        <div className="custome-label" id="focused">
          <h3>Quality Leads Tracking</h3>
          <p>93%</p>
        </div>
        <p id="eight-last">
          The strategic overhaul not only heightened the marketing performances
          but also drastically diminished the cost of acquiring new clients —
          achieving a cost-effective footfall to the clinics ranging between Rs
          600-800. This judicious approach to client acquisition marked a
          significant milestone in the campaign's success narrative.
        </p>
      </section>

      <section id="case" className="lets-started">
        <div className="start-left">
          <Image
            src="/call.png"
            alt="call"
            width={100}
            height={100}
            unoptimized
          ></Image>
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
              <a href="mailto:sayam.unnity@gmail.com">
                <button id="btn-second">Send a Email</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
