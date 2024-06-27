import { ref, computed } from 'vue'

export default function() {
  const length = ref(10)
  const minLength = ref(4)
  const maxLength = ref(32)

  const checkLength = computed(() => {
    length.value = (length.value > maxLength.value) ? maxLength.value : length.value
    length.value = (length.value < minLength.value) ? minLength.value : length.value
  })

  return {
    length,
    minLength,
    maxLength,
    checkLength
  }
}
