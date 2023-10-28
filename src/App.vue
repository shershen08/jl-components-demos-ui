<script setup>
import { onMounted, ref } from 'vue'
import { accountStore } from '@juicyllama/frontend-core'

onMounted(() => {
  accountStore.setSelectedAccount({
      selected_account: {
        account_id: '123456789'
      }
  })
})

const model = ref('')
const options = [{
  title: 'Upload',
  link: '/upload'
},
{
  title: 'Menu',
  link: '/menu'
},
{
  title: 'Chart',
  link: '/chart'
},
{
  title: 'Form',
  link: '/form'
}]
</script>

<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      <q-toolbar-title>JL components</q-toolbar-title>
        <q-space />
        <q-btn stretch flat v-for="o in options" :label="o.title" :to="o.link"/>
      </q-toolbar>
    <router-view></router-view>
  </div>
</template>


