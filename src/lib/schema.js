/** 
 * @typedef {"home" | "roadmap" | "tokenomics" | "team" | "faqs"} Page
* /

/**
 * @typedef {Object} Task
 * @property {string} description
 * @property {boolean} completed
*/

/**
 * @typedef {Object} Phase
 * @property {string} season
 * @property {Task[]} tasks
 */

/**
 * @typedef {Object} Supply
 * @property {'max' | 'circulating' | 'reflection' | 'burn' | 'liquidity'} type
 * @property {number} value
 * @property {number} [percent]
 */


/**
 * @typedef {Object} Employee
 * @property {string} name
 * @property {string} designation
 * @property {string} [imgSrc]
 */

/**
 * @typedef {Object} Faq
 * @property {string} question
 * @property {string} answer
 */