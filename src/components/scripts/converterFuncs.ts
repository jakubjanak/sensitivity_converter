// export function calcSensCS2ToBF2042(sens1: number, DPI1: number, DPI2: number) {
//     const CS2toBF2042ScaleFactor = 1.666667;
//     const result = (sens1 * (DPI1 / DPI2)) * CS2toBF2042ScaleFactor;
//     return Number(result.toFixed(2));
// }

// export function calcSensBF2042ToCS2(sens1: number, DPI1: number, DPI2: number) {
//     const BF2042toCS2ScaleFactor = 0.6;
//     const result = (sens1 * (DPI1 / DPI2)) * BF2042toCS2ScaleFactor;
//     return Number(result.toFixed(2));
// }

// export function calcSensCS2toVal(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.07);
//     return Number(result.toFixed(2));
// }

// export function calcSensValToCS2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.022);
//     return Number(result.toFixed(2));
// }

// export function calcSensCS2ToWarzone2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.0066);
//     return Number(result.toFixed(2));
// }

// export function calcSensWarzone2ToCS2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.022);
//     return Number(result.toFixed(2));
// }

// export function calcSensBF2042ToVal(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.07);
//     return Number(result.toFixed(2));
// }

// export function calcSensValToBF2042(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.0066);
//     return Number(result.toFixed(2));
// }

// export function calcSensBF2042ToWarzone2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0132 / 0.0066);
//     return Number(result.toFixed(2));
// }

// export function calcSensWarzone2ToBF2042(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.0132);
//     return Number(result.toFixed(2));
// }

// export function calcSensValToWarzone2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.0066);
//     return Number(result.toFixed(2));
// }

// export function calcSensWarzone2ToVal(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.07);
//     return Number(result.toFixed(2));
// }

// export function calcSensApexToBF2042(sens1: number, DPI1: number, DPI2: number) {
//     const CS2toBF2042ScaleFactor = 1.666667;
//     const result = (sens1 * (DPI1 / DPI2)) * CS2toBF2042ScaleFactor;
//     return Number(result.toFixed(2));
// }

// export function calcSensBF2042ToApex(sens1: number, DPI1: number, DPI2: number) {
//     const BF2042toCS2ScaleFactor = 0.6;
//     const result = (sens1 * (DPI1 / DPI2)) * BF2042toCS2ScaleFactor;
//     return Number(result.toFixed(2));
// }

// export function calcSensApexToVal(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.07);
//     return Number(result.toFixed(2));
// }

// export function calcSensValToApex(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.07 / 0.022);
//     return Number(result.toFixed(2));
// }

// export function calcSensApexToWarzone2(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.022 / 0.0066);
//     return Number(result.toFixed(2));
// }

// export function calcSensWarzone2ToApex(sens1: number, DPI1: number, DPI2: number) {
//     const result = sens1 * (DPI1 / DPI2) * (0.0066 / 0.022);
//     return Number(result.toFixed(2));
// }

