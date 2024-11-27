export interface ProductModel {
  productId: string;
  image: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  category: {
    categoryId: string;
    name: string;
  };
}

export interface ProductQuery {
  categoryId?: string;
  isActive?: string;
  search?: string;
}
