export interface Project {
  image: string;
  name: string;
  description: string;
  url: string;
  github?: string;
  tags?: Tag[];
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
