type GameName = 
    | "Apex Legends"
    | "ARK: Survival Evolved"
    | "Battlefield 1"
    | "Battlefield 4"
    | "Battlefield 6"
    | "Battlefield 2042"
    | "Battlefield V"
    | "Call of Duty: Black Ops 6"
    | "Call of Duty: Modern Warfare 3 (2023)"
    | "Call of Duty: Warzone"
    | "Counter Strike 2"
    | "Delta Force"
    | "Team Fortress 2"
    | "Valorant"

type GameConfig = {
    scaleFactors: Record<GameName, number>;
    Image: string;
}

const yaws = {
    "Apex Legends": 360 / (11.688 * 0.875 * 1600),
    "ARK: Survival Evolved": 360 / (11.688 * 0.110 * 1600),
    "Battlefield 1": 360 / (11.688 * 2.266 * 1600),
    "Battlefield 2042": 360 / (11.688 * 2.266 * 1600),
    "Battlefield 4": 360 / (11.688 * 2.266 * 1600),
    "Battlefield 6": 360 / (11.688 * 9.754 * 1600),
    "Battlefield V": 360 / (11.688 * 2.266 * 1600),
    "Call of Duty: Black Ops 6": 360 / (11.688 * 2.917 * 1600),
    "Call of Duty: Modern Warfare 3 (2023)": 360 / (11.688 * 2.917 * 1600),
    "Call of Duty: Warzone": 360 / (11.688 * 2.917 * 1600),
    "Counter Strike 2": 360 / (11.688 * 0.875 * 1600),
    "Delta Force": 360 / (11.688 * 1.925 * 1600),
    "Team Fortress 2": 360 / (11.688 * 0.875 * 1600),
    "Valorant": 360 / (11.688 * 0.275 * 1600)
}

