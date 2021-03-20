import kebabCase from 'lodash.kebabcase';
import Chip from './Chip';
import { Tech } from '../../constants';
import { sortStringElements } from '../../utils/sorting';

type ChipsListProps = {
  techs: Tech[],
};

const SortedChipsList: React.FC<ChipsListProps> = ({techs}) => {
  const techsSorted = sortStringElements<Tech>(techs);
  return (
    <div className="container">
      <div className="row">
        {techsSorted.map((tech) => {
          const id = kebabCase(tech);
          return <Chip key={`chip-${id}`} id={id}  tech={tech} />
        })}
        </div>
    </div>
  );
};

export default SortedChipsList