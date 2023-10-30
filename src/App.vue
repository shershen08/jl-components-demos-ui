<script setup>
import { onMounted, ref } from 'vue'
import { accountStore } from '@juicyllama/frontend-core'
import { useRoute, useRouter } from 'vue-router'
import components from './components';
onMounted(() => {
  accountStore.setSelectedAccount({
      selected_account: {
        account_id: '123456789'
      }
  })
})

const route = useRoute()
const router = useRouter()

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title @click="router.push('/')" class="cursor-pointer">
          JL components
        </q-toolbar-title>
        <q-spacer />
      <q-btn flat no-caps label="v1.0.0"/>
      <q-btn flat no-caps label="GitHub" target="_blank" href="https://github.com/juicyllama/framework" />
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Currently available</q-item-label>

        <q-item v-for="o in components"  clickable :color="route.path === o.link ? 'primary' : ''"  :to="o.link" :disable="route.path === o.link">
          <!-- <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section> -->
          <q-item-section>
            <q-item-label>{{ o.title }}</q-item-label>
            <q-item-label caption> {{ o.caption }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

    <q-page-container class="q-mt-xl q-ml-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

