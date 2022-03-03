import { createRouter, createWebHistory } from "vue-router";
import CodeEditor from "../views/CodeEditor.vue";

const routes = [
  {
    path: "/",
    name: "CodeEditor",
    component: CodeEditor,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
