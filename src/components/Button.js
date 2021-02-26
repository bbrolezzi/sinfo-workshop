import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

export const BUTTON_SIZES = ["small", "medium", "large"];

export const BUTTON_TYPES = [
    "brand-primary",
    "brand-secondary",
    "alt-primary",
    "alt-secondary",
];

const Button = ({
    children,
    type,
    size,
    inverted,
    disabled,
    onClick
}) => {

    //🚩 Start here!
    //📙 Learn more: https://www.npmjs.com/package/classnames
    const classes = classNames("button-component", type, size, {
        disabled,
        inverted,
    });

    const handleClick = e => {
        if (disabled) {
            e.stopPropagation();
            e.preventDefault();
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            //💡 Tip: Edit the className attribute
            className={classes}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

//📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
Button.defaultProps = {
    type: "brand-primary",
    size: "medium",
};

//📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html
Button.propTypes = {
    type: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};;

export default Button;

//📙 Learn about React Components and Props: https://reactjs.org/docs/components-and-props.html
