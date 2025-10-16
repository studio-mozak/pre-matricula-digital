<template>
  <ckeditor
    :editor="editor"
    v-model="localValue"
    :config="config"
    @ready="onReady"
  />
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const props = defineProps({
  modelValue: String,
  config: Object,
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const editor = ClassicEditor
const localValue = ref(props.modelValue)
let instance: any = null

watch(
  () => props.modelValue,
  (val) => {
    if (val !== localValue.value) localValue.value = val
  }
)

watch(localValue, (val) => emit('update:modelValue', val))

const onReady = (editorObj: any) => {
  instance = editorObj
  if (props.disabled) instance.enableReadOnlyMode('vue')
}

watch(
  () => props.disabled,
  (val) => {
    if (!instance) return
    if (val) instance.enableReadOnlyMode('vue')
    else instance.disableReadOnlyMode('vue')
  }
)

onBeforeUnmount(() => {
  if (instance) {
    instance.destroy().catch(() => null)
    instance = null
  }
})
</script>

<style>
.ck-editor__editable_inline {
  min-height: 200px;
}
</style>

