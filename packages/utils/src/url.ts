export const getUrlParams = () => {
  return Object.fromEntries(new URLSearchParams(location.search))
}
