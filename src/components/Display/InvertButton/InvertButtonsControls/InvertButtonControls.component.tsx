import React, { useContext } from "react";

import InvertButtonContext from "@InvertButtonContext";

import { ANIMATION_SPEED, BUTTON_SIZE, tranformOriginAsSelectOptions } from "@ShowcaseConstants/invertButton";

import Select from "@Inputs/Select/Select.component";
import TextInput from "@Inputs/TextInput/TextInput.component";
import Range from "@Inputs/Range/Range.component";
import ColorPicker from "@Inputs/ColorPicker/ColorPicker.component";
import Checkbox from "@Comp/Inputs/Checkbox/Checkbox.component";

const InvertButtonControls: React.FC = () => {
    const invertButtonCtx = useContext(InvertButtonContext);
    return (
        <aside>
            <TextInput
                value={invertButtonCtx.text}
                handleChange={(e: React.FormEvent<HTMLInputElement>) => invertButtonCtx.setText(e.currentTarget.value)}
                name='invert-button-label-text'
                labelText='Button Text'
            />
            <Range
                rangeConsts={BUTTON_SIZE}
                value={invertButtonCtx.height}
                handleRangeChange={invertButtonCtx.setHeight}
                labelText='Height (%)'
                name='invert-button-height'
            />
            <Range
                rangeConsts={BUTTON_SIZE}
                value={invertButtonCtx.width}
                handleRangeChange={invertButtonCtx.setWidth}
                labelText='Width (%)'
                name='invert-button-width'
            />
            <Range
                rangeConsts={ANIMATION_SPEED}
                value={invertButtonCtx.animationSpeed}
                handleRangeChange={invertButtonCtx.setAnimationSpeed}
                labelText='Animation Speed (ms)'
                name='invert-button-anim-speed'
            />
            <Select
                handleChange={(val) => invertButtonCtx.setOrigin(val as CornerAbbr)}
                options={tranformOriginAsSelectOptions}
                value={invertButtonCtx.origin}
                name='invert-button-select-origin'
                labelText='Animation Origin'
            />
            <ColorPicker
                color={invertButtonCtx.backgroundColor}
                handleColorChange={invertButtonCtx.setBackground}
                name='invert-button-background-picker'
                labelText='Background Color'
            />
            <ColorPicker
                color={invertButtonCtx.foregroundColor}
                handleColorChange={invertButtonCtx.setForeground}
                name='invert-button-foreground-picker'
                labelText='Foreground Color'
            />
            <Checkbox
                value={invertButtonCtx.showOverflow}
                handleToggle={invertButtonCtx.toggleShowOverflow}
                name='invert-button-show-overflow'
                labelText='Show Overflow'
            />
        </aside>
    );
};

export default InvertButtonControls;
