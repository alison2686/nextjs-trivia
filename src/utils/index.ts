export const CONTAINER = "flex items-center justify-center h-screen w-screen";

export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);
