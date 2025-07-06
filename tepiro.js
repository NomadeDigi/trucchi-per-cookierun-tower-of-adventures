// stringUtils.js
// Utility functions for string manipulation
// Author: [TuoNome] - For educational purposes only

const StringUtils = {
  // Trims whitespace from both ends of the string
  trim(str) {
    if (typeof str !== 'string') return '';
    return str.trim();
  },

  // Reverses the given string
  reverse(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
  },

  // Checks if a string contains only alphabets (a-zA-Z)
  isAlpha(str) {
    if (typeof str !== 'string') return false;
    return /^[a-zA-Z]+$/.test(str);
  },

  // Converts the string to Title Case
  toTitleCase(str) {
    if (typeof str !== 'string') return '';
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
};

// Example usage:
// console.log(StringUtils.trim('  hello world  '));  // 'hello world'
// console.log(StringUtils.reverse('abc'));           // 'cba'
// console.log(StringUtils.isAlpha('NomadeDigi'));    // true
// console.log(StringUtils.toTitleCase('hello world'));// 'Hello World'

export default StringUtils;
