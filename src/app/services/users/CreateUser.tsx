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
          <div className="mx-auto py-3 space-y-3 grid grid-cols-4 gap-x-4">
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
              <label htmlFor="salary">Basic salary</label>
              <input
                id="salary"
                type="number"
                name="salary"
                placeholder="User's basic salary"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="startWorkingDate">Working date</label>
              <input
                id="startWorkingDate"
                name="startWorkingDate"
                type="date"
                placeholder="Start working date"
                className="w-full p-4 my-2 border text-gray-400 rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="address">Address</label>
              <select
                id="address"
                name="address"
                defaultValue={-1}
                className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
              >
                <option value="-1" hidden>
                  Select an address
                </option>
                <option value="0">Ho Chi Minh</option>
                <option value="1">Binh Duong</option>
                <option value="2">Dong Nai</option>
              </select>
            </div>

            <div className="my-4">
              <label htmlFor="position">Position</label>
              <select
                id="position"
                name="position"
                defaultValue={-1}
                className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
              >
                <option value="-1" hidden>
                  Select a position
                </option>
                <option value="0">Administrator</option>
                <option value="1">Accountant</option>
                <option value="2">Seller</option>
              </select>
            </div>
            <fieldset className="my-4">
              <legend>Select a gender</legend>
              <div className="my-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="0"
                  className="accent-gray-400"
                  defaultChecked
                />
                <label htmlFor="male" className="mx-4">
                  Male
                </label>
              </div>
              <div className="my-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="1"
                  className="accent-gray-400"
                />
                <label htmlFor="female" className="mx-4">
                  Female
                </label>
              </div>
              <div className="my-2">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="2"
                  className="accent-gray-400"
                />
                <label htmlFor="other" className="mx-4">
                  Other
                </label>
              </div>
            </fieldset>
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
