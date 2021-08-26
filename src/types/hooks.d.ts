type RangeHook = (defaultValue: number, rangeConstant: RangeValues) => [number, (newValue: number) => void];
type ColorHook = (defaultColor: string) => [string, (newColor: string) => void];
type ToggleHook = (defaultValue: boolean) => [boolean, () => void];
type SelectHook = <T extends string>(defaultVal: T, options: T[]) => [T, (newVal: T) => void];