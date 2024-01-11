import { appRoutes } from "@/config/pathConfig";

const publicRoutes = {
  home: {
    component: "Home",
    path: appRoutes.home,
  },
  login: {
    component: "Login",
    path: appRoutes.login,
  }
};

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
