<script setup>
import { ref, toRaw } from 'vue'
import { data } from '/src/data/data'
import useLength from '/src/hooks/passwordLength'
import useCheckboxes from '/src/hooks/checkboxes'
import useGeneratePasseord from '/src/hooks/generatePassword'

const { length, minLength, maxLength, checkLength } = useLength()
const { checkboxes, disableCheckbox } = useCheckboxes()
const { password, generatePassword } = useGeneratePasseord(toRaw(checkboxes.value), data, length)

</script>

<template>
  <v-container
    grid-list-xs
  >
    <v-card
      title="Генератор паролей"
      class="pa-2"
    >

      <v-card-subtitle>Длина пароля:</v-card-subtitle>

      <v-slider
          v-model="length"
          :max="maxLength"
          :min="minLength"
          :step="1"
          show-ticks="always"
          tick-size="2"
        >

        <template v-slot:append>
          <v-text-field
            v-model="length"
            density="compact"
            style="width: 70px"
            type="number"
            :max="maxLength"
            :min="minLength"
            hide-details
            single-line
            @input="checkLength"
          ></v-text-field>
        </template>

      </v-slider>

      <v-checkbox
        v-for="checkbox in checkboxes"
        :key="checkbox.name"
        :label="checkbox.title"
        v-model="checkbox.checked"
        :disabled="checkbox.disabled"
        @change="disableCheckbox"
      ></v-checkbox>

      <v-card-actions>
        <v-btn
          variant="tonal"
          @click="generatePassword"
        >Сгенерировать</v-btn>
      </v-card-actions>

      <v-card
        class="pa-2 text-center"
      >
        <h2>{{ password }}</h2>
      </v-card>


    </v-card>
  </v-container>
</template>
