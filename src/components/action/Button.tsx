import classNames from "classnames";
import { Loading } from "../display/Loading";
import { useMemo } from "react";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "secondary" | "accent" | "neutral" | "ghost" | "info" | "success" | "warning" | "error" | "link";
    outline?: boolean;
    size?: "xs" | "sm" | "md" | "lg";
    shape?: "square" | "circle" | "wide" | "block";
    noAnimation?: boolean;
    layout?: "icon-left" | "icon-right" | "icon-above" | "icon-below" | "icon-only";
    loading?: boolean;
}

function getButtonVariantClassName(variant?: IButtonProps["variant"]) {
    switch(variant) {
        case "primary": return "btn-primary";
        case "secondary": return "btn-secondary";
        case "accent": return "btn-accent";
        case "neutral": return "btn-neutral";
        case "ghost": return "btn-ghost";
        case "info": return "btn-info";
        case "success": return "btn-success";
        case "warning": return "btn-warning";
        case "error": return "btn-error";
        case "link": return "btn-link";
    }
    return undefined;
}

function getButtonSizeClassName(size?: IButtonProps["size"]) {
    switch(size) {
        case "xs": return "btn-xs";
        case "sm": return "btn-sm";
        case "md": return "btn-md";
        case "lg": return "btn-lg";
    }
    return undefined;
}

function getButtonShapeClassName(shape?: IButtonProps["shape"]) {
    switch(shape) {
        case "square": return "btn-square";
        case "circle": return "btn-circle";
        case "wide": return "btn-wide";
        case "block": return "btn-block";
    }
    return undefined;
}

export function Button(props: React.PropsWithChildren<IButtonProps>) {
    const { variant, size, shape, noAnimation, layout, children, outline, ...btnProps } = props;
    const variantClassName = useMemo(() => getButtonVariantClassName(variant), [variant]);
    const sizeClassName = useMemo(() => getButtonSizeClassName(size), [size]);
    const shapeClassName = useMemo(() => getButtonShapeClassName(shape), [shape]);
    return (
        <button {...btnProps} type={props.type as "button" | "reset" | "submit"} className={classNames("btn", variantClassName, sizeClassName, shapeClassName, {
            "no-animation": noAnimation,
            "btn-outline": outline,
        })}>
            {props.loading && <Loading />}
            {props.children && layout !== "icon-only" && children}
        </button>
    )
}