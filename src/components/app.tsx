import React from "react";
import styles from "./app.module.css";
import {AppHeader} from "./app-header/app-header";
import {BurgerConstructor} from "./burger-constructor/burger-constructor";
import {BurgerIngredients} from "./burder-ingredients/burger-ingredients";

import {data} from "../utils/data";

function App() {
    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerConstructor data={data}/>
                <BurgerIngredients data={data}/>
            </main>
        </>
    );
}

export default App;
