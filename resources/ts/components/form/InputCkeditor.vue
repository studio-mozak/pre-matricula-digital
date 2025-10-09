<template>
  <VueCkeditor
    v-model="model"
    v-bind="$attrs"
    :config="mergedConfig"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import VueCkeditor from '@/components/form/VueCkeditor.vue'
import { ModelValue, Indexable } from '@/types'

const props = withDefaults(
  defineProps<{
    data?: ModelValue
    placeholder?: string
    config?: Indexable
    name: string
    disabled?: boolean
  }>(),
  {
    data: '',
    placeholder: 'Adicione sua mensagem aqui.',
    config: () => ({}),
    disabled: false,
  }
)

const model = useVModel(props, 'data')

const defaultConfig = {
  placeholder: props.placeholder,
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'underline', 'strikethrough', '|',
    'alignment', '|',
    'numberedList', 'bulletedList', 'outdent', 'indent', '|',
    'link', 'blockQuote', 'insertTable', 'undo', 'redo'
  ],
  licenseKey: 'GPL',
}

const mergedConfig = computed(() => ({
  ...defaultConfig,
  ...props.config,
}))
</script>
