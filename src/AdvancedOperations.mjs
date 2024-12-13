export default class AdvancedOperations {
    constructor() {
        // Constructor code if needed
    }

    // Method to find the maximum value in an array
    /**
     * Finds the maximum value in an array.
     *
     * @param {number[]} arr - The array of numbers to search through.
     * @returns {number} The maximum value found in the array.
     */
    findMax(arr) {
        return Math.max(...arr);
    }

    // Method to reverse a string
    /**
     * Reverses the given string.
     *
     * @param {string} str - The string to be reversed.
     * @returns {string} - The reversed string.
     */
    reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Method to format a date as 'YYYY-MM-DD'
    /**
     * Formats a given date object into a string in the format 'YYYY-MM-DD'.
     *
     * @param {Date} date - The date object to format.
     * @returns {string} The formatted date string.
     */
    formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    // Method to calculate the factorial of a number
    /**
     * Calculates the factorial of a given number.
     * The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
     * It is denoted by n! and is defined as:
     * - 0! = 1
     * - n! = n * (n-1) * (n-2) * ... * 1 for n > 0
     *
     * @param {number} n - The number to calculate the factorial for.
     * @returns {number} The factorial of the number.
     */
    factorial(n) {
        if (n < 0) {
            return NaN; // Factorial is not defined for negative numbers
        }

        if (n === 0) {
            return 1; // The factorial of 0 is 1
        }

        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Method to find the nth Fibonacci number
    /**
     * Finds the nth Fibonacci number.
     *
     * @param {number} n - The position of the Fibonacci number to find.
     * @returns {number} The nth Fibonacci number.
     */
    getFibonacciNumber(n) {
        // If n is 0 or 1, return n (base cases)
        if (n <= 1) {
            return n;
        }

        // Initialize the first two Fibonacci numbers
        let previous = 0;
        let current = 1;

        // Iterate from 2 to n to calculate the nth Fibonacci number
        for (let i = 2; i <= n; i++) {
            // Calculate the next Fibonacci number
            const next = previous + current;
            // Update previous and current to the next pair of numbers in the sequence
            previous = current;
            current = next;
        }

        // Return the nth Fibonacci number
        return current;
    }

    // Method to check if a string is a palindrome
    /**
     * Checks if a given string is a palindrome.
     * A palindrome is a word, phrase, number, or other sequence of characters
     * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
     *
     * @param {string} str - The string to check.
     * @returns {boolean} - Returns true if the string is a palindrome, otherwise false.
     */
    isPalindrome(str) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();

        // Check if the cleaned string is equal to its reverse
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    // Method to merge and sort two arrays
    /**
     * Merges two arrays and sorts the result in ascending order.
     *
     * @param {number[]} arr1 - The first array to merge.
     * @param {number[]} arr2 - The second array to merge.
     * @returns {number[]} The merged and sorted array.
     */
    mergeAndSort(arr1, arr2) {
        // Merge the two arrays
        const mergedArray = arr1.concat(arr2);

        // Sort the merged array in ascending order
        mergedArray.sort((a, b) => a - b);

        return mergedArray;
    }

    /**
     * Calculates statistics for a set of numbers.
     * @param {number[]} nums - The set of numbers.
     * @returns {object} - The statistics including sum, average, min, and max.
     */
    calculateStatistics(numbers) {
        if (numbers.length === 0) {
            return {
                sum: 0,
                average: NaN,
                min: undefined,
                max: undefined
            };
        }

        // Calculate the sum of the numbers
        const sum = numbers.reduce((total, number) => total + number, 0);

        // Calculate the average of the numbers
        const average = sum / numbers.length;

        // Find the minimum value in the array
        const min = Math.min(...numbers);

        // Find the maximum value in the array
        const max = Math.max(...numbers);

        // Return the calculated statistics
        return {
            sum: sum,
            average: average,
            min: min,
            max: max
        };
    }
}