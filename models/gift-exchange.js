const {BadRequestError} = require("../utils/errors");

/**
 * GiftExchange class that contains useful methods to match pairs.
 */
class GiftExchange {

    /**
     * Matches input names in pairs.
     * @param {array} names Names to pair.
     * @returns Array containing pairs.
     */
    static pairs = names => {
        if (!names) throw new BadRequestError();
        if (names.length % 2 === 1) throw new BadRequestError();

        let newNames = [], auxiliarNames = names;
        for (let i = auxiliarNames.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temporary = auxiliarNames[i];
            auxiliarNames[i] = auxiliarNames[j];
            auxiliarNames[j] = temporary;
        }

        for (let i = 0; i < auxiliarNames.length; i += 2) {
            newNames = [...newNames, [auxiliarNames[i], auxiliarNames[i + 1]]];
        }

        return newNames;
    }

    /**
     * Matches names with user friendly response.
     * @param {array} names Names to pair.
     * @returns Array of strings with pairs.
     */
    static traditional = names => {
        if (!names) throw new BadRequestError();

        let leftIndex = Math.floor(Math.random() * names.length), previousIndexes = [], newNames = [];
        while (previousIndexes.length < names.length - 1) {
            let rightIndex = Math.floor(Math.random() * names.length);
            while ([...previousIndexes, leftIndex].includes(rightIndex)) {
                rightIndex = Math.floor(Math.random() * names.length);
            }
            newNames = [...newNames, `${names[leftIndex]} is giving a gift to ${names[rightIndex]}`];
            previousIndexes = [...previousIndexes, leftIndex];
            leftIndex = rightIndex;
        }
        newNames = [...newNames, `${names[leftIndex]} is giving a gift to ${names[previousIndexes[0]]}`];
        return newNames;
    }
}

module.exports = GiftExchange;
