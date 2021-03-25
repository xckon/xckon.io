import kebabCase from 'lodash.kebabcase';
import StackItem from './StackItem';
import { getTechsSorted } from '../../constants';

const SortedStackList  = () => {
  const techsSorted = getTechsSorted();
  return (
    <>
      {techsSorted.map((tech) => {
        const id = kebabCase(tech.name);
        return <StackItem key={`stack-${id}`} tech={tech} />
      })}
    </>
  );
};

export default SortedStackList;