import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./Showcase.module.scss";
import Loading from "@Gen/Loading/Loading.component";

// Apparently this doesn't work with webpack - how I wish it did so I could write it all there
// Instead of making a list of components to import here
// import showcaseList from '../../../data/showcaseList';
// const allComponents: LazyComponentContainer = {};
// for (const item of showcaseList) {
//     allComponents[item.id] = lazy(() => import(item.path));
// }

const ClickInBox = lazy(() => import("@Disp/ClickInBox/ClickInBox.component"));
const ConcentricCircles = lazy(
    () => import("@Disp/ConcentricCircles/ConcentricCircles.component")
);
const ColorBoxes = lazy(() => import("@Disp/ColorBoxes/ColorBoxes.component"));
const FilterGenerator = lazy(
    () => import("@Disp/FilterGenerator/FilterGenerator.component")
);
const InvertButton = lazy(() => import("@Disp/InvertButton/InvertButton.component"));

const Showcase: React.FC = () => {
    return (
        <section>
            <Suspense
                fallback={
                    <div className={classes.empty}>
                        Loading...
                        <Loading />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact>
                        <div className={classes.empty}>
                            <p>
                                Please select an item from the showcase to see
                                it here.
                            </p>
                            <p>
                                Get started by clicking the arrow to the right.
                            </p>
                        </div>
                    </Route>
                    <Route path="/click-in-box">
                        <ClickInBox />
                    </Route>
                    <Route path="/concentric-circles">
                        <ConcentricCircles />
                    </Route>
                    <Route path="/color-boxes">
                        <ColorBoxes />
                    </Route>
                    <Route path="/filter-generator">
                        <FilterGenerator />
                    </Route>
                    <Route path="/invert-button">
                        <InvertButton />
                    </Route>
                    <Route path="*">
                        <div className={classes.empty}>
                            Rut roh! The component couldn't load. Please tell
                            Ben what you were trying to do, but if you don't
                            want to, click on another component. Hopefully it
                            will work.
                        </div>
                    </Route>
                </Switch>
            </Suspense>
        </section>
    );
};

export default Showcase;
