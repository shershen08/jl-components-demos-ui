<script setup>
    import { JLForm } from '@juicyllama/frontend-core'
    import { reactive, ref } from 'vue'

    const form = reactive([])

    const options = {
        type: 'edit',
        name: 'account',
        fields: form
    }

    const loaded = ref(false)

    async function submittedForm(form) {
        // API call
    }
</script>
<template>
    <JLForm
    :options="options"
    v-if="loaded"
    @submitted-form="submittedForm"></JLForm>
</template>
