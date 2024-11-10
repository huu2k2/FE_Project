import imageUrl from "../assets/product.webp";

interface FinishOrderItemPros {
  data: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}

export const FinishOrderItem: React.FC<FinishOrderItemPros> = ({ data }) => {
  return (
    <>
      <div className="flex items-start p-4 border border-gray-300 rounded-lg shadow-sm max-w-md">
        <img
          src={imageUrl}
          alt="Dish"
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-black font-bold">
            {data.name}
          </h2>
          <p className="text-backgroundColor ">{data.price} đ</p>
          <p className=" text-black font-bold">Số lượng: {data.quantity}</p>
        </div>
      </div>
    </>
  );
};
