import SortedStackList from './stack/SortedStackList';
const StackSection = () => (
  <section id="stack">
    <div className="container">
        
        {/* <!-- section title --> */}
        <h2 className="section-title wow fadeInUp">Stack</h2>

        <div className="spacer" data-height="60"></div>

        {/* <!-- portfolio filter (desktop) --> */}
        <ul className="portfolio-filter list-inline wow fadeInUp">
          <li className="current list-inline-item" data-filter="*">Everything</li>
          <li className="list-inline-item" data-filter=".Coding">Coding</li>
          <li className="list-inline-item" data-filter=".Databases">Databases</li>
          <li className="list-inline-item" data-filter=".Infra">Infra</li>
          <li className="list-inline-item" data-filter=".APIs">APIs</li>
          <li className="list-inline-item" data-filter=".Testing">Testing</li>
          <li className="list-inline-item" data-filter=".Others">Others</li>
        </ul>
        
        {/* <!-- portfolio filter (mobile) --> */}
        {/* <div className="pf-filter-wrapper">
          <select className="portfolio-filter-mobile">
            <option value="*">Everything</option>
            <option value=".creative">Coding</option>
            <option value=".art">Databases</option>
            <option value=".design">Infra</option>
            <option value=".branding">Methodology</option>
          </select>
        </div> */}
        
        {/* <!-- portolio wrapper --> */}
        <div className="row portfolio-wrapper">
          <SortedStackList />
        </div>
    </div>
  </section>
);

export default StackSection;