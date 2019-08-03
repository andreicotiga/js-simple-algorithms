import chai from 'chai'
import reverseStringRecursive from '../src/reverseStringRecursive'

let expect = chai.expect;

describe('reverseStringRecursive', () => {
    it('reverses a multi-char string', () => {
        let stringToReverse = 'Hello!';

        let reversedString = reverseStringRecursive(stringToReverse);

        expect(reversedString).to.equal("!olleH")
    })

    it('reverses a single char string', () => {
        let stringToReverse = 'e';

        let reversedString = reverseStringRecursive(stringToReverse);

        expect(reversedString).to.equal("e")
    })

    it('returns empty for an empty string', () => {
        let stringToReverse = '';

        let reversedString = reverseStringRecursive(stringToReverse);

        expect(reversedString).to.equal('');
    })

    it('returns null for a null string', () => {
        let stringToReverse = null;

        let reversedString = reverseStringRecursive(stringToReverse);

        expect(reversedString).to.be.null;
    })
});