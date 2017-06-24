<template>
    <section class="email-preview" @click.stop="seeDetails">
        <div class="preview-title">
            <div class="email-from">From: {{email.from}}</div>
            <div class="email-date">{{moment(email.date).format('lll')}}</div>
        </div>
        <p class="email-subject">{{email.subject}}</p>
    
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
    /*height: 80px;*/
    border-radius: 3px;
    /*width: 100%;*/
    margin-bottom: 1px;
    display: flex;
    flex-direction:column;
    padding: 0px 10px;
     border-radius: 3px;
    cursor: pointer;
    box-shadow: 4px 0px 7px -1px rgba(173,171,173,1);
    transition: all .3s;
     box-sizing: border-box;

}

.preview-title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 0.5em;
    flex-wrap: wrap;
}

.email-from{
font-size: 1em;    
}
.email-date{
font-size: 0.5em;    
}
.email-subject{
font-size: 1em;    
  
   
}
.email-preview:hover {
    background: #C0CCDA;
    box-shadow: 4px 0px 7px -1px #99A9BF;


}

</style>