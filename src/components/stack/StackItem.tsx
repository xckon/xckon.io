import { TechData } from '../../constants';

type StackItemProps = {
  tech: TechData
};

const StackItem: React.FC<StackItemProps> = ({ tech }) => {
  const { icon, category, name } = tech;
  return (
    <div className={`col-3 col-sm-2 col-md-1 grid-item ${category}`}>
      <a title={name} >
        <div className="portfolio-item rounded shadow-dark">
          <div className="thumb">
            <img src={icon} alt={name} />
          </div>
        </div>
      </a>
    </div>  
  );
}

export default StackItem;