export default class AdvancedOperations {
    constructor() {
        // Constructor code if needed
    }

    // Method to find the maximum value in an array
    findMax(arr) {
       
    }

    // Method to reverse a string
    reverseString(str) {
       
    }

    // Method to format a date as 'YYYY-MM-DD'
    formatDate(date) {
        
    }

    // Method to calculate the factorial of a number
    factorial(n) {

    }

    // Method to find the nth Fibonacci number
    fibonacci(n) {
       
    }

    // Method to check if a string is a palindrome
    isPalindrome(str) {
       
    }

    // Method to merge and sort two arrays
    mergeAndSort(arr1, arr2) {
        
    }

    /**
     * Calculates statistics for a set of numbers.
     * @param {number[]} nums - The set of numbers.
     * @returns {object} - The statistics including sum, average, min, and max.
     */
    calculateStatistics(nums) {
        // Implementation with bad practices

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }

        let avg = sum / nums.length;

        let min = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }

        let max = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }

        return {
            sum: sum,
            average: avg,
            min: min,
            max: max
        };
    }
}