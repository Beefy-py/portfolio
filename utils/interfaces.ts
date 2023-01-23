export interface Project {
  image: string;
  name: string;
  description: string;
  url: string;
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

export interface BlurryBlob {
  height: number;
  width: number;
  xAxisPosition: number;
  yAxisPosition: number;
}
export interface BlurryBlobs {
  desktop: BlurryBlob[];
  mobile: BlurryBlob[];
}
