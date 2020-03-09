import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "./components/PizzaMenuPage";
import PizzaList from "./components/PizzaMenuPage/c/PizzaList";
import About from "@/pages/About";
import AddPizza from "@/pages/AddPizza";
import AddIngredients  from "@/pages/AddIngredients"

Vue.use(VueRouter);

const routes = [
{path: "/", component: Menu},
{path: "/about", component: About},
{path: "/pizzaList", component :PizzaList},
{path: "/addPizza", component: AddPizza},
{ path: "/addIngredients/:pizzaid", component: AddIngredients }
];

const router = new VueRouter({
mode: "history",
routes
});
export default router;