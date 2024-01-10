import { appRoutes } from "@/config/pathConfig";

const publicRoutes = [
  {
    component: "Home",
    path: appRoutes.home,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
