<template>
    <section class="email-search">
        <div class="search-inner-container">
            <div class="search-title">Search:</div>
            <el-input class="search" size="small" placeholder="Type for search" v-model="searchQuery" @change="execSearch"></el-input>
            <div style="margin: 5px 0;"></div>
            <el-radio-group class="el-radio-group" size="small" v-model="radio1" @change="execButton">
                <el-radio-button label="All"></el-radio-button>
                <el-radio-button label="Unread"></el-radio-button>
            </el-radio-group>
           <!--<el-radio v-model="radio1" label="All"></el-radio>
                    <el-radio v-model="radio1" label="Unread"></el-radio>-->
   
        </div>
    
    </section>
</template>

<script>
export default {
    name: 'email-search',
    props: ['email'],
    data() {
        return {
            searchQuery: '',
            radio1: 'All'
        };
    },
    // computed: { ////////////   why didnt "computed"" work ???
    //     doFilter() {
    //         console.log('search query', this.searchQuery);
    //         this.$emit('searchQuery', this.searchQuery);
    //     },
    //     doButton() {
    //         console.log('radioButon', this.radio1);
    //         this.$emit('radioSelect', this.radio1);
    //     }
    // },
    methods: {
        execSearch() {
            console.log('execSearch button', this.searchQuery);
            this.$emit('searchQueryB', this.searchQuery);
        },
        execButton() {
            console.log('radioSelect button', this.radio1);
            this.$emit('radioSelectB', this.radio1);
        },
        printConsole() {
console.log('typed in to search');
        }
    },
}
</script>

<style>
.email-search {
    background: #D3DCE6;
    /*height: 80px;*/
    box-shadow: 4px 0px 7px -1px rgba(173,171,173,1);
    border-radius: 3px;
    margin-bottom: 1px;
}

.search-inner-container {
    padding: 5px;
}



.search-title {
    font-size: 1em;
    font-weight: bold;
    padding-left:0.08em;
    margin-bottom:0.3em;
}

.search {
    width: 100%;
}

.el-radio-group {
    /*margin: 5px;*/
}

.el-radio-button__inner {
    width: 6em;
    padding: 4px 6px;
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #fff;
    background-color: #8492A6;
    border-color: #8492A6;
    box-shadow: -1px 0 0 0 #20a0ff;
}



/*.el-radio__inner {
    border-color: #888888;
}
.el-radio__input.is-checked .el-radio__inner {
    border-color: lightblue;
    background: #666666;
}*/
</style>