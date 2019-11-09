<template>
    <span :class="['form-field', {'form-field--hidden': type === 'hidden'}]">
        <label
            v-if="type !== 'hidden' || label"
            :for="inputName"
            class="form-field__label"
        >
            {{ label }}
            <abbr v-if="required" title="This field is required" aria-label="This field is required">
                *
            </abbr>
        </label>
        <input
            :id="inputName"
            class="form-field__input"
            :type="type"
            :name="inputName"
            :required="required"
            :value="value"
        />
    </span>
</template>

<script>
export default {
  name: 'BaseFormField',
  props: {
    label: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    required: {
      type: Boolean,
      required: false,
      default: true,
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
  },
}
</script>

<style scoped lang="scss">
.Wrapper {
  display: block;
  width: inherit;
}
</style>
