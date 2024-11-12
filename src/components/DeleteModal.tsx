interface DeleteModalPros {
  closeModel: () => void;
  handle: () => void;
  title: string;
}

export const DeleteModal: React.FC<DeleteModalPros> = ({
  title,
  closeModel,
  handle,
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-1/3">
          <h2 className="text-xl font-semibold mb-4">Xác nhận xóa</h2>
          <p>{title}</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={closeModel}
              className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              onClick={handle}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
