export interface Productos {
  id: any;
  meta_title: string;
  meta_description: string;
  nombre: string;
  slug: string;
  title: string;
  price: number;
  imagen: string;
  description: string;
  gallery: {id:number; route:string; img:string}[];
}
  