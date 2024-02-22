import toast from "react-hot-toast";

const success = (message: string) => {
  setTimeout(() => {
    toast.success(message, {
      id: "success",
    });
  }, 1000);
};

const error = (message: string) => {
  toast.error(message, {
    id: "error",
  });
};

const toastWithIcon = (message: string, icon: string) => {
  toast(message, {
    icon: icon,
  });
};

export { error, success, toastWithIcon };
