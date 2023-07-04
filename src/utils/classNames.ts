export type TextColor = "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error";

export function getTextColorClassName(color?: TextColor) {
    switch(color) {
        case "primary": return "text-primary";
        case "secondary": return "text-secondary";
        case "accent": return "text-accent";
        case "neutral": return "text-neutral";
        case "info": return "text-info";
        case "success": return "text-success";
        case "warning": return "text-warning";
        case "error": return "text-error";
        default: return undefined;
    }
}