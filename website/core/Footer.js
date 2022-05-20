/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
        docUrl(doc, language) {
                const baseUrl = this.props.config.baseUrl;
                const docsUrl = this.props.config.docsUrl;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Uni Platforms Services</h5>
            <a target="_blank" href='https://unichain.world/'>UniChain Platform</a>
            <a target="_blank" href='https://www.botlibre.com/'>UniBot Platform</a>
            <h5 className="mt-10">Uni Applications Services</h5>
            <a target="_blank" href='https://about.unime.world/'>UniMe Hub</a>
            <a target="_blank" href='https://www.botlibre.com/'>UniBot Offline</a>
            {/* <h5 className="mt-10">Hybrid Marketing Solutions</h5>
            <a target="_blank" href='https://mia.world/'>MIA Communities</a>
            <a target="_blank" href='https://aiomo.net/'>Aiomo (comming soon)</a> */}
          </div>
          <div>
            <h5>Work inquiries</h5>
            <a href="#">Interested in working with us?</a>
            <a href="mailto:support@unichain.world">support@unichain.world</a>
            <a href="mailto:dev@uniworld.io">dev@uniworld.io</a>
            <a href="mailto:support@mia.world">support@mia.world</a>
            <a href="mailto:support@uniworld.io">support@uniworld.io</a>
          </div>
          <div>
            <h5>Telegram Official</h5>
            <a target="_blank" href="https://t.me/UniworldOfficial">UniWorld Ecosystem</a>
            <a target="_blank" href="https://t.me/MiaworldMultiple">Group Discussion</a>
            <a target="_blank" href="https://t.me/UnimeOfficial">UniMe Channel</a>
            <a target="_blank" href="https://t.me/UnibotOfficial">UniBot Channel</a>
            <a target="_blank" href="https://t.me/UnichainWorldOfficial">UniChain Channel</a>
            {/* <a target="_blank" href="https://t.me/MiaworldOfficial">MIA Channel</a> */}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;