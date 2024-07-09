import { useLoginFetch } from "fetch";
import { CaptchaSendParam } from "./type";

const fetch = useLoginFetch();

export const useDoLogin = () => {
  // 获取短信验证码
  const doSmsCaptchaSend = (params: CaptchaSendParam) => {
    return fetch.post(`/doSmsCaptchaSend`, params);
  };

  return {
    doSmsCaptchaSend,
  };
};
