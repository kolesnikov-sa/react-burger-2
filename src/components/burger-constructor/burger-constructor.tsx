import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import styles from "./burger-constructor.module.css";
import {IngredientCard} from "./ingredient-card/ingredient-card";
import {DataElementType} from "../../utils/types";

export const BurgerConstructor = (props: any) => {
    const [current, setCurrent] = useState("bun");

    return (
        <section className={styles.section}>
            <h2 className={"text text_type_main-large mt-10"}>Соберите бургер</h2>
            <div className={`${"mt-5 mb-10"} ${styles.tabs}`}>
                <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === "main"} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.content}>
                <div className={"text text_type_main-medium"}>Булки</div>
                <div className={`${"mb-2"} ${styles.elements}`}>
                    {
                        props.data
                            .filter((item: any) => item.type === "bun")
                            .map((item: any) => {
                                return <IngredientCard data={item} key={item._id}/>;
                            })
                    }
                </div>
                <div className={"text text_type_main-medium mt-10"}>Соусы</div>
                <div className={`${"mb-2"} ${styles.elements}`}>
                    {
                        props.data
                            .filter((item: any) => item.type === "sauce")
                            .map((item: any) => {
                                return <IngredientCard data={item} key={item._id}/>;
                            })
                    }
                </div>
                <div className={"text text_type_main-medium mt-10"}>Начинки</div>
                <div className={`${"mb-2"} ${styles.elements}`}>
                    {
                        props.data
                            .filter((item: any) => item.type === "main")
                            .map((item: any) => {
                                return <IngredientCard data={item} key={item._id}/>;
                            })
                    }
                </div>
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    data: DataElementType
};