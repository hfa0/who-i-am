import { birthday } from "../config/me.json";

export const myAge = () => Math.floor((Date.now() - new Date(birthday).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
