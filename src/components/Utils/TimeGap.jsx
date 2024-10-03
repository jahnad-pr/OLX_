

export function getDynamicTimeGap(date) {
    const baseDate = new Date(date)
    const now = new Date()

    // Helper function to calculate the difference in days
    const getTimeDifferenceInDays = (fromDate, toDate) => {
        // Get the difference in milliseconds
        const diffTime = fromDate - toDate;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    // Calculate the difference in days
    const daysDifference = getTimeDifferenceInDays(now, baseDate);

    // return Most relevent Gap
    if (daysDifference === 0) {
        return "TODAY";
    } else if (daysDifference === 1) {
        return "YESTERDAY";
    } else if (daysDifference > 1 && daysDifference < 7) {
        return `${daysDifference} DAYS AGO`.toUpperCase();
    } else if (daysDifference >= 7 && daysDifference < 30) {
        const weeksDifference = Math.floor(daysDifference / 7);
        return `${weeksDifference} WEEK(S) AGO`.toUpperCase();
    } else if (daysDifference >= 30 && daysDifference < 365) {
        const monthsDifference = Math.floor(daysDifference / 30);
        return `${monthsDifference} MONTH(S) AGO`.toUpperCase();
    } else if (daysDifference >= 365) {
        const yearsDifference = Math.floor(daysDifference / 365);
        return `${yearsDifference} YEAR(S) AGO`.toUpperCase();
    } else {
        return "TODAY";
    }
}