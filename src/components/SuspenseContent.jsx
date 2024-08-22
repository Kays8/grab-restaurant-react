import Loading from "./Loading.jsx";
import LoadingAnimation from "../loading/loading.json";

const SuspenseContent = () => {
  return (
    <div className="w-full h-screen text-gray-300 bg-base-100">
      <div className="flex items-center justify-center h-full">
        <Loading animation={LoadingAnimation} />
      </div>
    </div>
  );
};

export default SuspenseContent;
