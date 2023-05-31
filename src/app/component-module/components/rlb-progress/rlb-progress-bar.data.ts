export interface RlbProgressData {
    value: number;
    type: "success" | "info" | "warning" | "danger" | "primary" | "secondary" | "dark";
    text: string;
}