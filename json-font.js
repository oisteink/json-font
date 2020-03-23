'use strict';

const fs = require('fs');

/**
 * Character data class
 */
class jfChar {
    /**
     * Creates a jfChar
     */
    constructor() {
        /**
         * @member {String} glyphName - Name of the glyph
         */
        this.glyphName = '';
        /**
         * @member {Number} encoding - Adobe Standard Encoding value. 
         */
        this.encoding = -1; // unicode <-> adobe mapping: http://www.unicode.org/Public/MAPPINGS/VENDORS/ADOBE/stdenc.txt
        /**
         * @member {Number} nextChar - Position of the next character in pixels
         */
        this.nextChar = 0; //x position of next character
        /**
         * @member {Number} width - Width of pixel data
         */
        this.width = 0;
        /** 
         * @member {Number} height - Height of pixel data
         */
        this.height = 0;
        /**
         * @member {Number} xOffset - Offset on the x axis for start of pixel data. Can be negative
         */
        this.xOffset = 0;
        /**
         * @member {Number} yOffset - Offset on the y axis for end of pixel data. Can be negative
         */
        this.yOffset = 0;
        /**
         * @member {number[][]} glyph - Two dimensional array containing the pixel data. [0][0] is top left
         * @type {number[][]}
         */
        this.glyph = [];
    }
}


/**
 * Base font class - can load from JSON file
 * Based on BDF https://www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5005.BDF_Spec.pdf
 */
class jsonFont { //
    /**
     * creates a jsonFont
     * @param {string?} fileName - JSON file containing a font. Optional
     */
    constructor(fileName = '') {
        /**
         * @member {string} fontName Name of the font
         */
        this.fontName = '';
        /**
         * @member {number} charCount Number of characters in font
         */
        this.charCount = 0;
        /**
         * @member {jfChar[]} chars - Array of characters in the font
         * @type {jfChar[]}
         */
        this.chars = [];

        if (fileName) { //load from JSON file if supplied
            Object.assign(this, JSON.parse(fs.readFileSync(fileName)));
        }
    }
    
    /**
     * 
     * @param {Number} charNumber - Adobe Standard Encoding number
     * @returns {jfChar} The glyph data for the selected char
     */
    getChar(charNumber) {
        return this.chars.find(char => char.encoding == charNumber);
    }
}


module.exports = {jsonFont, jfChar}