<template>  
 <section class="popup book-edit">

            <h1 v-if="book">Edit: {{book.title}}</h1>
            <h1 v-else>New Book</h1>

            <input type="text" v-model="bookToEdit.title" />
            <button @click="save">Save</button>
            <button @click="cancel">Cancel</button>
        </section>
</template>



<script>
import { Notification } from 'element-ui';
    export default {
        name: 'bookEdit',
        props: ['book'],
        data(){
        return {
            bookToEdit: null
        }
    },
    created(){
        this.bookToEdit = Object.assign({}, this.book)
    },
    methods: {
        
        save() {
            this.open('Saved','New book '+ this.bookToEdit.title,'success')
            this.$emit('save', this.bookToEdit);
        },
        cancel() {
            this.open('Canceled','','warning')
        },
    open(title, message, type) {
        this.$notify({
          title,
          message,
          type
        });
      },
    },
    }
</script>

<style lang="">
    .book-edit {
    background: lightgoldenrodyellow;
}
</style>