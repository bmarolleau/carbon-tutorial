import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Get Started with IBM Cloud, Node-RED and Watson
          </h1>
        </div>
      </div>

      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Welcome">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      Welcome to the IBM Cloud and Watson Day website
                    </h2>
                    <p className="landing-page__p">
                      On this page : Docs, Labs, Demonstrations, Cloud
                      Computing, DevOps, Prototyping...
                    </p>
                    <Button target="_blank" href="https://cloud.ibm.com">
                      Connect to IBM Cloud
                    </Button>
                  </div>

                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Lab 1">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      Lab 1 - Create an Internet of Things Platform starter
                      application
                    </h2>
                    <p className="landing-page__p">
                      Learn how to create a Node-RED and Watson IoT Platform
                      starter application to connect IoT devices to the Watson
                      IoT Platform
                    </p>
                    <Button
                      target="_blank"
                      href="https://developer.ibm.com/tutorials/how-to-create-an-internet-of-things-platform-starter-application/"
                      kind="secondary">
                      {' '}
                      Learn more{' '}
                    </Button>
                  </div>

                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Lab 2">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      Lab 2 - Predict equipment failure using IoT sensor data
                    </h2>
                    <p className="landing-page__p">
                      Walk through a prediction methodology that utilizes
                      multivariate IoT data to collect sensor values and run
                      algorithms{' '}
                    </p>
                    <Button
                      target="_blank"
                      href="https://developer.ibm.com/patterns/predict-equipment-failure-using-iot-sensor-data/#instructions"
                      kind="secondary">
                      {' '}
                      Learn more{' '}
                    </Button>
                  </div>

                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Docs/Misc Labs">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__illo">Labs</h2>
                    <h2 className="landing-page__p">
                      {} Various Labs on this Box folder:{' '}
                      <a
                        target="_blank"
                        href="https://ibm.box.com/v/ibmcloud-watson-day-legacy">
                        ibmcloud-watson-day-legacy
                      </a>
                    </h2>
                    <h2 className="landing-page__illo">
                      {} Want to know more?
                    </h2>
                    <h2 className="landing-page__p">
                      Please refer to this{' '}
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=HzugDzl2cfg">
                        IBM Cloud Introduction
                      </a>
                      {} video or this Node-RED introduction on{' '}
                      <a
                        target="_blank"
                        href="https://developer.ibm.com/components/node-red/">
                        IBM Developer
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Contacts">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__p">
                      <p>Please contact Benoit Marolleau </p>
                      <a
                        target="_blank"
                        href="https://developer.ibm.com/profiles/benoit.marolleau/">
                        benoit.marolleau@fr.ibm.com
                      </a>
                    </h2>
                    <h2 className="landing-page__p">
                      <p>More content on Benoit's Blog </p>
                      <a target="_blank" href="https://bmarolleau.github.io/">
                        bmarolleau.github.io
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">
            IBM Client Engineering EMEA - IBM Montpellier
          </h3>
        </div>
        {/* <div className="bx--col-md-4 bx--col-lg-4">IBM Client Engineering EMEA</div>
        <div className="bx--col-md-4 bx--col-lg-4"></div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div> */}
      </div>
    </div>
  );
};

export default LandingPage;
