import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css";
import {IngredientType} from "../../app";
import {IngredientPropType} from "../../../utils/types";

type IngredientCardType = {
    data: IngredientType
}

export const IngredientCard = (props: IngredientCardType) => {
    return (
        <div className={`${"mt-6 mr-2 ml-2"} ${styles.card}`}>
            <img className={`${"ml-4 mr-4"} ${styles.img}`} src={props.data.image} alt={props.data.name}/>
            <div className={`${"text text_type_digits-default mt-1"} ${styles.price}`}>
                {props.data.price}
                <CurrencyIcon type="primary"/>
            </div>
            <div className={`${"text text_type_main-default mt-1 pb-6"} ${styles.name}`}>
                <span>{props.data.name}</span>
            </div>
            <div className={`${"text text_type_digits-default p-1"} ${styles.number}`}>1</div>
        </div>
    );
};

IngredientCard.propTypes = {
    data: IngredientPropType.isRequired
};