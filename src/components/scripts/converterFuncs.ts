type GameName = 
    | "Apex Legends"
    | "Battlefield 1"
    | "Battlefield 4"
    | "Battlefield 6"
    | "Battlefield 2042"
    | "Battlefield V"
    | "Call of Duty: Black Ops 6"
    | "Call of Duty: Modern Warfare 3 (2023)"
    | "Call of Duty: Warzone"
    | "Counter Strike 2"
    | "Team Fortress 2"
    | "Valorant"

type GameConfig = {
    scaleFactors: Record<GameName, number>;
    Image: string;
}

export const games: Record<GameName, GameConfig> = {
    "Apex Legends": {
        scaleFactors: {
            "Apex Legends": 1,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.022 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.022 / 0.0066,
            "Call of Duty: Warzone": 0.022 / 0.0066,
            "Counter Strike 2": 1,
            "Team Fortress 2": 1,
            "Valorant": 0.022 / 0.07
        },
        "Image": "/apex.jpg"
    },
    "Battlefield 1": {
        scaleFactors: {
            "Apex Legends": 0.008495 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.008495 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.008495 / 0.0066,
            "Call of Duty: Warzone": 0.008495 / 0.0066,
            "Counter Strike 2": 0.008495 / 0.022,
            "Team Fortress 2": 0.008495 / 0.022,
            "Valorant": 0.008495 / 0.07
        },
        "Image": "/bf1.avif"
    },
    "Battlefield 4": {
        scaleFactors: {
            "Apex Legends": 0.008495 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.008495 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.008495 / 0.0066,
            "Call of Duty: Warzone": 0.008495 / 0.0066,
            "Counter Strike 2": 0.008495 / 0.022,
            "Team Fortress 2": 0.008495 / 0.022,
            "Valorant": 0.008495 / 0.07
        },
        "Image": "/bf4.avif"
    },
    "Battlefield 6": {
        scaleFactors: {
            "Apex Legends": 0.00197355 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.00197355 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.00197355 / 0.0066,
            "Call of Duty: Warzone": 0.00197355 / 0.0066,
            "Counter Strike 2": 0.00197355 / 0.022,
            "Team Fortress 2": 0.00197355 / 0.022,
            "Valorant": 0.00197355 / 0.07
        },
        "Image": "/BF6.jpg"
    },
    "Battlefield 2042": {
        scaleFactors: {
            "Apex Legends": 0.008495 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.008495 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.008495 / 0.0066,
            "Call of Duty: Warzone": 0.008495 / 0.0066,
            "Counter Strike 2": 0.008495 / 0.022,
            "Team Fortress 2": 0.008495 / 0.022,
            "Valorant": 0.008495 / 0.07
        },
        "Image": "/bf2042.jpg"
    },
    "Battlefield V": {
        scaleFactors: {
            "Apex Legends": 0.008495 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.008495 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.008495 / 0.0066,
            "Call of Duty: Warzone": 0.008495 / 0.0066,
            "Counter Strike 2": 0.008495 / 0.022,
            "Team Fortress 2": 0.008495 / 0.022,
            "Valorant": 0.008495 / 0.07
        },
        "Image": "/bf5.avif"
    },
    "Call of Duty: Black Ops 6": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Team Fortress 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/bo6.avif"
    },
    "Call of Duty: Modern Warfare 3 (2023)": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Team Fortress 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/mw3.avif"
    },
    "Call of Duty: Warzone": {
        scaleFactors: {
            "Apex Legends": 0.0066 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 1,
            "Call of Duty: Modern Warfare 3 (2023)": 1,
            "Call of Duty: Warzone": 1,
            "Counter Strike 2": 0.0066 / 0.022,
            "Team Fortress 2": 0.0066 / 0.022,
            "Valorant": 0.0066 / 0.07
        },
        "Image": "/warzone2.jpg"
    },
    "Counter Strike 2": {
        scaleFactors: {
            "Apex Legends": 1,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.022 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.022 / 0.0066,
            "Call of Duty: Warzone": 0.022 / 0.0066,
            "Counter Strike 2": 1,
            "Team Fortress 2": 1,
            "Valorant": 0.022 / 0.07,
        },
        "Image": "/cs2.jpg"
    },
    "Team Fortress 2": {
        scaleFactors: {
            "Apex Legends": 1,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.022 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.022 / 0.0066,
            "Call of Duty: Warzone": 0.022 / 0.0066,
            "Counter Strike 2": 1,
            "Team Fortress 2": 1,
            "Valorant": 0.022 / 0.07,
        },
        "Image": "/tf2.png"
    },
    "Valorant": {
        scaleFactors: {
            "Apex Legends": 0.07 / 0.022,
            "Battlefield 1": 0.022 / 0.008495,
            "Battlefield 4": 0.022 / 0.008495,
            "Battlefield 6": 0.022 / 0.00197355,
            "Battlefield 2042": 0.022 / 0.008495,
            "Battlefield V": 0.022 / 0.008495,
            "Call of Duty: Black Ops 6": 0.07 / 0.0066,
            "Call of Duty: Modern Warfare 3 (2023)": 0.07 / 0.0066,
            "Call of Duty: Warzone": 0.07 / 0.0066,
            "Counter Strike 2": 0.07 / 0.022,
            "Team Fortress 2": 0.07 / 0.022,
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