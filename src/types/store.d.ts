type OptionsState = {
    showControls: boolean;
    toggleControls: () => void;
    showDescription: boolean;
    toggleDescription: () => void;
    shownItem: ShowcaseItem;
    setShowcaseItem: (item: ShowcaseItem) => void;
}