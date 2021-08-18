import React, { useContext } from "react";

import classes from "./ShowcaseItem.module.scss";
import OptionsContext from "@Options";

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
    children,
    controls,
    description,
}) => {
    const optionsCtx = useContext<OptionsState>(OptionsContext);
    return (
        <section className={classes.container}>
            <div className={classes.top}>
                <div className={classes.content}>{children}</div>
                {optionsCtx.showControls && (
                    <div className={classes.controls}>{controls}</div>
                )}
            </div>
            {optionsCtx.showDescription && (
                <div className={classes.bottom}>{description}</div>
            )}
        </section>
    );
};

export default ShowcaseItem;
