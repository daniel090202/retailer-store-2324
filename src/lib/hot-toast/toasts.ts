import toast from "react-hot-toast";

const success = (message: string) => {
  setTimeout(() => {
    toast.success(message, {
      id: "success",
    });
  }, 2000);
};

const error = (message: string) => {
  setTimeout(() => {
    toast.error(message, {
      id: "error",
    });
  }, 2000);
};

export { error, success };
