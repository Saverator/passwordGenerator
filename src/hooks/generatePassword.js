import { ref } from 'vue'

export default function(checkboxes, data, length) {
  let password = ref("")

  const generatePassword = function() {
    let usedSimbols = []
    let dataArrays = []
    let indexes = []
    let count = 0
    let passwordArray = []

    password.value = ""

    checkboxes.forEach(value => {
      if (value.checked) {
        usedSimbols = [...usedSimbols, ...data[value.name]]
        dataArrays.push(value.name)
        count++
      } else {
        usedSimbols = [...usedSimbols]
      }
    })

    for (let i = 0; i < length.value; i++) {
      let randomPosition = Math.floor(Math.random() * usedSimbols.length)
      password.value += usedSimbols[randomPosition]
      indexes.push(i)
    }

    shuffle(indexes)

    passwordArray = password.value.split('')

    for (let i = 0; i < count; i++) {
      passwordArray[indexes[i]] = data[dataArrays[i]][Math.floor(Math.random() * data[dataArrays[i]].length)]
    }

    password.value = passwordArray.join('')
  }

  function shuffle(array) {
    let currentIndex = array.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ]
    }
  }

  return {
    password,
    generatePassword
  }
}

