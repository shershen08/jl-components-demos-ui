<script setup>
import { JLTable } from '@juicyllama/frontend-core'

const options = {
    title: 'Users',
    name: 'Users',
    event: `users_list`, // if using Pusher
    endpoint: `/users`, // if using REST API
    find: [

    ],
    functions: [],
    schema: [
        {
            required: true,
            label: 'User #',
            align: 'left',
            name: 'user_id',
            field: 'user_id',
            sortable: true,
            show: true,
            primary_key: true,
        },
    ],
}

const visibleColumns = ['user_id']
</script>
<template>
    <JLTable :options="options" :visibleColumns="visibleColumns" />
</template>
