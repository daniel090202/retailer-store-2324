import Card from "./components/Card";

const Counter = () => {
  return (
    <div className="flex-1 h-[480px] mx-2 my-4 p-4 border-2 rounded-xl overflow-y-scroll">
      <div className="h-full flex justify-center items-center hidden">
        <span className="text-6xl font-medium text-white">Empty cart...</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Counter;
