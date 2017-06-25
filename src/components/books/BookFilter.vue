<template>
 <section class="book-filter">
            <el-input placeholder="Search books by title" v-model="bookFilter.byText" icon="search"></el-input>
        </section>
</template>

<script>
import bookList from './BookList.vue'
    export default {
        name: 'bookFilter',
        data() {
        return {
            bookFilter: { byText: '', byMaxPrice: 1000 }
        }
    },
    created() {
        this.$watch('bookFilter.byText', function (newVal, oldVal) {
            this.$emit('set-filter', this.bookFilter);
        })

    },
    methods: {

    }
    }
</script>

<style>
    .book-filter {
    align-self: flex-end;
    width: 200px;
    padding: 10px;
    border-radius: 1em;
}
</style>