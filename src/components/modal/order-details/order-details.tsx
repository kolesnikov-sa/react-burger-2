import styles from './order-details.module.css'
import img from '../../../images/check.png';

export const OrderDetails = () => {
    return(
        <div className={`${"mt-4 mb-15"} ${styles.order}`}>
            <div className={`${"text text_type_digits-large"} ${styles.id} ${styles.light}`}>034536</div>
            <div className={`${"mt-4 text text_type_main-medium"} ${styles.light}`}>идентификатор заказа</div>
            <img className={"mt-15"} src={img} alt="check" />
            <div className={`${"mt-15 text text_type_main-small"} ${styles.note} ${styles.light}`}>Ваш заказ начали готовить</div>
            <div className={`${"mt-2 text text_type_main-small text_color_inactive"} ${styles.note}`}>Дождитесь готовности на&nbsp;орбитальной станции</div>
        </div>
    );
}