export interface CategoryModel {
  categoryId: string ;
  name: string;
}

export interface CreateProductDto {
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId?: string;
  isActive?: boolean;
}