<template>
<section class="popup book-details">
            <el-button type="danger" @click="closeMe">x</el-button>
            <h1>Details of: {{book.title}}</h1>
            <img src="http://via.placeholder.com/250x150">
            <h3>${{book.price}}</h3>
            <p>{{book.description}}</p>
            <el-button type="primary" @click="requestNextBook">Next > </el-button>
        </section>
</template>

<script>
    export default {
        name: 'bookDetails',
        props:['book'],
        methods: {
            closeMe() {
                console.log('close me!');
                this.$emit('close');
                },
            requestNextBook() {
                console.log('Requesting Next');
                this.$emit('next');
            }
        },

        }
</script>


<style lang="">
    .popup {
    background: #99A9BF;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    left: 40vw ;
    top: 50vh;
    border: solid 1px #324057;
}
</style>