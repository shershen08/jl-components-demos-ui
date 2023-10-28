<script setup>
import { JLDropdownButtonMenu } from '@juicyllama/frontend-core'

const button = {
  color: 'red',
  label: 'Click me',
}

const menu = {
    items: [
      {
        caption: 'Item caption',
        title: 'Item title',
        link: '/foo/1'
      },
      {
        caption: '#2 caption',
        title: '#2 title',
        link: '/foo/2',
        icon: 'warning'
      },
      {
        caption: 'Submenu',
        title: 'Submenu title',
        links: [{
          caption: 'Item 2',
          title: 'Item 2',
          link: '/foo/3'
        }]
      }
      ]
  }

</script>
<template>
  <JLDropdownButtonMenu :button="button" :menu="menu"/>
</template>
