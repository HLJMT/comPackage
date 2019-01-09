/* 常用工具方法 */

/**
 * 去除空格
 * @param {String} str
 * @author hongliang 
 */
export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}