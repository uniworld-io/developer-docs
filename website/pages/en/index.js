/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Uni Helper" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="uni-header">
          <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
          <div className="wrapper">
            <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
            <p>Docusaurus makes it easy to maintain Open Source documentation websites.</p>
            <PromoSection>
              <Button href={docUrl('welcome.html')}>Knowledge</Button>
              <Button href={docUrl('fullNodeAPI.html')}>API Docs</Button>
              <Button href="help.html">Need Help</Button>
            </PromoSection>
          </div>
        </div>
        <div className="unw-news">
          <div className="wrapper">
            <h2>Latest Developer Blog Posts</h2>
            <div className="x-row cards-3">
              <a href="#" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/news-1.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>Feature Flags in Node Express</h5>
                      <p>Learn how to get the value of powerful feature flags by rolling out a feature customer-by-customer in Express using Optimizely Rollouts.</p>
                      <div className="btn-text-arrow-black">
                          <span>Create feature flags</span>
                      </div>
                  </div>
              </a>

              <a href="#" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/news-2.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>Integrate Full Stack APIs into your development workflow</h5>
                      <p>Key use cases for using our new Full Stack APIs to automate your experimentation and rollout strategy</p>
                      <div className="btn-text-arrow-black">
                          <span>Read More</span>
                      </div>
                  </div>
              </a>

              <a href="#" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/news-3.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>Create Feature Flags in React</h5>
                      <p>There's a safer way to rollout features to your customers. Learn how to use a feature flag system to ensure you are deploying high quality code.</p>
                      <div className="btn-text-arrow-black">
                          <span>Get Started</span>
                      </div>
                  </div>
              </a>
          </div>
          </div>
        </div>
        <div className="unw-join-us">
          <div className="wrapper">
            <h2>Join Optimizely's Global Community of Developers</h2>
            <p>Connect with other developers about feature flags, progressive delivery, and experimentation.</p>
            <div>
              <a href="#">Join the Discussion</a>
            </div>
          </div>
        </div>
        <div className="unw-partner">
          <div className="wrapper">
            <h2>Who is Using UniChain?</h2>
            <p>UniChain is building websites for these projects...</p>
            <div className="showcase">
              <a className="link" href="https://5km.social/">
                <img src="/img/5km.png" alt="5KM" title="5KM  " />
                <span className="caption">5KM</span>
              </a>
              <a className="link" href="#">
                <img src="/img/unime.png" alt="UniMe" title="UniMe" />
                <span className="caption">UniMe</span>
              </a>
              <a className="link" href="#">
                <img src="/img/unichain.png" alt="Unichain" title="Unichain" />
                <span className="caption">UniChain</span>
              </a>
              <a className="link" href="#">
                <img src="/img/unichain.png" alt="Unichain" title="Unichain" />
                <span className="caption">UniChain</span>
              </a>
              <a className="link" href="#">
                <img src="/img/unichain.png" alt="Unichain" title="Unichain" />
                <span className="caption">UniChain</span>
              </a>
            </div>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;