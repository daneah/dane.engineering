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
        <textarea
            v-if="editable"
            class="form-field__input form-field__input--editable"
            :id="inputName"
            :name="inputName"
            :required="required"
        />
        <input
            v-else
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
    editable: {
      type: Boolean,
      required: false,
      default: false,
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
.form-field {
  @at-root #{&}__label {
    display: block;
    font-size: var(--text-lg);
    font-weight: bold;
  }

  @at-root #{&}__input {
    padding: var(--space-xs);
    border: 1px solid var(--gray);
    width: 100%;

    @at-root #{&}--editable {
      height: 5em;
    }
  }

  @at-root #{&}--hidden {
    display: none;
    margin: 0;
  }
}
</style>
