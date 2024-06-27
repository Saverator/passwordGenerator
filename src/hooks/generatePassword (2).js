import { ref, toRaw } from 'vue'

export default function() {
  let password = ref("")

  const generatePassword = function(checkboxes) {
    console.log(checkboxes.value)
    const checkboxesArray = toRaw(checkboxes.value)
    let usedSimbols = []
    password.value = ""

    checkboxesArray.forEach(value => {
      usedSimbols = value.checked ? [...usedSimbols, ...data[value.name]] : [...usedSimbols]
    })

    for (let i = 0; i < length.value; i++) {
      let randomPosition = Math.floor(Math.random()*usedSimbols.length)
      password.value += usedSimbols[randomPosition]
      console.log(randomPosition)
    }
  }

  return {
    password,
    generatePassword
  }
}

