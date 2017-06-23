<template>
    <section class="email-preview" @click.stop="seeDetails">
    
        <p>{{email.from}}</p>
        <!--<p>{{Date(email.date)}}</p>-->
       <!-- <p>{{ (Date(email.date)).toString().substr(8,13)}}</p>-->
       <p>{{moment(email.date).format('lll')}}</p>
        <p>{{email.subject}}</p>


    </section>
</template>

<script>
export default {
    name: 'email-preview',
    props: ['email'],
    methods: {
        seeDetails() {
            console.log('EMIT selected email!!!!!!!!!!',this.email);
            this.$emit('selectedEmail',this.email);
        },


    },
    data() {
             return{

        // moment:moments,
    }

},
    created(){

    }

}


</script>




<style lang="">
.email-preview {
    background: #D3DCE6;
    /*height: 80px;*/
    width: 100%;
    margin-bottom: 5px;
}
</style>