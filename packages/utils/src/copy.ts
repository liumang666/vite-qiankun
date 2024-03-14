function fallbackCopyTextToClipboard(text: string) {
  let textArea = document.createElement('textarea')
  textArea.value = text

  // Avoid scrolling to bottom
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  return new Promise<boolean>((resolve, reject) => {
    try {
      let successful = document.execCommand('copy')
      resolve(successful)
    } catch (err) {
      reject(err)
    } finally {
      document.body.removeChild(textArea)
    }
  })
}

const copyText = (text: string): Promise<boolean> => {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text)
  }
  return navigator.clipboard.writeText(text).then(() => true)
}
export default copyText
