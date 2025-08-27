export function calcSensCS2ToBF2042(sens1: number, DPI1: number, DPI2: number) {
    const CS2toBF2042ScaleFactor = 1.666667;
    const result = (sens1 * (DPI1 / DPI2)) * CS2toBF2042ScaleFactor;
    return Number(result.toFixed(2));
}

export function calcSensBF2042ToCS2(sens1: number, DPI1: number, DPI2: number) {
    const BF2042toCS2ScaleFactor = 0.6;
    const result = (sens1 * (DPI1 / DPI2)) * BF2042toCS2ScaleFactor;
    return Number(result.toFixed(2));
}

export function calcSensCS2toVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.07);
    return Number(result.toFixed(2));
}

export function calcSensValToCS2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.022);
    return Number(result.toFixed(2));
}

export function calcSensCS2ToWarzone2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.0066);
    return Number(result.toFixed(2));
}

export function calcSensWarzone2ToCS2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.022);
    return Number(result.toFixed(2));
}

export function calcSensBF2042ToVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.07);
    return Number(result.toFixed(2));
}

export function calcSensValToBF2042(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.0066);
    return Number(result.toFixed(2));
}

export function calcSensBF2042ToWarzone2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0132 / 0.0066);
    return Number(result.toFixed(2));
}

export function calcSensWarzone2ToBF2042(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.0132);
    return Number(result.toFixed(2));
}

export function calcSensValToWarzone2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.0066);
    return Number(result.toFixed(2));
}

export function calcSensWarzone2ToVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.07);
    return Number(result.toFixed(2));
}

export function calcSensApexToBF2042(sens1: number, DPI1: number, DPI2: number) {
    const CS2toBF2042ScaleFactor = 1.666667;
    const result = (sens1 * (DPI1 / DPI2)) * CS2toBF2042ScaleFactor;
    return Number(result.toFixed(2));
}

export function calcSensBF2042ToApex(sens1: number, DPI1: number, DPI2: number) {
    const BF2042toCS2ScaleFactor = 0.6;
    const result = (sens1 * (DPI1 / DPI2)) * BF2042toCS2ScaleFactor;
    return Number(result.toFixed(2));
}

export function calcSensApexToVal(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.07);
    return Number(result.toFixed(2));
}

export function calcSensValToApex(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.022);
    return Number(result.toFixed(2));
}

export function calcSensApexToWarzone2(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.0066);
    return Number(result.toFixed(2));
}

export function calcSensWarzone2ToApex(sens1: number, DPI1: number, DPI2: number) {
    const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.022);
    return Number(result.toFixed(2));
}