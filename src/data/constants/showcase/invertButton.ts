import { capitalizeEveryWord } from "@Util/strings";

export const possibleCorners: CornerAbbr[] = ['tl', 'tr', 'br', 'bl'];

export const cornerToPosition: CornerToPosition = {
    'tl': {
        top: '0',
        left: '0'
    },
    'tr': {
        top: '0',
        right: '0'
    },
    'br': {
        bottom: '0',
        right: '0'
    },
    'bl': {
        bottom: '0',
        left: '0'
    }
}
export const availableTransformOrigin: CornerToFull = {
    'tl': 'top left',
    'tr': 'top right',
    'br': 'bottom right',
    'bl': 'bottom left'
};

export const tranformOriginAsSelectOptions: SelectOption[] = Object.keys(availableTransformOrigin).map(
    (corner: string) => ({
        value: corner,
        display: capitalizeEveryWord(availableTransformOrigin[corner as CornerAbbr])
    })
);

export const availableClipshapes: CornerToClipshape = {
    'tl': 'polygon(0% 0%, 100% 0%, 0% 100%)',
    'tr': 'polygon(0% 0%, 100% 0%, 100% 100%)',
    'br': 'polygon(100% 0%, 100% 100%, 0% 100%)',
    'bl': 'polygon(0% 0%, 0% 100%, 100% 100%)'
};

// In percent
export const BUTTON_SIZE: RangeValues = {
    min: 5,
    max: 75,
    step: 1
};

// In milliseconds
export const ANIMATION_SPEED: RangeValues = {
    min: 400,
    max: 5000,
    step: 20
};