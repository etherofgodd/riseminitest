export function calculateMonthsDifference(startDate: Date) {
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();

    return yearDiff * 12 + monthDiff;
}
