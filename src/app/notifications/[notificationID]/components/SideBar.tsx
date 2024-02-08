"use client";

const SideBar = () => {
  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-lg font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-xl text-center">Notification details</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Type of notification:</span>
          <span>All</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Target receivers:</span>
          <span>All</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
