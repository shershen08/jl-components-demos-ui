<script setup>
import { JLUpload } from '@juicyllama/frontend-core'


</script>

<template>
  <JLUpload :allowedFileType="'CSV'" endpoint="/api/upload"> Upload CSV</JLUpload>
  <!-- <JLUpload :allowedFileType="'JSON'"> Upload JSON</JLUpload> -->
</template>
