<template>
    <section class="email-search">
        <div class="search-inner-container">
            <div class="search-title">Search: {{searchQuery}} {{radio1}}</div>
            <el-input class="search" size="small" placeholder="Type for search" v-model="searchQuery" :change="execSearch"></el-input>
            <!--<input class="search"  placeholder="Type for search" v-model="searchQuery" :change="execSearch"></input>-->
            <!--<input name="query"  v-model="searchQuery" class="search">-->
            <div style="margin: 5px 0;"></div>
            <el-radio-group class="el-radio-group" size="small" v-model="radio1">
                <el-radio-button label="All"></el-radio-button>
                <el-radio-button label="Unread"></el-radio-button>
            </el-radio-group>
            <!--<el-radio v-model="radio1" label="All"></el-radio>
                    <el-radio v-model="radio1" label="Unread"></el-radio>-->
            <br>
            <el-button class="placeholde1" @click.stop="execSearch" type="success">OK</el-button>
            <el-button class="placeholde1" @click.stop="execButton" type="success">OK</el-button>
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
    computed: {
        doFilter() {
            console.log('search query', this.searchQuery);
            this.$emit('searchQuery', this.searchQuery);
        },
        doButton() {
            console.log('radioButon', this.radio1);
            this.$emit('radioSelect', this.radio1);
        }

    },
    methods: {
        execSearch() {
            console.log('execSearch button', this.searchQuery);
            this.$emit('searchQueryB', this.searchQuery);
        },
        execButton() {
            console.log('radioSelect button', this.radio1);
            this.$emit('radioSelectB', this.radio1);
        }
    },
}
</script>

<style>
.email-search {
    background: #BBBBBB;
    /*height: 80px;*/
    margin-bottom: 1px;
}

.search-inner-container {
    margin: 5px;
}

.search {}

.search-title {
    font-size: 1em;
    font-weight: bold;
    padding-top: 0.5em;
    padding-left:0.08em;
    margin-bottom:0.5em;
}

.el-input {
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
    background-color: #777777;
    border-color: #777777;
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