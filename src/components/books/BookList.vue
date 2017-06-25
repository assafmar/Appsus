<template> 
<section class="books-list" v-if="books">
            <book-filter @set-filter="setFilter"></book-filter>
            <h2 class="books-title">We have {{books.length}} Books</h2>
            <el-button type="success" icon="plus"class="add-btn" @click="isCreateMode=true"></el-button>
<cart class="cart"></cart>
            <div class="book-preview-container">
                <book-preview class="book-preview" v-for="currBook in booksToShow" 
                    :key="currBook.id"
                    @click.native="selectBook(currBook)" 
                    @edit="editBook(currBook)"
                    @delete="deleteBook(currBook)"
                    @add-to-cart="addToCart(currBook)"
                    :book="currBook">
                </book-preview>
                </div>
            <book-details class="book-details" v-if="selectedBook"
                 @close="resetSelected"
                 @next="selectNext"
                 :book="selectedBook">
            </book-details>

             <book-edit class="book-details" v-if="editedBook || isCreateMode"
                 :book="editedBook"
                 @save="saveBook">
            </book-edit>
        </section>
</template>



<script>
import { Notification } from 'element-ui';
import BookDetails from './BookDetails.vue'
import BookEdit from './BookEdit.vue'
import BookFilter from './BookFilter.vue'
import BookPreview from './BookPreview.vue'
import Cart from './Cart.vue'
import cartService from '../../services/books/car.service.js'
import bookService from '../../services/books/books.service.js'
export default {
  name: 'bookList',
   created() {
        bookService.getBooks().then(books => {
            // console.log(books);
            this.books = books
            // books has become REACTIVE!
            // console.log(this.books);
        })
    },
    data() {
        return {
            books: null,
            selectedBook : null,
            editedBook: null,
            isCreateMode : false,
            bookFilter : null,
            activeIndex: '1',
        activeIndex2: '1'
        }
    },
    computed: {
        booksToShow() {
            if (!this.bookFilter) return this.books;
            return this.books.filter(book => {
                return book.title.includes(this.bookFilter.byText)
            });
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        resetSelected() {
            this.selectedBook = null;
        },
        selectNext() {
            this.selectedBook = bookService.getNext(this.selectedBook);
        },
        editBook(book) {
            this.editedBook = book;
        },
        deleteBook(book) {
            bookService.deleteBook(book);
            this.open('Book deleted', 'From store', 'warning')
        },
        saveBook(book) {
            bookService.saveBook(book);
            this.editedBook = null;
            this.isCreateMode =false;
        },
        setFilter(newFilter) {
            console.log('newFilter', newFilter);
            this.bookFilter = newFilter;
        },
        addToCart(book) {
            cartService.addToCart(book);
            this.open('Added new book','To cart', 'success')
        },
        open(title, message, type) {
        this.$notify({
          title,
          message,
          type
        });
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
        BookFilter,
        BookPreview,
        BookDetails,
        BookEdit,
        Cart
        // cart
    }
}
</script>


<style lang="">
   .books-list{
       height: 100%;
       width:100%;
       display: inline-block;
       background: #F9FAFC;
   }
.book-preview-container{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.book-preview{
    background: #8492A6;
}
.cart{
    width: 100%;
    padding: 0;
    margin:0;
    background: #E5E9F2;

}
.add-btn{
    width: 100%;
}
.books-title{
    margin-left: 43%;
}
</style>