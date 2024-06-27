import { ref, toRaw } from 'vue'

export default function() {

  const checkboxes = ref([
    {
      name: 'lowerCase',
      title: 'Строчные буквы',
      checked: true,
      disabled: true
    },
    {
      name: 'upperCase',
      title: 'Прописные буквы',
      checked: false,
      disabled: false
    },
    {
      name: 'digits',
      title: 'Цифры',
      checked: false,
      disabled: false
    },
    {
      name: 'specials',
      title: 'Специальные символы',
      checked: false,
      disabled: false
    }
  ])

  const disableCheckbox = function() {
    let checkedSum = 0
    const checkboxesArray = toRaw(checkboxes.value)

    checkboxesArray.forEach((element, index) => {
      checkedSum = element.checked ? checkedSum + 1 : checkedSum

      if (checkedSum > 1) {
        checkboxesArray.forEach((element, index) => {
          checkboxes.value[index].disabled = false
        })
      } else {
        const lastCheckedIndex = checkboxesArray.findIndex(item => item.checked === true)
        checkboxes.value[lastCheckedIndex].disabled = true
      }
    })
  }

  return {
    checkboxes,
    disableCheckbox
  }

}
