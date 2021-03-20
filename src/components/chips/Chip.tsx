import { Tech } from '../../constants';
import JSIcon from '../../styles/images/tech-icons/js.svg';
import ShopifyIcon from '../../styles/images/tech-icons/shopify.png';
import MemcachedIcon from '../../styles/images/tech-icons/memcached.png';
import RestIcon from '../../styles/images/tech-icons/api-rest.png';
import PostgresIcon from '../../styles/images/tech-icons/postgres.png';
import NodejsIcon from '../../styles/images/tech-icons/nodejs.png';
import TypeScriptIcon from '../../styles/images/tech-icons/typescript.png';
import DockerIcon from '../../styles/images/tech-icons/docker.png';
import DynamoDbIcon from '../../styles/images/tech-icons/dynamodb.png';
import AwsIcon from '../../styles/images/tech-icons/aws.png';
import GitIcon from '../../styles/images/tech-icons/git.png';
import SvnIcon from '../../styles/images/tech-icons/svn.jpg';
import PHPIcon from '../../styles/images/tech-icons/php.png';
import ApexIcon from '../../styles/images/tech-icons/apex.png';
import MySqlIcon from '../../styles/images/tech-icons/mysql.png';
import MongoDBIcon from '../../styles/images/tech-icons/mongodb.png';
import RedisIcon from '../../styles/images/tech-icons/redis.png';
import CypressIcon from '../../styles/images/tech-icons/cypress.jpg';
import ElectronJsIcon from '../../styles/images/tech-icons/electronjs.png';
import TddIcon from '../../styles/images/tech-icons/tdd.png';
import ReactIcon from '../../styles/images/tech-icons/react.png';
import GraphQLIcon from '../../styles/images/tech-icons/graphql.png';
import ServerlessIcon from '../../styles/images/tech-icons/serverless.png';
import DigitalOceanIcon from '../../styles/images/tech-icons/do.png';
import WordpressIcon from '../../styles/images/tech-icons/wordpress.png';
import StoryBookIcon from '../../styles/images/tech-icons/storybook.png';

type ChipProps = {
  id: string;
  tech: Tech;
};

const techImages: Record<Tech, string> = {
  [Tech.JS]: JSIcon,
  [Tech.Apex]: ApexIcon,
  [Tech.Aws]: AwsIcon,
  [Tech.Docker]: DockerIcon,
  [Tech.DynamoDB]: DynamoDbIcon,
  [Tech.ElectronJS]: ElectronJsIcon,
  [Tech.Git]: GitIcon,
  [Tech.GraphQL]: GraphQLIcon,
  [Tech.Memcached]: MemcachedIcon,
  [Tech.MongoDB]: MongoDBIcon,
  [Tech.NodeJs]: NodejsIcon,
  [Tech.PHP]: PHPIcon,
  [Tech.PostgreSQL]: PostgresIcon,
  [Tech.React]: ReactIcon,
  [Tech.Redis]: RedisIcon,
  [Tech.Rest]: RestIcon,
  [Tech.TypeScript]: TypeScriptIcon,
  [Tech.Shopify]: ShopifyIcon,
  [Tech.Serverless]: ServerlessIcon,
  [Tech.Tdd]: TddIcon,
  [Tech.Cypress]: CypressIcon,
  [Tech.StoryBook]: StoryBookIcon,
  [Tech.MySql]: MySqlIcon,
  [Tech.DigitalOcean]: DigitalOceanIcon,
  [Tech.Svn]: SvnIcon,
  [Tech.WordPress]: WordpressIcon,
}

const Chip: React.FC<ChipProps> = ({id, tech }) => {
  return (
    <div className={`col-sm-1 tech-badge tech-${id}`}>
      <a title={tech}>
        <img src={techImages[tech]} alt={tech} />
      </a>
    </div>
  );
};

export default Chip;