interface IClickListProps {
    list: Array<any>;
    itemKey: string;
    handleClick: (e: any) => void;
}

interface LabelProps {
    htmlFor: string;
    children: string;
    explanation?: string;
}

interface IBaseInput {
    name: string;
    labelText: string;
    additionalText?: string;
}

interface ICheckboxProps extends IBaseInput {
    value: boolean;
    handleToggle: () => void;
}

interface ITextInputProps extends IBaseInput {
    value: string | number;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface ISelectProps extends IBaseInput {
    handleChange: (val: string | number | Array<any> | SelectOption) => void;
    options: Array<SelectOption>;
    value: SelectOption["value"];
}

type SelectOption = {
    value: string;
    display: string;
}

interface IColorPickerProps extends IBaseInput {
    color: string;
    handleColorChange: (val: string) => void;
}

interface IRangeProps extends IBaseInput {
    rangeConsts: RangeValues;
    value: number;
    additionalText?: string;
    handleRangeChange: (n: number) => void;
}

type DragDropItem = {
    value: string;
    id: string;
}

type DragDropProps = {
    name: string;
    leftList: Array<DragDropItem>;
    leftTitle: string;
    rightList: Array<DragDropItem>;
    rightTitle: string;
    handleChange: (e: string) => void;
}