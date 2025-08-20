export function calcSensCS2ToBF2042(sens1: number, DPI1: number, DPI2: number) {
    const CS2toBF2042ScaleFactor = 1.666667;

    if (DPI1 == DPI2) {
        const result = sens1 * CS2toBF2042ScaleFactor;
        return result;
    } else {
        const result = (sens1 * (DPI1 / DPI2)) * CS2toBF2042ScaleFactor;
        return result;
    }
}