export const sampleDemos: Record<string, () => Promise<{ default: React.FC }>> = {
    "button-basic": () => import("./button-basic"),
    "input-basic": () => import("./input-basic"),
    "checkbox-basic": () => import("./checkbox-basic"),
};
