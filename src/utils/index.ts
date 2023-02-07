export const CONTAINER = "max-w-screen-xl mx-auto px-2 lg:px-8";

export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);
