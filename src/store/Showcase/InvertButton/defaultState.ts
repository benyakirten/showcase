export const defaultState: InvertButtonState = {
    text: 'Hover Me',
    width: 50,
    height: 50,
    animationSpeed: 800,
    origin: 'tl',
    backgroundColor: '#000000',
    foregroundColor: '#ffffff',
    showOverflow: false,
    setText: (_: string) => {},
    setWidth: (_: number) => {},
    setHeight: (_: number) => {},
    setAnimationSpeed: (_: number) => {},
    setOrigin: (_: CornerAbbr) => {},
    setBackground: (_: string) => {},
    setForeground: (_: string) => {},
    toggleShowOverflow: () => {}
};