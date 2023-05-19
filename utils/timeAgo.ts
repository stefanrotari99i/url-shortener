// convert created_at to time ago
export const timeAgo = (date: string) => {
    const time = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = now - time;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    if (days < 7) {
        return `${days} days ago`;
    }
    return new Date(date).toLocaleDateString();
};