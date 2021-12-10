import styles from "./burger-ingredients.module.css";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DataElementType} from "../../utils/types";

export const BurgerIngredients = (props: any) => {
    return (
        <section className={styles.section}>
            <div className={`${styles.top} ${"mt-25"}`}>
                <div className={`${styles.element} ${"mb-4 mr-4"}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={props.data[0].name + " (верх)"}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image_mobile}
                    />
                </div>
            </div>
            <div className={styles.middle}>
                {
                    props.data
                        .filter((item: any, index: number) => index !== 0 && index !== props.data.length - 1)
                        .map((item: any, index: number, filteredData: any) => {
                            if (index !== filteredData.length - 1) {
                                return <div className={`${styles.element} ${"mr-2 mb-4 ml-4"}`} key={item._id}>
                                    <DragIcon type="primary"/>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image_mobile}
                                    />
                                </div>;
                            } else {
                                return <div className={`${styles.element} ${"mr-2 ml-4"}`} key={item._id}>
                                    <DragIcon type="primary"/>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image_mobile}
                                    />
                                </div>;
                            }
                        })
                }
            </div>
            <div className={`${styles.bottom} ${"mt-4"}`}>
                <div className={`${styles.element} ${"mr-4"}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={props.data[0].name + " (низ)"}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image_mobile}
                    />
                </div>
            </div>
            <div className={`${styles.summary} ${"mt-10"}`}>
                <div className={`${styles.sum} ${"mr-10"}`}>
                    <div className={"text text_type_digits-medium mr-2"}>610</div>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: DataElementType
};