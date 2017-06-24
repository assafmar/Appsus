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
            this.$emit('selectedEmail',this.email);
            this.$emit('showEmail');
        },


    },
    data() {
        return{
            isSelected:false,
       
        }

    },
    created(){

    }

}


</script>




<style lang="">
.email-preview {
    background: #D3DCE6;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 4px 0px 7px -1px rgba(173,171,173,1);
    transition: all .3s;
}
.email-preview:hover {
    background: #C0CCDA;
    box-shadow: 4px 0px 7px -1px #99A9BF;


}

</style>