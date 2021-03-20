import TimeLineItem from './TimeLineItem';
import { Tech } from '../constants';
import SortedChipsList from './chips/SortedChipsList';

const TimeLine = () => (
  <section id="experience">
    <div className="container">
      {/* <!-- section title --> */}
      <h2 className="section-title wow fadeInUp">Experience</h2>
      <div className="spacer" data-height="60"></div>
      <div className="row">
        <div className="col-md-12">
          {/* <!-- timeline wrapper --> */}
          <div className="timeline exp bg-dark rounded shadow-light padding-30 overflow-hidden">
            
            <TimeLineItem
              startDate="Dec 2020"
              title="Technical Lead"
              companyName="The Climate Corporation"
              consultantName="TradeHelm">
                <SortedChipsList techs={[
                  Tech.React,
                  Tech.TypeScript,
                  Tech.JS,
                  Tech.NodeJs,
                  Tech.Tdd,
                  Tech.Cypress,
                  Tech.Git,
                  Tech.Rest,
                  Tech.GraphQL,
                ]} />
            </TimeLineItem>

            <TimeLineItem
              startDate="Apr 2020"
              endDate="Nov 2020"
              title="Frontend Engineer"
              companyName="The Climate Corporation"
              consultantName="TradeHelm, Inc"
            >
              <SortedChipsList techs={[
                Tech.React,
                Tech.TypeScript,
                Tech.JS,
                Tech.NodeJs,
                Tech.Tdd,
                Tech.Cypress,
                Tech.Git,
                Tech.Rest,
                Tech.GraphQL,
              ]} />
            </TimeLineItem>

            <TimeLineItem
              startDate="Dec 2019"
              endDate="Mar 2020"
              title="Full Stack Engineer  "
              companyName="Dealer Inspire"
              consultantName="TradeHelm, Inc">
              <SortedChipsList techs={[
                Tech.React,
                Tech.TypeScript,
                Tech.JS,
                Tech.NodeJs,
                Tech.Tdd,
                Tech.Cypress,
                Tech.Aws,
                Tech.Git,
                Tech.PostgreSQL,
                Tech.Serverless,
                Tech.StoryBook,
                Tech.GraphQL,
              ]} />
            </TimeLineItem>

            <TimeLineItem
              startDate="Apr 2020"
              endDate="Nov 2020"
              title="Co-Founder &  CTO"
              companyName="Braintly | Software Boutique"
            >
              <SortedChipsList techs={[
                 Tech.JS,
                 Tech.Apex,
                 Tech.Aws,
                 Tech.Docker,
                 Tech.DynamoDB,
                 Tech.ElectronJS,
                 Tech.Git,
                 Tech.GraphQL,
                 Tech.Memcached,
                 Tech.MongoDB,
                 Tech.NodeJs,
                 Tech.PHP,
                 Tech.PostgreSQL,
                 Tech.MySql,
                 Tech.React,
                 Tech.Redis,
                 Tech.Rest,
                 Tech.Shopify,
                 Tech.Serverless,
                 Tech.DigitalOcean,
              ]} />
            </TimeLineItem>

            <TimeLineItem
              startDate="Oct 2011"
              endDate="Nov 2014"
              title="Senior Web Developer"
              companyName="Infomedia Producciones S.A."
            >
              <SortedChipsList techs={[
                 Tech.JS,
                 Tech.Git,
                 Tech.Memcached,
                 Tech.MongoDB,
                 Tech.PHP,
                 Tech.MySql,
                 Tech.Rest,
              ]} />
            </TimeLineItem>

            <TimeLineItem
              startDate="Aug 2007"
              endDate="Sep 2011"
              title="Semi-Senior Web Developer"
              companyName="DigBang"
            >
              <SortedChipsList techs={[
                 Tech.JS,
                 Tech.Git,
                 Tech.Memcached,
                 Tech.PHP,
                 Tech.MySql,
                 Tech.PostgreSQL,
                 Tech.Rest,
                 Tech.Svn,
                 Tech.WordPress
              ]} />
            </TimeLineItem>

            {/* <!-- main line --> */}
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TimeLine;