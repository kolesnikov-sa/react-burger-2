import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {MenuItem} from "./menu-item/menu-item";

import styles from "./app-header.module.css";

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav>
                    <ul>
                        <MenuItem icon={"burger"} title={"Конструктор"} type={"active"}/>
                        <MenuItem icon={"list"} title={"Лента заказов"} type={"inactive"}/>
                    </ul>
                </nav>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.cabinet}>
                    <ul>
                        <MenuItem icon={"profile"} title={"Личный кабинет"} type={"inactive"}/>
                    </ul>
                </div>
            </div>
        </header>
    );
};