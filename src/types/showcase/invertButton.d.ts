type CornerAbbr = 'tl' | 'tr' | 'br' | 'bl';
type CornerPosition = '0%' | '100%';
type CornerFull = 'top left' | 'top right' | 'bottom right' | 'bottom left';
type CornerClipshape =
    'polygon(0% 0%, 100% 0%, 0% 100%)'
    | 'polygon(0% 0%, 100% 0%, 100% 100%)'
    | 'polygon(100% 0%, 100% 100%, 0% 100%)'
    | 'polygon(0% 0%, 0% 100%, 100% 100%)';

type CornerToPosition = {
    [key in CornerAbbr]: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    }
}

type CornerToFull = {
    [key in CornerAbbr]: CornerFull;
}

type CornerToClipshape = {
    [key in CornerAbbr]: CornerClipshape;
}

type InvertButtonState = {
    text: string;
    width: number;
    height: number;
    animationSpeed: number;
    origin: CornerAbbr;
    backgroundColor: string;
    foregroundColor: string;
    showOverflow: boolean;
    setText: (text: string) => void;
    setWidth: (width: number) => void;
    setHeight: (height: number) => void;
    setAnimationSpeed: (speed: number) => void;
    setOrigin: (corner: CornerAbbr) => void;
    setBackground: (color: string) => void;
    setForeground: (color: string) => void;
    toggleShowOverflow: () => void;
}