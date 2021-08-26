import React, { useState, useContext } from "react";

import classes from "./InvertedButton.module.scss";

import InvertButtonContext from "@InvertButtonContext";
import useToggle from "@Hooks/useToggle";
import {
    availableClipshapes,
    availableTransformOrigin,
    cornerToPosition
} from "@ShowcaseConstants/invertButton";

const FilteredImage: React.FC = () => {
    const [clicked, toggleClicked] = useToggle(false);
    const [hovered, setHovered] = useState<boolean>(false);

    const activated = clicked || hovered;
    
    const invertButtonCtx = useContext(InvertButtonContext);

    return (
        <div className={classes.container}>
            <div
                style={{
                    width: `${invertButtonCtx.width}%`,
                    height: `${invertButtonCtx.height}%`,
                    backgroundColor: invertButtonCtx.foregroundColor,
                    overflow: invertButtonCtx.showOverflow ? 'visible' : 'hidden',
                    outline: `2px solid ${invertButtonCtx.backgroundColor}`
                }}
                onClick={() => toggleClicked()}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div style={{
                    backgroundColor: invertButtonCtx.backgroundColor,
                    ...cornerToPosition[invertButtonCtx.origin],
                    width: '200%',
                    height: '200%',
                    clipPath: availableClipshapes[invertButtonCtx.origin],
                    transformOrigin: availableTransformOrigin[invertButtonCtx.origin],
                    transition: `transform ${invertButtonCtx.animationSpeed}ms ease`,
                    transform: `scale(${activated ? 1 : 0})`
                }} />
                <span
                    style={{
                        color: activated ? invertButtonCtx.foregroundColor : invertButtonCtx.backgroundColor,
                        transition: `color ${invertButtonCtx.animationSpeed}ms ease`
                    }}
                >
                    {invertButtonCtx.text}
                </span>
            </div>
        </div>
    );
};

export default FilteredImage;
