interface IItemWithId {
    id: string | number;
    [key: string]: any;
}

type LazyComponent = React.LazyExoticComponent<React.FC<{}>> | undefined;

type LazyComponentContainer = {
    [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
}

interface IEnum {
    [key: number]: any;
}

type Coords = {
    x: number;
    y: number;
}

type Corners = {
    topLeft: Coords;
    topRight: Coords;
    bottomRight: Coords;
    bottomLeft: Coords;
}