<template>
<section class="cart">
            <h1>Cart</h1>
            <ul>
                <li v-for="item in items">
                    {{item.title}} (Quantity: {{item.quantity}})
                    <p>$: {{item.price}}</p>
                </li>
            </ul>
            <p>Total: {{total}}</p>
           

        </section>
</template>

<script>
    import cartService from '../../services/books/car.service.js'

    export default {
        name: 'Cart',
        data() {
        return {
            items: cartService.getCartItems(),
        }
    },
    computed: {
        total() {
           this.items;
           return cartService.getCartTotal(); 
        }               

    }
    }
</script>


<style lang="">
    .cart {
    background-color: #E5E9F2;
    padding: 10px;
}
</style>