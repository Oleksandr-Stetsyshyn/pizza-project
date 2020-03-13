import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "./components/PizzaMenuPage";
import PizzaList from "./components/PizzaMenuPage/c/PizzaList";
import About from "@/pages/About";
import Basket from "@/pages/Basket";

import AddPizza from "@/pages/AddPizza";
import AddIngredients  from "@/pages/AddIngredients"
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Delivery from "@/pages/Delivery";
import Stock from "@/pages/Stock";


Vue.use(VueRouter);



const routes = [
{path: "/", component: Home},
{path: "/login", component: Login},
{path: "/basket", component: Basket},
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