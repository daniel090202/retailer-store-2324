import icons from "@/assets/Icons/index";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="my-2">{icons.solidStar}</div>
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-gray-400 cursor-pointer hover:underline hover:text-gray-600"
        >
          <span>See more details</span>
          <div className="mx-2">{icons.solidLinkDirect}</div>
        </a>
      </div>
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="my-2">{icons.solidStar}</div>
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-gray-400 cursor-pointer hover:underline hover:text-gray-600"
        >
          <span>See more details</span>
          <div className="mx-2">{icons.solidLinkDirect}</div>
        </a>
      </div>
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="my-2">{icons.solidStar}</div>
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-gray-400 cursor-pointer hover:underline hover:text-gray-600"
        >
          <span>See more details</span>
          <div className="mx-2">{icons.solidLinkDirect}</div>
        </a>
      </div>
    </div>
  );
};

export default Card;
