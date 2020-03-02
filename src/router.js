import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "./components/PizzaMenuPage";
import PizzaList from "./components/PizzaMenuPage/c/PizzaList";
import About from "@/pages/About";
import AddPizza from "@/pages/AddPizza";



Vue.use(VueRouter);

const routes = [
{path: "/", component: Menu},
{path: "/menu", component: Menu},
{path: "/pizzaList", component :PizzaList},
{ path: "/about", component: About },
{path: "/addPizza", component: AddPizza}

];

const router = new VueRouter({
mode: "history",
routes
});
export default router;