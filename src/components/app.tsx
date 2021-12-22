import React from "react";
import styles from "./app.module.css";
import {AppHeader} from "./app-header/app-header";
import {BurgerConstructor} from "./burger-constructor/burger-constructor";
import {BurgerIngredients} from "./burder-ingredients/burger-ingredients";

export type IngredientType = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

function App() {
    const apiSource = "https://norma.nomoreparties.space/api/ingredients";

    const [data, setData] = React.useState<Array<IngredientType>>([]);

    React.useEffect(() => {
        const fetchData = () => {
            return fetch(apiSource)
                .then((response) => response.json())
                .catch((e) => {
                    console.log("Error: " + e.message);
                    console.log(e.response);
                });
        };

        fetchData().then(data => setData(data.data));
    }, []);

    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerConstructor
                    data={data}
                />
                <BurgerIngredients
                    data={data}
                />
            </main>
            <div id="modal"></div>
        </>
    );
}

export default App;