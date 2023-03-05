export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: { image: { _type: string; asset: [Object] }; name: string };
  body: [
    {
      _key: string;
      _type: string;
      children: [[Object]];
      markDefs: [];
      style: string;
    }
  ];
  categories: [Category];
  excerpt: string;
  mainImage: { _type: string; asset: [Object] };
  slug: { _type: string; current: string };
  title: string;
  comments: [
    {
      _createdAt: string;
      _id: string;
      body: string;
      commenterEmail: string;
      commenterName: string;
      post: [Object];
      replys: [
        {
          _createdAt: string;
          _id: string;
          _rev: string;
          _type: string;
          _updatedAt: string;
          body: string;
          comment: {
            _ref: string;
            _type: string;
          };
          replierEmail: string;
          replierName: string;
        }
      ];
    }
  ];
  estimatedReadingTime: number;
  estimatedWordCount: number;
}

export interface Category {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}

export interface Comment {
  _createdAt: string;
  _id: string;
  body: string;
  commenterEmail: string;
  commenterName: string;
  post: [Object];
  replys: [Reply];
}

export interface Reply {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  body: string;
  comment: {
    _ref: string;
    _type: string;
  };
  replierEmail: string;
  replierName: string;
}

export interface Project {
  image: string;
  name: string;
  description: string;
  url: string;
  github?: string;
  tags?: Tag[];
}

export interface Experience {
  company: string;
  role: string;
  from: Date;
  to?: Date;
  description: string;
}

export interface Tag {
  name: string;
}

export interface Testimonial {
  client: string;
  position: string;
  company: string;
  description: String;
  image?: string;
  url?: string;
}

export interface Bubble {
  height: number;
  width: number;
  xAxisPosition: number;
  yAxisPosition: number;
  color: "green" | "light-green" | "dark";
  rotation?: number;
}
export interface Bubbles {
  desktop: Bubble[];
  mobile: Bubble[];
}
