<template>
<li class="book-preview">
            <h2>{{book.title}}</h2>
            <img src="http://via.placeholder.com/200x150">
            <h3>${{book.price}}</h3>
            <el-button icon="edit" type="warning"@click.stop="editBook"></el-button>
            <el-button icon="delete"type="danger"@click.stop="deleteBook"></el-button>
            <el-button icon="plus" type="primary"@click.stop="addToCart">Add to Cart</el-button>
        </li>
</template>

<script>

export default {
    name: 'bookPreview',
    props: ['book'],
    methods: {
        editBook(){
            console.log('Request Edit');
            this.$emit('edit');
        },
        deleteBook(){
            console.log('Request Delete');
            this.$emit('delete');
        },
        addToCart() {
            this.$emit('add-to-cart');
        }
    }
}
</script>

<style>

.book-preview{
    list-style: none;
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid #99A9BF;
    border-radius: 2px;
    background: lightgray;
    text-align: center;
    background: #D3DCE6;
    color:#324057;

}
</style>