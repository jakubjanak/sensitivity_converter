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

export function calcSensCS2toVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.07);
    return result;
}

export function calcSensValToCS2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.022);
    return result;
}

export function calcSensBF2042ToVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.07);
    return result;
}

export function calcSensWarzone2ToCS2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.022);
    return result;
}

export function calcSensCS2ToWarzone2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.0066);
    return result;
}