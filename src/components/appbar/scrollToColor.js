import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "rgba(36, 16, 56, 0.6)" : "transparent",
            backdropFilter: trigger && "blur(4px)",
            webkitBackdropFilter: trigger && "blur(4px)",
            marginTop: trigger && 0
        }
    });
};

const ScrollToColor = props => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
