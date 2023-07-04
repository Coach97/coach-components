import { getIcon, IconName, IconType } from "../../utils/icons";
import { useMemo, ReactNode } from "react";
import classNames from "classnames";

export interface IIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    iconName: IconName;
    iconType: IconType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function getSizeClassName(size?: IIconProps["size"]) {
    switch(size) {
        case "xs": return "w-2 h-2";
        case "sm": return "w-3 h-3";
        case "md": return "w-4 h-4";
        case "lg": return "w-5 h-5";
        case "xl": return "w-6 h-6";
    }
    return "w-4 h-4";
}

export function Icon(props: IIconProps) {
    const { iconName, iconType, size, ...svgProps } = props;
    const elem: ReactNode = useMemo(() => {
        const IconSvg = getIcon(iconName, iconType);
        if (!IconSvg) return null;
        return <IconSvg {...svgProps} className={classNames("icon", getSizeClassName(size), props.className)} />;
    }, [props, iconName, iconType, size]);
    return elem;
}