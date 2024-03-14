/**
 * 判断url是否是http或https
 * @param {string} path
 * @returns {Boolean}
 */
export function isHttp(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email: string): boolean {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str: any): boolean {
  if (typeof str === "string" || str instanceof String) {
    return true;
  }
  return false;
}

export function isJson(arg: string): boolean {
  try {
    JSON.parse(arg);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 判断 object 是否为空
 * @param obj
 * @returns
 */
export const isEmptyObj = (obj?: Object) => {
  if (typeof obj === "undefined" || obj === null) {
    return true;
  }
  return obj && Object.keys(obj).length === 0;
};

// 判断手机是否正确
export const isMobile = (phone: string) => {
  return /^1[3-9]\d{9}$/.test(phone);
};

// 判断是不是数字
export const isNumber = (val: string) => {
  return /^\d+$/.test(val);
};
