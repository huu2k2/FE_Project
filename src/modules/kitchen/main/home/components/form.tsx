import { useState } from "react";
import { CustomButton } from "../../../../../components/CustomButton";

interface ReasonFormPros {
  closeModal: () => void;
}

export const ReasonForm: React.FC<ReasonFormPros> = ({
  closeModal,
}: ReasonFormPros) => {
  const [reason, setReason] = useState("");

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleSubmitReason = () => {
    console.log(reason);
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            Lý do huỷ món
          </h2>
          <textarea
            value={reason}
            onChange={handleReasonChange}
            placeholder="Nhập lý do huỷ món..."
            rows={10}
            className="w-full p-2 rounded-lg mb-4 bg-[#E5E5E5] text-[#333333] border-none focus:outline-none focus:ring-2 focus:ring-[#FFAA02]"
          />
          <div className="flex justify-end space-x-2">
            <CustomButton
              title="Xác nhận"
              bgColor="#FFAA02"
              onClick={handleSubmitReason}
            ></CustomButton>
            <CustomButton
              title="Huỷ"
              bgColor="#CC0E0E"
              onClick={closeModal}
            ></CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};
