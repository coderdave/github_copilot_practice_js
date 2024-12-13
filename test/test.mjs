import { expect } from 'chai';
import AdvancedOperations from '../src/AdvancedOperations.mjs';

describe('AdvancedOperations', function() {
    let advOps;

    beforeEach(function() {
        advOps = new AdvancedOperations();
    });

    // Test for findMax method
    it('should return the maximum value in an array', function() {
        const result = advOps.findMax([1, 2, 3, 4, 5]);
        expect(result).to.equal(5);
    });

    // Test for reverseString method
    it('should return the reversed string', function() {
        const result = advOps.reverseString('hello');
        expect(result).to.equal('olleh');
    });

    // Test for formatDate method
    it('should return the formatted date as YYYY-MM-DD', function() {
        const date = new Date(2023, 0, 1); // January 1, 2023
        const result = advOps.formatDate(date);
        expect(result).to.equal('2023-01-01');
    });

    // Test for factorial method
    it('should return the factorial of a number', function() {
        const result = advOps.factorial(5);
        expect(result).to.equal(120);
    });

    // Test for calculateStatistics method
    it('should calculate statistics for a set of numbers', function() {
        const result = advOps.calculateStatistics([1, 2, 3, 4, 5]);
        expect(result).to.deep.equal({
            sum: 15,
            average: 3,
            min: 1,
            max: 5
        });
    });

    it('should handle an empty array', function() {
        const result = advOps.calculateStatistics([]);
        expect(result).to.deep.equal({
            sum: 0,
            average: NaN,
            min: undefined,
            max: undefined
        });
    });

    it('should handle an array with one element', function() {
        const result = advOps.calculateStatistics([42]);
        expect(result).to.deep.equal({
            sum: 42,
            average: 42,
            min: 42,
            max: 42
        });
    });

    it('should handle negative numbers', function() {
        const result = advOps.calculateStatistics([-1, -2, -3, -4, -5]);
        expect(result).to.deep.equal({
            sum: -15,
            average: -3,
            min: -5,
            max: -1
        });
    });

    // Test for getFibonacciNumber method
    it('should return the nth Fibonacci number', function() {
        expect(advOps.getFibonacciNumber(0)).to.equal(0);
        expect(advOps.getFibonacciNumber(1)).to.equal(1);
        expect(advOps.getFibonacciNumber(2)).to.equal(1);
        expect(advOps.getFibonacciNumber(3)).to.equal(2);
        expect(advOps.getFibonacciNumber(4)).to.equal(3);
        expect(advOps.getFibonacciNumber(5)).to.equal(5);
        expect(advOps.getFibonacciNumber(10)).to.equal(55);
    });


    // Test for isPalindrome method
    it('should return true for a palindrome string', function() {
        expect(advOps.isPalindrome('madam')).to.be.true;
        expect(advOps.isPalindrome('racecar')).to.be.true;
        expect(advOps.isPalindrome('A man a plan a canal Panama')).to.be.true;
    });

    it('should return false for a non-palindrome string', function() {
        expect(advOps.isPalindrome('hello')).to.be.false;
        expect(advOps.isPalindrome('world')).to.be.false;
        expect(advOps.isPalindrome('palindrome')).to.be.false;
    });

    it('should return true for an empty string', function() {
        expect(advOps.isPalindrome('')).to.be.true;
    });

    it('should return true for a single character string', function() {
        expect(advOps.isPalindrome('a')).to.be.true;
        expect(advOps.isPalindrome('Z')).to.be.true;
    });    

    it('should ignore spaces, punctuation, and capitalization', function() {
        expect(advOps.isPalindrome('A man, a plan, a canal, Panama!')).to.be.true;
        expect(advOps.isPalindrome('No lemon, no melon')).to.be.true;
        expect(advOps.isPalindrome('Was it a car or a cat I saw?')).to.be.true;
    });

    it('should merge and sort two arrays', function() {
        const result = advOps.mergeAndSort([3, 1, 4], [2, 5, 6]);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('should handle empty arrays', function() {
        const result = advOps.mergeAndSort([], []);
        expect(result).to.deep.equal([]);
    });

    it('should handle one empty array', function() {
        const result1 = advOps.mergeAndSort([1, 2, 3], []);
        expect(result1).to.deep.equal([1, 2, 3]);

        const result2 = advOps.mergeAndSort([], [4, 5, 6]);
        expect(result2).to.deep.equal([4, 5, 6]);
    });

    it('should handle arrays with negative numbers', function() {
        const result = advOps.mergeAndSort([-3, -1, -4], [-2, -5, -6]);
        expect(result).to.deep.equal([-6, -5, -4, -3, -2, -1]);
    });

    it('should handle arrays with duplicate numbers', function() {
        const result = advOps.mergeAndSort([1, 2, 2], [2, 3, 3]);
        expect(result).to.deep.equal([1, 2, 2, 2, 3, 3]);
    });
});