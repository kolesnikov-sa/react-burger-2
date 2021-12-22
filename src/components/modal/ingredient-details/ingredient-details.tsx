import styles from './ingredient-details.module.css';
import {IngredientType} from "../../app";
import {IngredientPropType} from "../../../utils/types";

type IngredientDetailsType = {
    ingredientData: IngredientType
}

export const IngredientDetails = (props: IngredientDetailsType) => {
    return(
        <div className={styles.content}>
            <img src={props.ingredientData.image} alt={props.ingredientData.name} />
            <div className={`${"mt-4 text text_type_main-medium"} ${styles.title}`}>{props.ingredientData.name}</div>
            <div className={`${"mt-8 text_color_inactive"} ${styles.parameters}`}>
                <div className={`${styles.parameter}`}>
                    <div className={`${"text text_type_main-small"} ${styles.parameter__title}`}>Калории, ккал</div>
                    <div className={`${"mt-2 text text_type_digits-default"} ${styles.parameter__value}`}>{props.ingredientData.calories}</div>
                </div>
                <div className={`${styles.parameter}`}>
                    <div className={`${"text text_type_main-small"} ${styles.parameter__title}`}>Белки, г</div>
                    <div className={`${"mt-2 text text_type_digits-default"} ${styles.parameter__value}`}>{props.ingredientData.proteins}</div>
                </div>
                <div className={`${styles.parameter}`}>
                    <div className={`${"text text_type_main-small"} ${styles.parameter__title}`}>Жиры, г</div>
                    <div className={`${"mt-2 text text_type_digits-default"} ${styles.parameter__value}`}>{props.ingredientData.fat}</div>
                </div>
                <div className={`${styles.parameter}`}>
                    <div className={`${"text text_type_main-small"} ${styles.parameter__title}`}>Углеводы, г</div>
                    <div className={`${"mt-2 text text_type_digits-default"} ${styles.parameter__value}`}>{props.ingredientData.carbohydrates}</div>
                </div>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredientData: IngredientPropType.isRequired
}