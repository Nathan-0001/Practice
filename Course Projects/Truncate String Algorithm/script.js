function truncateString(str, num) {
    // Check if the string length is less than or equal to the specified number
    if (str.length > num) {
        return str.slice(0, num) + `...`;
    }
    else if (str.length <= num) {
        // If the string length is less than or equal to num, return the string as is}
        return str;
    }
}