export interface Productos {
  id: any;
  meta_title: string;
  meta_description: string;
  name: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  mask: string;
  cover: string;
  body: any;
  gallery: {id:number; route:string; img:string}[];
}
  