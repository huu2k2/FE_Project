import { useCallback, useState, useEffect } from "react";
import { Form } from "./form";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { ProductItem } from "../../../../components/ProductItem";
import { TitleText } from "../../../../components/texts/title";
import { CreateButton } from "../../../../components/buttons/createButton";
import { SearchInput } from "../../../../components/inputs/search";

import debounce from "lodash/debounce";
import { DropDown } from "../../../../components/dropdowns/dropdows";
import { ProductModel, ProductQuery } from "../../../../models/product";
import { getAllProduct } from "../../../../services/product-service";
import { getAllCategory } from "../../../../services/category-service";
import { CategoryModel } from "../../../../models/category";

export const ProductCompoment: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  const [textSearch, setTextSearch] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");
  const [getIdCategory, setIdCategory] = useState<string>("");
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [list, setList] = useState<CategoryModel[]>([]);

  const fetchProducts = async () => {
    const query: ProductQuery = {
      categoryId: getIdCategory,
      isActive: "true",
      search: debouncedText,
    };
    const result: ProductModel[] = await getAllProduct(query);
    setProducts(result);
  };
  const fetchCategories = useCallback(async () => {
    try {
      const result = await getAllCategory();
      setList(result.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const debounceSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value);
    }, 500),
    []
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextSearch(value);
    debounceSearch(value);
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const [data, setData] = useState<ProductModel>({
    productId: "",
    name: "",
    categoryId: "",
    price: 0,
    description: "",
    image: "",
    category:{
      categoryId:"",
      name:"",
    }
  });

  const handleCreate = () => {
    handleOpenForm();
    setIsUpdate(false);
    setData({
      productId: "",
      name: "",
      categoryId: "",
      price: 0,
      description: "",
      image: "",
      category:{
        categoryId:"",
        name:"",
      }
    });
  };

  const handleEdit = (
data:ProductModel
  ) => {
    handleOpenForm();
    setIsUpdate(true);
    setData({
      productId:data.productId,
      name:data.name,
      price:data.price,
      categoryId:data.categoryId,
      description:data.description,
      image:data.image,
      category:{
        categoryId:data.category.categoryId,
        name:data.category.name,
      }
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <TitleText name="Quản lý món ăn" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <CreateButton name={"Tạo món ăn"} handleOpenForm={handleCreate} />
          <span className="text-black font-bold" style={{ fontSize: "20px" }}>
            Tổng các món ăn: {products.length}
          </span>

          <SearchInput handleSearch={handleChangeText} value={textSearch} />

          {/* Drop down */}
          <DropDown
            categories={list}
            setIdCategory={setIdCategory}
            W={"200px"}
          />
        </div>

        {/* Items */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              handleEdit={() =>
                handleEdit(product)
              }
            ></ProductItem>
          ))}
          {products.length === 0 && (
            <div
              className={
                "sm:col-span-4 lg:col-span-4 w-full flex justify-center items-center"
              }
            >
              <img
                src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?semt=ais_hybrid"
                className={""}
              />
            </div>
          )}
        </div>
      </div>

      {isFormOpen && (
        <Form
          closeModal={handleCloseForm}
          formData={data}
          setData={setData}
          isUpdate={isUpdate}
          list={list}
        />
      )}
    </div>
  );
};
