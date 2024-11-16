export interface ProductModel {
  image:string;
  name: string;
  price: string;
  type:string;
}

export interface ProductQuery {
  categoryId?: string;
  isActive?: string;
  search?: string;
}