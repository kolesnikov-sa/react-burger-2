import styles from "./burger-ingredients.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {Modal} from "../modal/modal";
import {OrderDetails} from "../modal/order-details/order-details";
import {IngredientDetails} from "../modal/ingredient-details/ingredient-details";
import {IngredientType} from "../app";
import {IngredientPropType} from "../../utils/types";
import PropTypes from "prop-types";

type BurgerIngredientsType = {
    data: Array<IngredientType>
}

export const BurgerIngredients = (props: BurgerIngredientsType) => {
    const [orderModalState, setOrderModalState] = React.useState({
        isOpen: false
    });

    const openOrderModal = () => {
        setOrderModalState({
            ...orderModalState,
            isOpen: true
        });
    };

    const closeOrderModal = () => {
        setOrderModalState({
            ...orderModalState,
            isOpen: false,
        });
    };

    const [ingredientModalState, setIngredientModalState] = React.useState({
        isOpen: false,
        content: <></>
    });

    const openIngredientModal = (e: any) => {
        const ingredientData = props.data.filter((item: any) => item._id === e.currentTarget.id);
        const content = (
            <IngredientDetails ingredientData={ingredientData[0]}/>
        );

        setIngredientModalState({
            ...ingredientModalState,
            isOpen: true,
            content: content
        });
    };

    const closeIngredientModal = () => {
        setIngredientModalState({
            ...ingredientModalState,
            isOpen: false,
            content: <></>
        });
    };

    if (!props.data.length) return null;

    return (
        <section className={styles.section}>
            <Modal isOpen={orderModalState.isOpen} closeModal={closeOrderModal} title={""}>
                <OrderDetails/>
            </Modal>
            <Modal isOpen={ingredientModalState.isOpen} closeModal={closeIngredientModal} title="Детали ингредиента">
                {ingredientModalState.content}
            </Modal>
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
                                return (
                                    <div className={`${styles.element} ${"mr-2 mb-4 ml-4"}`}
                                         key={item._id}
                                         id={item._id}
                                         onClick={openIngredientModal}
                                    >
                                        <DragIcon type="primary"/>
                                        <ConstructorElement
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image_mobile}
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <div className={`${styles.element} ${"mr-2 ml-4"}`}
                                         key={item._id}
                                         id={item._id}
                                         onClick={openIngredientModal}
                                    >
                                        <DragIcon type="primary"/>
                                        <ConstructorElement
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image_mobile}
                                        />
                                    </div>
                                );
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
                <Button type="primary" size="large" onClick={openOrderModal}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(IngredientPropType).isRequired
};