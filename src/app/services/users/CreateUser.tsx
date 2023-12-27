import PropTypes from "prop-types";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

const CreateUser = ({
  createUserModal,
  setCreateUserModal,
}: {
  createUserModal: boolean;
  setCreateUserModal: (value: boolean) => void;
}) => {
  const handleCreateUser = () => {
    return;
  };

  return createUserModal ? (
    <div className="fixed inset-0 z-10 text-base overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black cursor-pointer opacity-40"
        onClick={() => setCreateUserModal(false)}
      ></div>
      <div className="flex items-center min-h-screen p-8">
        <div className="relative w-full max-w-6xl max-h-[660px] p-4 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto">
          <div className="my-2 flex justify-between">
            <h1 className="text-2xl">New user profile</h1>
            <span
              className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
              onClick={() => setCreateUserModal(false)}
            >
              {icons.cross}
            </span>
          </div>
          <hr />
          <div className="mx-auto py-3 space-y-3 grid grid-cols-2 gap-x-4">
            <div className="my-4">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="User's full name"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="User's age"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="User's address"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="User's phone"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="User's email"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                name="position"
                placeholder="User's position"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="salary">Basic salary</label>
              <input
                id="salary"
                type="number"
                name="salary"
                placeholder="User's basic salary"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="startWorkingDate">Start working date</label>
              <input
                id="startWorkingDate"
                name="startWorkingDate"
                type="date"
                placeholder="Start working date"
                className="w-full p-4 my-2 border text-gray-400 rounded-xl shadow-xl outline-none"
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-center">
            <Button
              leftIcon={icons.plus}
              rightIcon=""
              className="mt-4 p-4"
              onClick={() => handleCreateUser()}
            >
              Create user
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

CreateUser.propTypes = {
  createUserModal: PropTypes.bool,
  setCreateUserModal: PropTypes.func,
};

export default CreateUser;
