import ShopifyIcon from './styles/images/tech-icons/shopify.png';
import JSIcon from './styles/images/tech-icons/js.svg';
import MemcachedIcon from './styles/images/tech-icons/memcached.png';
import RestIcon from './styles/images/tech-icons/api-rest.png';
import PostgresIcon from './styles/images/tech-icons/postgres.png';
import NodejsIcon from './styles/images/tech-icons/nodejs.png';
import TypeScriptIcon from './styles/images/tech-icons/typescript.png';
import DockerIcon from './styles/images/tech-icons/docker.png';
import DynamoDbIcon from './styles/images/tech-icons/dynamodb.png';
import AwsIcon from './styles/images/tech-icons/aws.png';
import GitIcon from './styles/images/tech-icons/git.png';
import SvnIcon from './styles/images/tech-icons/svn.jpg';
import PHPIcon from './styles/images/tech-icons/php.png';
import MySqlIcon from './styles/images/tech-icons/mysql.png';
import MongoDBIcon from './styles/images/tech-icons/mongodb.png';
import RedisIcon from './styles/images/tech-icons/redis.png';
import CypressIcon from './styles/images/tech-icons/cypress.jpg';
import ElectronJsIcon from './styles/images/tech-icons/electronjs.png';
import TddIcon from './styles/images/tech-icons/tdd.png';
import ReactIcon from './styles/images/tech-icons/react.png';
import GraphQLIcon from './styles/images/tech-icons/graphql.png';
import ServerlessIcon from './styles/images/tech-icons/serverless.png';
import DigitalOceanIcon from './styles/images/tech-icons/do.png';
import WordpressIcon from './styles/images/tech-icons/wordpress.png';
import StoryBookIcon from './styles/images/tech-icons/storybook.png';

export enum Tech {
  'JS',
  'NodeJs',
  'React',
  'TypeScript',
  'ElectronJS',
  'Tdd',
  'Cypress',
  'StoryBook',
  'Git',

  'Aws',
  'DigitalOcean' ,
  'Docker',
  'Serverless',

  'GraphQL',
  'Rest',

  'DynamoDB',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'MySql',

  'PHP',
  'Shopify',
  'Memcached',
  'WordPress',
  'Svn',
}

enum TechCategory {
  'Coding' = 'Coding',
  'Databases' = 'Databases',
  'Infra' = 'Infra',
  'Apis' = 'APIs',
  'Testing' = 'Testing',
  'Others' = 'Others'
}


export type TechData = {
  name: string;
  icon: string;
  category: TechCategory
};

export const TechMeta: Record<Tech, TechData> = {
  [Tech.JS]: {name: 'JavaScript', icon: JSIcon, category: TechCategory.Coding},
  [Tech.NodeJs]: {name: 'Node.js', icon: NodejsIcon, category: TechCategory.Coding},
  [Tech.React]: {name: 'React', icon: ReactIcon, category: TechCategory.Coding},
  [Tech.TypeScript]: {name: 'TypeScript', icon: TypeScriptIcon, category: TechCategory.Coding},
  [Tech.ElectronJS]: {name: 'ElectronJS', icon: ElectronJsIcon, category: TechCategory.Coding},
  [Tech.Tdd]: {name: 'TDD', icon: TddIcon, category: TechCategory.Testing},
  [Tech.Cypress]: {name: 'Cypress', icon: CypressIcon, category: TechCategory.Testing},
  [Tech.StoryBook]: {name: 'StoryBook', icon: StoryBookIcon, category: TechCategory.Testing},
  [Tech.Git]: {name: 'GIT', icon: GitIcon, category: TechCategory.Coding},

  [Tech.Aws]: {name: 'AWS', icon: AwsIcon, category: TechCategory.Infra},
  [Tech.DigitalOcean]: {name: 'Digital Ocean', icon: DigitalOceanIcon, category: TechCategory.Infra},
  [Tech.Docker]: {name: 'Docker', icon: DockerIcon, category: TechCategory.Infra},
  [Tech.Serverless]: {name: 'Serverless', icon: ServerlessIcon, category: TechCategory.Coding},

  [Tech.GraphQL]: {name: 'GraphQL', icon: GraphQLIcon, category: TechCategory.Apis},
  [Tech.Rest]: {name: 'REST', icon: RestIcon, category: TechCategory.Apis},

  [Tech.DynamoDB]: {name: 'DynamoDB', icon: DynamoDbIcon, category: TechCategory.Databases},
  [Tech.PostgreSQL]: {name: 'PostgreSQL', icon: PostgresIcon, category: TechCategory.Databases},
  [Tech.Redis]: {name: 'Redis', icon: RedisIcon, category: TechCategory.Databases},
  [Tech.MongoDB]: {name: 'MongoDB', icon: MongoDBIcon, category: TechCategory.Databases},
  [Tech.MySql]: {name: 'MySQL', icon: MySqlIcon, category: TechCategory.Databases},
  
  
  [Tech.Memcached]: {name: 'Memcached', icon: MemcachedIcon, category: TechCategory.Others},
  [Tech.PHP]: {name: 'PHP', icon: PHPIcon, category: TechCategory.Coding},
  [Tech.Shopify]: {name: 'Shopify', icon: ShopifyIcon, category: TechCategory.Others},
  [Tech.Svn]: {name: 'SVN', icon: SvnIcon, category: TechCategory.Coding},
  [Tech.WordPress]: {name: 'WordPress', icon: WordpressIcon, category: TechCategory.Others},
}

export const getTechsSorted = () =>
  Object.entries(TechMeta).map(([_key, tech]) => tech);

export const RESUME_URL = 'https://resume.io/r/UX7zp7chr';