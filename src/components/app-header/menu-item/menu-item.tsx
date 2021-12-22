import styles from "./menu-item.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from 'prop-types';

type MenuItemType = {
    title: string;
    icon: "burger" | "list" | "profile";
    type: "active" | "inactive";
}

export const MenuItem = (props: MenuItemType) => {
    const getIcon = () => {
        if (props.icon === "burger") {
            return <BurgerIcon type={props.type === "active" ? "primary" : "secondary"} />;
        }
        if (props.icon === "list") {
            return <ListIcon type={props.type === "active" ? "primary" : "secondary"} />;
        }
        if (props.icon === "profile") {
            return <ProfileIcon type={props.type === "active" ? "primary" : "secondary"} />;
        }
    }

    if (props.type === "active") {
        return (
            <li className={`${"text text_type_main-default p-5"} ${styles.li}`}>
                <>
                    {getIcon()}
                </>
                {props.title}
            </li>
        );
    } else {
        return (
            <li className={`${"text text_type_main-default text_color_inactive p-5"} ${styles.li}`}>
                <React.Fragment>
                    {getIcon()}
                </React.Fragment>
                {props.title}
            </li>
        );
    }
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(["burger", "list", "profile"]).isRequired,
    type: PropTypes.oneOf(["active", "inactive"]).isRequired
}