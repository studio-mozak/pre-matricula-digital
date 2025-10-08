<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const editor = ClassicEditor
const editorData = ref('<p>Digite algo...</p>')
const editorConfig = {
   licenseKey: 'GPL',
  toolbar: ['bold', 'italic', 'link', 'undo', 'redo'],
}
</script>
