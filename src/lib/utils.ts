import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function getRandomIndex(currentIndex: number, length: number) {
    const newIndex = Math.floor(Math.random() * (length - 1));
    return newIndex >= currentIndex ? newIndex + 1 : newIndex;
}
