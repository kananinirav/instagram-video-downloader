import LoadingSpinner from "./components/LoadingSpinner";

const Loading = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen  w-screen flex-col items-center justify-center gap-2">
      <LoadingSpinner size={40} />
      <p className="text-center">Snacks while we wait 🍕?</p>
    </div>
  );
};

export default Loading;
