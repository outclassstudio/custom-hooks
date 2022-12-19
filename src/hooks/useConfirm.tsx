type Confirm = () => void
type Cancel = () => void

export const useConfirm = (message = "", onConfirm:Confirm, onCancel:Cancel) => {
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }
  return confirmAction
}