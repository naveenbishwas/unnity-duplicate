import React from "react";
import "./home-appliances.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="main-container">
      <section className="section-one">
        <div className="section-one-df">
          <div className="section-one-left">
            <h1>Case Study: of India largest home-appliance brand</h1>
            <p>
              Mission to dominate the digital advertising space through Google
              Ads. The journey began with scaling efforts, but the initial
              performance did not meet expectations. A deep dive into the
              campaign structures and budget management was initiated to
              pinpoint the underlying issues and rectify them for improved
              results.
            </p>
            <p>
              Through meticulous analysis and strategic restructuring, Home
              appliances India's advertising campaigns were transformed. This
              case study explores the challenges faced, the innovative solutions
              implemented, and the remarkable outcomes achieved in their quest
              for ecommerce excellence
            </p>
          </div>
          <div className="section-one-right">
            <Image
              src="/home11.jpg"
              alt=""
              width={0}
              height={0}
              unoptimized
            ></Image>
          </div>
        </div>
      </section>

      <section className="section-two">
        <h1>Initial Scaling Efforts</h1>
        <p>
          The initial phase of the campaign focused on scaling up the ads.
          However, the performance was not aligning with the set benchmarks,
          leading to a comprehensive review of the campaign strategies.
        </p>

        <div className="scaling-attempt">
          <div className="scaling-attempt-left">
            <div className="scaling-attempt-left-center">1</div>
            <div className="scaling-attempt-left-right"></div>
          </div>
          <div className="scaling-attempt-right">
            <h3>Scaling Attempts</h3>
            <p>
              Efforts to amplify the reach and impact of the ads were met with
              subpar performance, necessitating a reevaluation of tactics.
            </p>
          </div>
        </div>

        <div className="performance-analysis">
          <div className="performance-analysis-left">
            <div className="performance-analysis-left-center">2</div>
            <div className="performance-analysis-left-right"></div>
          </div>
          <div className="performance-analysis-right">
            <h3>Performance Analysis</h3>
            <p>
              An in-depth analysis was conducted to understand the reasons
              behind the lackluster results, revealing the need for a more
              targeted approach.
            </p>
          </div>
        </div>

        <div className="strategy-over">
          <div className="strategy-over-left">
            <div className="strategy-over-left-center">3</div>
            <div className="strategy-over-left-right"></div>
          </div>
          <div className="strategy-over-right">
            <h3>Strategy Overhaul</h3>
            <p>
              A strategic overhaul was imperative to address the issues and
              steer the campaigns towards the desired outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="converstion-image">
          <Image
            src={"/background-home.jpg"}
            alt="conversation-image"
            width={100}
            height={100}
            unoptimized
          ></Image>

          <div className="converstion-background"></div>
          <div className="coversation-text">
            <div className="conversion-rate1-header">
              <h1>Conversion Rate Challenges</h1>
              <p>
                The team delved into the intricacies of the campaigns to uncover
                the reasons behind the low conversion rates. This investigation
                was critical to identify and address the root causes of the
                problem.
              </p>
            </div>

            <div className="deep-analyse">
              <div className="deep-analyse-left">
                <div className="triangle-up"></div>
                <h4>1</h4>
                <div className="triangle-down"></div>
              </div>
              <div className="deep-analyse-right">
                <h1>Deep Analysis</h1>
                <p>
                  An exhaustive analysis was conducted to understand the factors
                  contributing to the low conversion rates.
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
                <h1>Pinpointing Issues</h1>
                <p>
                  The issue of Pincodes emerged as a significant barrier, with a
                  vast product range and limited availability across locations.
                </p>
              </div>
            </div>

            <div className="deep-analyse">
              <div className="deep-analyse-left" id="complex">
                <div className="triangle-up"></div>
                <h4>3</h4>
                <div className="triangle-down"></div>
              </div>
              <div className="deep-analyse-right">
                <h1>Complexity of Delivery</h1>
                <p>
                  The complexity of managing deliveries for over 2,000 products
                  across various Pincodes was a daunting task that required a
                  strategic solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="restructuring-header">
          <h1>Restructuring Campaigns</h1>
          <p>
            With a determination to optimize performance, multiple campaign
            structures were tested. The goal was to find the sweet spot that
            would prevent budget leakages and maximize returns.
          </p>
        </div>
        <div className="restructuring-camp-df">
          <div className="experimentation">
            <h1>Experimentation</h1>
            <p>
              Various campaign structures were trialed, searching for the most
              effective way to reach potential customers without overspending.
            </p>
          </div>
          <div className="bud-management">
            <h1>Budget Management</h1>
            <p>
              Close attention was paid to budget allocation, ensuring that funds
              were directed towards the most promising campaigns.
            </p>
          </div>
          <div className="experimentation">
            <h1>Performance Tracking</h1>
            <p>
              Continuous tracking of campaign performance allowed for quick
              adjustments and fine-tuning to avoid any wastage of resources.
            </p>
          </div>
        </div>
      </section>

      <section className="section-five">
        <div className="revamping-header">
          <h1>Revamping Delivery Methods</h1>
          <p>
            The internal delivery method was dissected and restructured to align
            with the advertising strategy. With nine warehouses across India, a
            tailored approach was necessary to ensure efficient product
            delivery.
          </p>
        </div>
        <div className="revamping-df">
          <div className="delivery-breakdown">
            <h1>Delivery Breakdown</h1>
            <p>
              The existing delivery method was broken down to its core to
              understand the logistics and streamline the process.
            </p>
          </div>
          <div className="warehouse">
            <h1>Warehouse Integration</h1>
            <p>
              Each of the nine warehouses was integrated into the ad strategy,
              allowing for specific product delivery from the nearest location.
            </p>
          </div>
          <div className="delivery-breakdown">
            <h1>Efficiency Boost</h1>
            <p>
              This restructuring led to a more efficient delivery system,
              directly impacting the customer experience and conversion rates.
            </p>
          </div>
        </div>
      </section>

      <div className="section-image">
        <Image
          src={"/home6.png"}
          alt="image"
          width={100}
          height={100}
          unoptimized
        ></Image>
      </div>

      <section className="section-six">
        <div className="implementing-header">
          <h1>Implementing Autotag Technology</h1>
          <p>
            Autotag technology was identified as a tool to bridge the gap
            between ad interactions and product availability. The development
            team played a crucial role in integrating this solution.
          </p>
        </div>
        <div className="implementing-df">
          <div className="autotag">
            <div className="autotag-left">1</div>
            <div className="autotag-right">
              <h1>Autotag Integration</h1>
              <p>
                The Autotag tool was seamlessly integrated, prompting users for
                their Pincode upon website interaction.
              </p>
            </div>
          </div>
          <div className="autotag" id="pincode-spec">
            <div className="autotag-left">2</div>
            <div className="autotag-right">
              <h1>Pincode Specific Display</h1>
              <p>
                Products available in the user's location were dynamically
                displayed, enhancing the relevance of the website's offerings
              </p>
            </div>
          </div>
          <div className="autotag">
            <div className="autotag-left">3</div>
            <div className="autotag-right">
              <h1>Conversion Uplift</h1>
              <p>
                This targeted approach led to a significant increase in
                conversion rates, as users were presented with deliverable
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-seven">
        <div className="custome-header">
          <h1>Custom Labels and Inventory Management</h1>
          <p>
            Custom labels were created to sync with the inventory updates,
            allowing for a dynamic and responsive ad campaign that reflected
            real-time product availability.
          </p>
        </div>

        <div className="custome-label">
          <h3>Custom Label Creation</h3>
          <p>
            Labels were tailored to match inventory specifics, ensuring accurate
            ad representation.
          </p>
        </div>
        <div className="automatic-label">
          <h3>Automatic Updates</h3>
          <p>
            As inventory levels changed, the custom labels were automatically
            updated to maintain consistency.
          </p>
        </div>
        <div className="custome-label" id="focused">
          <h3>Conversion-Focused Campaigns</h3>
          <p>
            The integration of custom labels allowed for more targeted
            campaigns, driving conversions.
          </p>
        </div>
      </section>

      <section className="section-eight">
        <div className="outcome">
          <h1>Outcome: Enhanced Ad Delivery</h1>
          <p>
            The culmination of these efforts resulted in ads being displayed
            only in locations where delivery was available, ensuring maximum
            relevance and efficiency.
          </p>
        </div>

        <div className="outcome-df">
          <div className="revenue">
            <h1>86%</h1>
            <h3>Increased Revenue</h3>
            <p>
              Revenue increased from the cities where we are targeting. Instock
              products reflected in cities targeted now
            </p>
          </div>

          <div className="cr">
            <h1>44%</h1>
            <h3>Increased Conversion Rate</h3>
            <p>
              Increase in conversion rate drastically reason being products
              reflected
            </p>
          </div>

          <div className="revenue">
            <h1>91%</h1>
            <h3>Increased in Orders</h3>
            <p>
              Orders increased that helped supported organically and for the ads
              purpose as well
            </p>
          </div>
        </div>
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
