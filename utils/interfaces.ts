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

export interface Service {
  name: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
