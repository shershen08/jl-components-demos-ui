<script setup>
import { onMounted, ref } from 'vue'
import { accountStore } from '@juicyllama/frontend-core'
import { useRoute } from 'vue-router'
onMounted(() => {
  accountStore.setSelectedAccount({
      selected_account: {
        account_id: '123456789'
      }
  })
})

const route = useRoute()
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
  title: 'Stats',
  link: '/stats'
},
{
  title: 'Table',
  link: '/table'
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
        <q-btn stretch :color="route.path === o.link ? 'primary' : ''" :disable="route.path === o.link" flat v-for="o in options" :label="o.title" :to="o.link">

        </q-btn>
      </q-toolbar>
    <router-view></router-view>
  </div>
</template>


