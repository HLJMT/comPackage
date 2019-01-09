/* 公共过滤器filter */

/**
 * 判断是否
 * @param {String|Number} val
 * @author hongliang 
 */
export function isno(val) {
    if (val == 1) {
        return '是'
    } else {
        return '否'
    } 
}

/**
 * 判断类型
 * @param {String} val
 * @author hongliang 
 */
export function isno (val) {
    let str;
    switch (val) {
        case 'wb':
            str = '网吧'
            break;
        case 'lv':
            str = '旅馆'
            break;
        case 'tl':
            str = '铁路'
            break; 
        case 'mh':
            str = '民航'
            break;        
        default:
            str = "其他";
    }
    return str
}