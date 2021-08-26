import React, { useState, createContext } from 'react';

import useRange from "@Hooks/useRange";
import useSelect from '@Hooks/useSelect';
import useColor from '@Hooks/useColor';
import useToggle from '@Hooks/useToggle';

import { possibleCorners, BUTTON_SIZE, ANIMATION_SPEED } from '@Constants/showcase/invertButton'

import { defaultState } from './defaultState';

const InvertButtonContext = createContext(defaultState);

export const InvertButtonContextProvider: React.FC = ({ children }) => {
    const [text, setText] = useState<string>(defaultState.text);
    const [width, setWidth] = useRange(defaultState.width, BUTTON_SIZE);
    const [height, setHeight] = useRange(defaultState.height, BUTTON_SIZE);
    const [animationSpeed, setAnimationSpeed] = useRange(defaultState.animationSpeed, ANIMATION_SPEED);
    const [origin, setOrigin] = useSelect<CornerAbbr>(
        defaultState.origin,
        possibleCorners
    );
    const [backgroundColor, setBackground] = useColor(defaultState.backgroundColor);
    const [foregroundColor, setForeground] = useColor(defaultState.foregroundColor);

    const [showOverflow, toggleShowOverflow] = useToggle(defaultState.showOverflow);

    const value: InvertButtonState = {
        text,
        width,
        height,
        animationSpeed,
        origin,
        backgroundColor,
        foregroundColor,
        showOverflow,
        setText,
        setWidth,
        setHeight,
        setAnimationSpeed,
        setOrigin,
        setBackground,
        setForeground,
        toggleShowOverflow
    }
    return (
        <InvertButtonContext.Provider value={value}>
            {children}
        </InvertButtonContext.Provider>
    )
}

export default InvertButtonContext;