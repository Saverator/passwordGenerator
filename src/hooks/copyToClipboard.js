import { ref } from 'vue'

export default function(password) {
  let clipboardTooltipText = ref('Нажмите, чтобы копировать')
  let showTooltip = ref(false)

  const copyToClipboard = function() {
    try {
      navigator.clipboard.writeText(password.value)
      clipboardTooltipText.value = 'Копировано в буфер'
      showTooltip.value = true

      setTimeout(() => showTooltip.value = false, 2000)
      setTimeout(() => clipboardTooltipText.value = 'Нажмите, чтобы копировать', 3000)
    } catch(err) {
      throw err
    }
  }

  return {
    clipboardTooltipText,
    showTooltip,
    copyToClipboard
  }
}
