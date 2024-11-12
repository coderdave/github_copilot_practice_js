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
});