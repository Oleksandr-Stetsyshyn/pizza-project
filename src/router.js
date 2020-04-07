import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "./components/PizzaMenuPage";
import PizzaList from "./components/PizzaMenuPage/c/PizzaList";
import About from "@/pages/About";
import Basket from "@/pages/Basket";
import AddPizza from "@/pages/AddPizza";
import AddNewIngredient from "@/pages/AddNewIngredient";
import AddIngredientsToItem  from "@/pages/AddIngredientsToItem"
import Home from "@/pages/Home";
import Delivery from "@/pages/Delivery";
import Stock from "@/pages/Stock";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Authr from "./components/Auth/Authr";



Vue.use(VueRouter);



const routes = [
{path: "/", component: Home},
{path: "/basket", component: Basket},
{path: "/about", component: About},
{path: "/delivery", component: Delivery},
{path: "/stock", component: Stock},
{path: "/menu", component: Menu},
{path: "/pizzaList", component :PizzaList},
{path: "/addPizza", component: AddPizza},
{path: "/addNewIngredient", component: AddNewIngredient},
{ path: "/addIngredientsToItem/:pizzaId", component: AddIngredientsToItem },
{path: "/register", component: Register},
{path: "/login", component: Login},
{path: "/authr", component: Authr},


];

const router = new VueRouter({
mode: "history",
routes
});
export default router;