import React, { useContext } from "react";

import OptionsContext from "@Store/Options/Options.context";
import { InvertButtonContextProvider } from "@InvertButtonContext";

import InvertedButton from './InvertedButton/InvertedButton.component';
import InvertButtonControls from './InvertButtonsControls/InvertButtonControls.component'

import ShowcaseItem from "@Comp/UI/ShowcaseItem/ShowcaseItem.component";
import Description from "@Comp/UI/Description/Description.component";

const InvertButton: React.FC = () => {
    const optionsCtx = useContext(OptionsContext);
    return (
        <InvertButtonContextProvider>
            <ShowcaseItem
                controls={<InvertButtonControls />}
                description={
                    <Description
                        description={optionsCtx.shownItem.description}
                        meta={optionsCtx.shownItem.meta}
                    />
                }
            >
                <InvertedButton />
            </ShowcaseItem>
        </InvertButtonContextProvider>
    );
};

export default InvertButton;