export const games: Record<GameName, GameConfig> = {
    "Apex Legends": {
        scaleFactors: {
            "Apex Legends": yaws["Apex Legends"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Apex Legends"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Apex Legends"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Apex Legends"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Apex Legends"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Apex Legends"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Apex Legends"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Apex Legends"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Apex Legends"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Apex Legends"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Apex Legends"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Apex Legends"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Apex Legends"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Apex Legends"] / yaws.Valorant
        },
        "Image": "/apex.jpg"
    },
    "ARK: Survival Evolved": {
        scaleFactors: {
            "Apex Legends": yaws["ARK: Survival Evolved"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["ARK: Survival Evolved"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["ARK: Survival Evolved"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["ARK: Survival Evolved"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["ARK: Survival Evolved"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["ARK: Survival Evolved"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["ARK: Survival Evolved"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["ARK: Survival Evolved"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["ARK: Survival Evolved"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["ARK: Survival Evolved"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["ARK: Survival Evolved"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["ARK: Survival Evolved"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["ARK: Survival Evolved"] / yaws["Team Fortress 2"],
            "Valorant": yaws["ARK: Survival Evolved"] / yaws.Valorant
        },
        "Image": "/ark.webp"
    },
    "Battlefield 1": {
        scaleFactors: {
            "Apex Legends": yaws["Battlefield 1"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Battlefield 1"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Battlefield 1"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Battlefield 1"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Battlefield 1"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Battlefield 1"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Battlefield 1"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Battlefield 1"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Battlefield 1"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Battlefield 1"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Battlefield 1"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Battlefield 1"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Battlefield 1"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Battlefield 1"] / yaws.Valorant
        },
        "Image": "/bf1.avif"
    },
    "Battlefield 4": {
        scaleFactors: {
            "Apex Legends": yaws["Battlefield 4"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Battlefield 4"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Battlefield 4"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Battlefield 4"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Battlefield 4"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Battlefield 4"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Battlefield 4"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Battlefield 4"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Battlefield 4"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Battlefield 4"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Battlefield 4"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Battlefield 4"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Battlefield 4"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Battlefield 4"] / yaws.Valorant
        },
        "Image": "/bf4.avif"
    },
    "Battlefield 6": {
        scaleFactors: {
            "Apex Legends": yaws["Battlefield 6"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Battlefield 6"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Battlefield 6"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Battlefield 6"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Battlefield 6"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Battlefield 6"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Battlefield 6"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Battlefield 6"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Battlefield 6"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Battlefield 6"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Battlefield 6"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Battlefield 6"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Battlefield 6"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Battlefield 6"] / yaws.Valorant
        },
        "Image": "/BF6.jpg"
    },
    "Battlefield 2042": {
        scaleFactors: {
            "Apex Legends": yaws["Battlefield 2042"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Battlefield 2042"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Battlefield 2042"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Battlefield 2042"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Battlefield 2042"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Battlefield 2042"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Battlefield 2042"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Battlefield 2042"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Battlefield 2042"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Battlefield 2042"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Battlefield 2042"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Battlefield 2042"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Battlefield 2042"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Battlefield 2042"] / yaws.Valorant
        },
        "Image": "/bf2042.jpg"
    },
    "Battlefield V": {
        scaleFactors: {
            "Apex Legends": yaws["Battlefield V"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Battlefield V"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Battlefield V"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Battlefield V"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Battlefield V"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Battlefield V"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Battlefield V"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Battlefield V"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Battlefield V"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Battlefield V"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Battlefield V"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Battlefield V"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Battlefield V"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Battlefield V"] / yaws.Valorant
        },
        "Image": "/bf5.avif"
    },
    "Call of Duty: Black Ops 6": {
        scaleFactors: {
            "Apex Legends": yaws["Call of Duty: Black Ops 6"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Call of Duty: Black Ops 6"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Call of Duty: Black Ops 6"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Call of Duty: Black Ops 6"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Call of Duty: Black Ops 6"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Call of Duty: Black Ops 6"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Call of Duty: Black Ops 6"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Call of Duty: Black Ops 6"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Call of Duty: Black Ops 6"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Call of Duty: Black Ops 6"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Call of Duty: Black Ops 6"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Call of Duty: Black Ops 6"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Call of Duty: Black Ops 6"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Call of Duty: Black Ops 6"] / yaws.Valorant
        },
        "Image": "/bo6.avif"
    },
    "Call of Duty: Modern Warfare 3 (2023)": {
        scaleFactors: {
            "Apex Legends": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Call of Duty: Modern Warfare 3 (2023)"] / yaws.Valorant
        },
        "Image": "/mw3.avif"
    },
    "Call of Duty: Warzone": {
        scaleFactors: {
            "Apex Legends": yaws["Call of Duty: Warzone"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Call of Duty: Warzone"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Call of Duty: Warzone"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Call of Duty: Warzone"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Call of Duty: Warzone"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Call of Duty: Warzone"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Call of Duty: Warzone"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Call of Duty: Warzone"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Call of Duty: Warzone"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Call of Duty: Warzone"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Call of Duty: Warzone"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Call of Duty: Warzone"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Call of Duty: Warzone"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Call of Duty: Warzone"] / yaws.Valorant
        },
        "Image": "/warzone2.jpg"
    },
    "Counter Strike 2": {
        scaleFactors: {
            "Apex Legends": yaws["Counter Strike 2"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Counter Strike 2"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Counter Strike 2"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Counter Strike 2"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Counter Strike 2"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Counter Strike 2"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Counter Strike 2"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Counter Strike 2"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Counter Strike 2"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Counter Strike 2"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Counter Strike 2"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Counter Strike 2"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Counter Strike 2"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Counter Strike 2"] / yaws.Valorant
        },
        "Image": "/cs2.jpg"
    },
    "Delta Force": {
        scaleFactors: {
            "Apex Legends": yaws["Delta Force"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Delta Force"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Delta Force"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Delta Force"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Delta Force"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Delta Force"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Delta Force"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Delta Force"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Delta Force"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Delta Force"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Delta Force"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Delta Force"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Delta Force"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Delta Force"] / yaws.Valorant
        },
        "Image": "/delta_force.avif"
    },
    "Team Fortress 2": {
        scaleFactors: {
            "Apex Legends": yaws["Team Fortress 2"] / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws["Team Fortress 2"] / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws["Team Fortress 2"] / yaws["Battlefield 1"],
            "Battlefield 2042": yaws["Team Fortress 2"] / yaws["Battlefield 2042"],
            "Battlefield 4": yaws["Team Fortress 2"] / yaws["Battlefield 4"],
            "Battlefield 6": yaws["Team Fortress 2"] / yaws["Battlefield 6"],
            "Battlefield V": yaws["Team Fortress 2"] / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws["Team Fortress 2"] / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws["Team Fortress 2"] / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws["Team Fortress 2"] / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws["Team Fortress 2"] / yaws["Counter Strike 2"],
            "Delta Force": yaws["Team Fortress 2"] / yaws["Delta Force"],
            "Team Fortress 2": yaws["Team Fortress 2"] / yaws["Team Fortress 2"],
            "Valorant": yaws["Team Fortress 2"] / yaws.Valorant
        },
        "Image": "/tf2.png"
    },
    "Valorant": {
        scaleFactors: {
            "Apex Legends": yaws.Valorant / yaws["Apex Legends"],
            "ARK: Survival Evolved": yaws.Valorant / yaws["ARK: Survival Evolved"],
            "Battlefield 1": yaws.Valorant / yaws["Battlefield 1"],
            "Battlefield 2042": yaws.Valorant / yaws["Battlefield 2042"],
            "Battlefield 4": yaws.Valorant / yaws["Battlefield 4"],
            "Battlefield 6": yaws.Valorant / yaws["Battlefield 6"],
            "Battlefield V": yaws.Valorant / yaws["Battlefield V"],
            "Call of Duty: Black Ops 6": yaws.Valorant / yaws["Call of Duty: Black Ops 6"],
            "Call of Duty: Modern Warfare 3 (2023)": yaws.Valorant / yaws["Call of Duty: Modern Warfare 3 (2023)"],
            "Call of Duty: Warzone": yaws.Valorant / yaws["Call of Duty: Warzone"],
            "Counter Strike 2": yaws.Valorant / yaws["Counter Strike 2"],
            "Delta Force": yaws.Valorant / yaws["Delta Force"],
            "Team Fortress 2": yaws.Valorant / yaws["Team Fortress 2"],
            "Valorant": yaws.Valorant / yaws.Valorant
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