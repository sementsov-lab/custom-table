export default class Utils {
   static isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
   }
}

