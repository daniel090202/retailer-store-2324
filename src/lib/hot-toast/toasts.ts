import toast from "react-hot-toast";

const success = (message: string) => {
  toast.success(message);
};

const error = (message: string) => {
  toast.error(message);
};

export { error, success };
