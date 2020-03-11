import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "./components/PizzaMenuPage";
import PizzaList from "./components/PizzaMenuPage/c/PizzaList";
import About from "@/pages/About";
import AddPizza from "@/pages/AddPizza";
import AddIngredients  from "@/pages/AddIngredients"
import Home from "@/pages/Home";
import Delivery from "@/pages/Delivery";
import Stock from "@/pages/Stock";


Vue.use(VueRouter);



const routes = [
{path: "/", component: Home},
{path: "/about", component: About},
{path: "/delivery", component: Delivery},
{path: "/stock", component: Stock},
{path: "/menu", component: Menu},
{path: "/pizzaList", component :PizzaList},
{path: "/addPizza", component: AddPizza},
{ path: "/addIngredients/:pizzaId", component: AddIngredients }
];

const router = new VueRouter({
mode: "history",
routes
});
export default router;