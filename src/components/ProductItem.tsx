interface ProductPros {
  product: { name: string; price: string; type: string };
}

export const ProductItem: React.FC<ProductPros> = (data: ProductPros) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <div className="absolute w-[43px] h-[21px] right-0 top-0">
            <button className="w-full h-full">
              <i
                className="fa-solid fa-ellipsis fa-2xl"
                style={{ color: "#000000" }}
              ></i>
            </button>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt={data.product.name}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-4 bg-backgroundColor text-white">
          <h2 className="text-md font-bold text-black">{data.product.name}</h2>
          <div className="flex space-x-2">
            <p className="font-bold text-black">Giá:</p>
            <p>{data.product.price}</p>
          </div>
          <div className="flex space-x-2">
            <p className="font-bold text-black">Loại:</p>
            <p>{data.product.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};
