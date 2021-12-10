import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {AppHeader} from "./components/app-header/app-header";
import {BurgerConstructor} from "./components/burger-constructor/burger-constructor";
import {BurgerIngredients} from "./components/burder-ingredients/burger-ingredients";

import {data} from "./utils/data";

function App() {
    return (
        <>
            <AppHeader/>
            <main className={"main"}>
                <BurgerConstructor data={data}/>
                <BurgerIngredients data={data}/>
            </main>
        </>
    );
}

export default App;
