import { createWebHistory, createRouter } from "vue-router";
import CompList from "@/components/CompList"
import CompHome from "@/components/CompHome"
import CompDetail from "@/components/CompDetail"
import Comp404 from "@/components/Comp404"
const routes = [
  {
    path: "/",
    component : CompHome
  },
  {
    path: "/list",
    component: CompList
  },
  {
    path : "/detail/:id",
    component : CompDetail
  },
  {
    path : "/:anything(.*)",
    component : Comp404
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 