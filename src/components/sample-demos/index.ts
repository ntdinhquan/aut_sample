export const sampleDemos: Record<string, () => Promise<{ default: React.FC }>> = {
    "button-basic": () => import("./button-basic"),
    "input-basic": () => import("./input-basic"),
    "checkbox-basic": () => import("./checkbox-basic"),
    "select-sample": () => import("./select-sample"),
    "textarea-sample": () => import("./textarea-sample"),
    "div-basic": () => import("./div-basic"),
    "span-basic": () => import("./span-basic"),
    "h2-basic": () => import("./h2-basic"),
    "label-basic": () => import("./label-basic"),
    "input-button": () => import("./input-button"),
    "input-email": () => import("./input-email"),
    "input-multi-type": () => import("./input-multi-type"),
};
