import { ColorRing } from "react-loader-spinner";
export const LoadingComponent = () => {
  return (
    <div className=" w-screen h-screen absolute top-0 bottom-0 right-0 left-0 z-[100] bg-black bg-opacity-30 flex justify-center items-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