export const games = {
    "Counter Strike 2": {
        "scaleFactors": {
            "Valorant": 0.314,
            "Apex Legends": 1,
            "Call of Duty: Warzone": 3.333,
            "Counter Strike 2": 1,
            "Battlefield 1": 3.066,
            "Battlefield 2042": 3.066,
            "Battlefield 4": 3.066,
            "Battlefield 6": 11.338,
            "Battlefield 5": 3.066,
            "Call of Duty: Black Ops 6": 3.333,
            "Call of Duty: Modern Warfare 3 (2023)": 3.333,
            "Delta Force": 2.200,
            "Fortnite": 3.960,
            "Fragpunk": 0.396,
            "Heroes & Generals": 0.145,
            "Hunt: Showdown": 0.512,
            "Insurgency: Sandstorm": 0.157,
            "Overwatch 2": 3.333,
            "PAYDAY 2": 1.467,
            "PUBG": 31.714,
            "Rainbow Six Extraction": 3.840,
            "Rainbow Six Siege": 3.840,
            "Rust": 0.196,
            "THE FINALS": 22.000,
            "Counter Strike 1.6": 1,
            "Team Fortress 2": 1,
        },
        "Image": "/cs2.jpg"
    },
    "Apex Legends": {
        "scaleFactors": {
            "Apex Legends": 1,
            "Valorant": 0.314,
            "Counter Strike 2": 1,
            "Call of Duty: Warzone": 3.333,
            "Battlefield 1": 3.066,
            "Battlefield 2042": 3.066,
            "Battlefield 4": 3.066,
            "Battlefield 6": 11.338,
            "Battlefield 5": 3.066,
            "Call of Duty: Black Ops 6": 3.333,
            "Call of Duty: Modern Warfare 3 (2023)": 3.333,
            "Delta Force": 2.200,
            "Fortnite": 3.960,
            "Fragpunk": 0.396,
            "Heroes & Generals": 0.145,
            "Hunt: Showdown": 0.512,
            "Insurgency: Sandstorm": 0.157,
            "Overwatch 2": 3.333,
            "PAYDAY 2": 1.467,
            "PUBG": 31.714,
            "Rainbow Six Extraction": 3.840,
            "Rainbow Six Siege": 3.840,
            "Rust": 0.196,
            "THE FINALS": 22.000,
            "Counter Strike 1.6": 1,
            "Team Fortress 2": 1
        },
        "Image": "/apex.jpg"
    },
    "Battlefield 1": {
        "scaleFactors": {
            "Apex Legends": 0.677,
            "Battlefield 2042": 1,
            "Battlefield 1": 1,
            "Battlefield 4": 1,
            "Battlefield 6": 7.247,
            "Battlefield V": 1,
            "Call of Duty: Black Ops 6": 2.257,
            "Call of Duty: Modern Warfare 3": 2.257,
            "Call of Duty: Warzone": 2.257,
            "Counter Strike 1.6": 0.677,
            "Counter Strike 2": 0.677,
            "Delta Force": 1.490,
            "Fortnite": 2.682,
            "Fragpunk": 0.268,
            "Heroes & Generals": 0.098,
            "Hunt: Showdown": 0.347,
            "Insurgency: Sandstorm": 0.106,
            "Overwatch 2": 2.257,
            "PAYDAY 2": 0.993,
            "PUBG": 23.226,
            "Rainbow Six Extraction": 2.600,
            "Rainbow Six Siege": 2.600,
            "Rust": 0.132,
            "Team Fortress 2": 0.677,
            "THE FINALS": 14.897,
            "Valorant": 0.213
        },
        "Image": "/bf1.avif"
    },
    "Battlefield 2042": {
        "scaleFactors": {
            "Apex Legends": 0.677,
            "Battlefield 2042": 1,
            "Battlefield 1": 1,
            "Battlefield 4": 1,
            "Battlefield 6": 7.247,
            "Battlefield V": 1,
            "Call of Duty: Black Ops 6": 2.257,
            "Call of Duty: Modern Warfare 3": 2.257,
            "Call of Duty: Warzone": 2.257,
            "Counter Strike 1.6": 0.677,
            "Counter Strike 2": 0.677,
            "Delta Force": 1.490,
            "Fortnite": 2.682,
            "Fragpunk": 0.268,
            "Heroes & Generals": 0.098,
            "Hunt: Showdown": 0.347,
            "Insurgency: Sandstorm": 0.106,
            "Overwatch 2": 2.257,
            "PAYDAY 2": 0.993,
            "PUBG": 23.226,
            "Rainbow Six Extraction": 2.600,
            "Rainbow Six Siege": 2.600,
            "Rust": 0.132,
            "Team Fortress 2": 0.677,
            "THE FINALS": 14.897,
            "Valorant": 0.213
        },
        "Image": "/bf2042.jpg"
    },
    "Battlefield 4": {
        "scaleFactors": {
            "Apex Legends": 0.677,
            "Battlefield 2042": 1,
            "Battlefield 1": 1,
            "Battlefield 4": 1,
            "Battlefield 6": 7.247,
            "Battlefield V": 1,
            "Call of Duty: Black Ops 6": 2.257,
            "Call of Duty: Modern Warfare 3": 2.257,
            "Call of Duty: Warzone": 2.257,
            "Counter Strike 1.6": 0.677,
            "Counter Strike 2": 0.677,
            "Delta Force": 1.490,
            "Fortnite": 2.682,
            "Fragpunk": 0.268,
            "Heroes & Generals": 0.098,
            "Hunt: Showdown": 0.347,
            "Insurgency: Sandstorm": 0.106,
            "Overwatch 2": 2.257,
            "PAYDAY 2": 0.993,
            "PUBG": 23.226,
            "Rainbow Six Extraction": 2.600,
            "Rainbow Six Siege": 2.600,
            "Rust": 0.132,
            "Team Fortress 2": 0.677,
            "THE FINALS": 14.897,
            "Valorant": 0.213
        },
        "Image": "/bf4.avif"
    },
    "Battlefield 6": {
        "scaleFactors": {
            "Apex Legends": 0.184,
            "Battlefield 2042": -2.155,
            "Battlefield 1": -2.155,
            "Battlefield 4": -2.155,
            "Battlefield 6": 1,
            "Battlefield V": -2.155,
            "Call of Duty: Black Ops 6": 0.614,
            "Call of Duty: Modern Warfare 3": 0.614,
            "Call of Duty: Warzone": 0.614,
            "Counter Strike 1.6": 0.184,
            "Counter Strike 2": 0.184,
            "Delta Force": 0.405,
            "Fortnite": 0.729,
            "Fragpunk": 0.073,
            "Heroes & Generals": 0.027,
            "Hunt: Showdown": 0.094,
            "Insurgency: Sandstorm": 0.029,
            "Overwatch 2": 0.614,
            "PAYDAY 2": 0.270,
            "PUBG": -5.120,
            "Rainbow Six Extraction": 0.707,
            "Rainbow Six Siege": 0.707,
            "Rust": 0.036,
            "Team Fortress 2": 0.184,
            "THE FINALS": 4.051,
            "Valorant": 0.058
        },
        "Image": "/BF6.jpg"
    },
    "Battlefield V": {
        "scaleFactors": {
            "Apex Legends": 0.677,
            "Battlefield 2042": 1,
            "Battlefield 1": 1,
            "Battlefield 4": 1,
            "Battlefield 6": 7.247,
            "Battlefield V": 1,
            "Call of Duty: Black Ops 6": 2.257,
            "Call of Duty: Modern Warfare 3": 2.257,
            "Call of Duty: Warzone": 2.257,
            "Counter Strike 1.6": 0.677,
            "Counter Strike 2": 0.677,
            "Delta Force": 1.490,
            "Fortnite": 2.682,
            "Fragpunk": 0.268,
            "Heroes & Generals": 0.098,
            "Hunt: Showdown": 0.347,
            "Insurgency: Sandstorm": 0.106,
            "Overwatch 2": 2.257,
            "PAYDAY 2": 0.993,
            "PUBG": 23.226,
            "Rainbow Six Extraction": 2.600,
            "Rainbow Six Siege": 2.600,
            "Rust": 0.132,
            "Team Fortress 2": 0.677,
            "THE FINALS": 14.897,
            "Valorant": 0.213
        },
        "Image": "/bf5.avif"
    },
    "Call of Duty: Black Ops 6": {
        "scaleFactors": {
            "Apex Legends": 0.300,
            "Battlefield 2042": -1.413,
            "Battlefield 1": -1.413,
            "Battlefield 4": -1.413,
            "Battlefield 6": 2.468,
            "Battlefield V": -1.413,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 1.6": 0.300,
            "Counter Strike 2": 0.300,
            "Delta Force": 0.660,
            "Fortnite": 1.188,
            "Fragpunk": 0.119,
            "Heroes & Generals": 0.044,
            "Hunt: Showdown": 0.154,
            "Insurgency: Sandstorm": 0.047,
            "Overwatch 2": 1,
            "PAYDAY 2": 0.440,
            "PUBG": 5.505,
            "Rainbow Six Extraction": 1.152,
            "Rainbow Six Siege": 1.152,
            "Rust": 0.059,
            "Team Fortress 2": 0.300,
            "THE FINALS": 6.600,
            "Valorant": 0.094
        },
        "Image": "/bo6.avif"
    }
} as const;

type Games = typeof games;
export type FromGame = keyof Games;
export type ToGame<F extends FromGame> = keyof Games[F]["scaleFactors"];

export function CalculateSensitivity<F extends FromGame, T extends ToGame<F>>(sens: number, DPI1: number, DPI2: number, fromGame: F, toGame: T) {
    const scaleFactors = games[fromGame].scaleFactors;
    const factor = scaleFactors[toGame as keyof typeof scaleFactors];
    const result = sens * (DPI1 / DPI2) * factor;

    return Number(result.toFixed(2));
}