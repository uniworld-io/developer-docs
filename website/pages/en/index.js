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
            <PromoSection>
              <Button href={docUrl('welcome.html')}>Knowledge</Button>
              <Button href={docUrl('fullNodeAPI.html')}>API Docs</Button>
              <Button href={docUrl('tutorials.html')}>Tutorials</Button>
              <Button href="/asset/Unichain-whitepaper-v2.pdf">White Paper</Button>
              <Button href={docUrl('help.html')}>Need Help</Button>
            </PromoSection>
          </div>
        </div>
        <div className="unw-news">
          <div className="wrapper">
            <h2>Popular eveloper Blog Posts</h2>
            <div className="x-row cards-3">
              <a href="https://medium.com/uniworld-io/unichain-for-decentralized-finance-dc016ca50937" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/unichain-defi.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>UniChain for Decentralized Finance</h5>
                      <p>Decentralized Finance or Defi is a movement of the financial sector that leverage decentralized technologies, particularly blockchain networks</p>
                      <div className="btn-text-arrow-black">
                          <span>Read more</span>
                      </div>
                  </div>
              </a>

              <a href="https://medium.com/uniworld-io/unichains-dpos-hotstuff-consensus-algorithm-9b165100f9e4" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/unichain-consensus.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>UniChain’s DPOS-Hotstuff consensus algorithm</h5>
                      <p>DPOS is a success consensus algorithm in many famous blockchain platforms including EOS, Bitshare, Lisk … while Hotstuff is recently used in Facebook Libra project</p>
                      <div className="btn-text-arrow-black">
                          <span>Read More</span>
                      </div>
                  </div>
              </a>

              <a href="https://medium.com/uniworld-io/how-unime-implement-the-secured-end-to-end-chat-app-703305916ad7" target="_blank" className="x-card ">
                  <figure className="x-card-top">
                      <div style={{ backgroundImage: `url(/img/unime-architect.png)` }}></div>
                  </figure>
                  <div className="x-card-body">
                      <h5>How UniMe implement the secured end-to-end chat app</h5>
                      <p>UniMe is a universal secured chat app and AI Chatbot/Blockchain hub. This is one of the Uniworld’s applications that provides an easy way for end-users to interact with Uniworld’s ecosystem</p>
                      <div className="btn-text-arrow-black">
                          <span>Read more</span>
                      </div>
                  </div>
              </a>
          </div>
          </div>
        </div>
        <div className="unw-join-us">
          <div className="wrapper">
            <h2>Join UniChain's Global Community of Developers</h2>
            <p>Connect with other developers about feature flags, progressive delivery, and experimentation.</p>
            <div>
              <a href="#">Join the Discussion</a>
            </div>
          </div>
        </div>
        {/* <div className="unw-partner">
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
        </div> */}
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