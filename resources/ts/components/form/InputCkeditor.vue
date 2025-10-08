<template>
  <CKEditor
    :editor="Editor"
    v-model="model"
    :config="editorConfig"
  />
</template>

<script setup lang="ts">
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    data?: string
    placeholder?: string
    config?: Record<string, any>
    name?: string
    disabled?: boolean
  }>(),
  {
    data: '',
    placeholder: 'Adicione sua mensagem aqui',
    config: () => ({}),
    disabled: false,
  }
)

const model = useVModel(props, 'data') // habilita v-model:data
const Editor = ClassicEditor

const defaultConfig = {
  placeholder: props.placeholder,
  // toolbar mínimo — ajuste depois se quiser
  toolbar: [
    'bold', 'italic', 'underline', 'link',
    '|', 'bulletedList', 'numberedList',
    '|', 'undo', 'redo'
  ],
}

const editorConfig = computed(() => ({
  ...defaultConfig,
  ...props.config,
}))
</script>

<style>
/* força altura mínima para garantir que apareça */
.ck-editor__editable_inline {
  min-height: 180px;
}
</style>
