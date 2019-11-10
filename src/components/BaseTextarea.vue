<template>
    <span class="form-field">
        <label
            :for="inputName"
            class="form-field__label"
        >
            {{ label }}
            <abbr v-if="required" title="This field is required" aria-label="This field is required">
                *
            </abbr>
        </label>
        <textarea
            class="form-field__input form-field__input--editable"
            :id="inputName"
            :name="inputName"
            :required="required"
        />
    </span>
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    label: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: true,
    },
  }
}
</script>
