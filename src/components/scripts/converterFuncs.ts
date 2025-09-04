type GameName = 
    | "Apex Legends"
    | "Call of Duty: Black Ops 6"
    | "Call of Duty: Modern Warfare 3 (2023)"
    | "Call of Duty: Warzone"
    | "Counter Strike 2"
    | "Valorant"

type GameConfig = {
    scaleFactors: Record<GameName, number>;
    Image: string;
}

export const games: Record<GameName, GameConfig> = {
    "Apex Legends": {
        scaleFactors: {
            "Apex Legends": 1,
            "Call of Duty: Black Ops 6": 0.022 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.022 / 0.0066,
            "Call of Duty: Warzone": 0.022 / 0.0066,
            "Counter Strike 2": 1,
            "Valorant": 0.022 / 0.07
        },
        "Image": "/apex.jpg"
    },
    "Call of Duty: Black Ops 6": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/bo6.avif"
    },
    "Call of Duty: Modern Warfare 3 (2023)": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/mw3.avif"
    },
    "Call of Duty: Warzone": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/warzone2.jpg"
    },
    "Counter Strike 2": {
        scaleFactors: {
            "Apex Legends": 1,
            "Call of Duty: Black Ops 6": 0.022 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.022 / 0.0066,
            "Call of Duty: Warzone": 0.022 / 0.0066,
            "Counter Strike 2": 1,
            "Valorant": 0.022 / 0.07,
        },
        "Image": "/cs2.jpg"
    },
    "Valorant": {
        scaleFactors: {
            "Apex Legends": 0.07 / 0.022,
            "Call of Duty: Black Ops 6": 0.07 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.07 / 0.0066,
            "Call of Duty: Warzone": 0.07 / 0.0066,
            "Counter Strike 2": 0.07 / 0.022,
            "Valorant": 1,
        },
        "Image": "/valorant.jpg"
    },
} as const;

export function CalculateSensitivity(sens: number, DPI1: number, DPI2: number, from: GameName, to: GameName) {
    const factor = games[from].scaleFactors[to];
    const result = sens * (DPI1 / DPI2) * factor;

    return Number(result.toFixed(2));
}

export function GameImage(gameName: GameName) {
    const result = games[gameName].Image;
    console.log(result)
    return result;
}