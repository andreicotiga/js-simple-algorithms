import chai from 'chai'
import reverseStringRec from '../src/reverseStringRec'

let expect = chai.expect;

describe('Reverse String Recusively', () => {
    it('should reverse a multi-char string', () => {
        let stringToReverse = 'Hello!';

        let reversedString = reverseStringRec(stringToReverse);

        expect(reversedString).to.equal("!olleH")
    })

    it('should return a single char string', () => {
        let stringToReverse = 'e';

        let reversedString = reverseStringRec(stringToReverse);

        expect(reversedString).to.equal("e")
    })

    it('should return null for a null string', () => {
        let stringToReverse = null;

        let reversedString = reverseStringRec(stringToReverse);

        expect(reversedString).to.be.null;
    })

    it('should return empty for an empty string', () => {
        let stringToReverse = '';

        let reversedString = reverseStringRec(stringToReverse);

        expect(reversedString).to.equal('');
    })
});