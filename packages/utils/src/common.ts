import dayjs from "dayjs";

/**
 * 去除非数字
 */
export const removeNonNumbers = (value: string) => {
  return value.replace(/[^0-9]/gi, "");
};

/**
 * 深度克隆对象，不支持 Date, undefined, Infinity
 * @param value
 * @returns
 */
export const deepClone = (value: any) => {
  return JSON.parse(JSON.stringify(value));
};

/**
 * 浅克隆对象
 * @param value
 * @returns
 */
export const shadowClone = (value: any) => {
  if (Array.isArray(value)) {
    return Object.assign([], value);
  }
  if (typeof value === "object" && value !== null) {
    return Object.assign({}, value);
  }
};

//时间格式
export const format = (date?: string | number, formatter = "YYYY-MM-DD") => {
  return dayjs(date).format(formatter);
};
