import { TextColor, getTextColorClassName } from "../../utils/classNames";
import classNames from "classnames";
import { useMemo } from "react";

export interface ILoadingProps extends React.ComponentPropsWithoutRef<"div"> {
    size?: "xs" | "sm" | "md" | "lg";
    color?: TextColor;
    type?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
}

function getLoadingSizeClassName(size?: ILoadingProps["size"]) {
    switch(size) {
        case "xs": return "loading-xs";
        case "sm": return "loading-sm";
        case "md": return "loading-md";
        case "lg": return "loading-lg";
    }
    return undefined;
}

function getLoadingTypeClassName(type?: ILoadingProps["type"]) {
    switch(type) {
        case "spinner": return "loading-spinner";
        case "dots": return "loading-dots";
        case "ring": return "loading-ring";
        case "ball": return "loading-ball";
        case "bars": return "loading-bars";
        case "infinity": return "loading-infinity";
    }
    return undefined;
}

export function Loading(props: ILoadingProps) {
    const {size, type, color, ...divProps} = props;
    const sizeClassName = useMemo(() => getLoadingSizeClassName(size), [size]);
    const typeClassName = useMemo(() => getLoadingTypeClassName(type), [type]);
    const colorClassName = useMemo(() => getTextColorClassName(color), [color]);

    return <div {...divProps} className={classNames("loading", sizeClassName, typeClassName, colorClassName, props.className)}></div>;
}