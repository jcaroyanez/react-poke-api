import { RGBA_COLORS } from "../definitions/constan/color-rgba";

export function getGradiend(types: string[]) {
    const [firstColor, secondColor] = types;
    return `linear-gradient(90deg, ${RGBA_COLORS[firstColor]} 40%, 
            ${RGBA_COLORS[secondColor]} 60%)`;
}