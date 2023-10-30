<script setup>
import components from './components';
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
     <div class="row">
     <div class="col-6 col-md-4">
        <q-card flat bordered @click="router.push(c.link)" class="cursor-pointer q-pa-sm my-card" v-for="c in components">
            <q-card-section>
                <div class="text-h6">{{c.title}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{c.caption}}
            </q-card-section>
        </q-card>
    </div>
    </div>
</template>
