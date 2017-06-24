<template>  
<section v-if="email" class="email-details">
    
    <el-button class="close-btn" type="danger" icon="close" @click="showEmail">
    </el-button>
    <div class="details-header">
        <div class="details-from">{{email.from}}</div>
        <div class="details-date">{{moment(email.date).format('lll')}}</div>
        <div class="details-content">
        <div class="details-subject"><h2>{{email.subject}}</h2></div>
        <div class="details-text">{{email.text}}</div>
        </div>
        <div class="details-buttons">
            <el-button class="details-button" @click="isReadToggle(false)" v-show="email.isRead" type="primary" icon="check" size="large"></el-button>
            <el-button class="details-button" @click="isReadToggle(true)" v-show="!email.isRead" type="primary" icon="message" size="large"></el-button>
            <el-button class="details-button" @click="emailDelete()" type="danger" icon="delete" size="large"></el-button>
        </div>
    </div>
  



</section>
</template>


<script>

export default {
    name: 'email-details',
    props: ['email'],
     created() {
            console.log('create - make it isRead - before',this.email.isRead) 
            this.$emit('isReadChange', true, this.email)
             console.log('create - make it isRead - after',this.email.isRead) 
    },
    methods: {
        isReadToggle(val) {
            console.log(this.email,val,'before')
            this.$emit('isReadChange', val, this.email)
            // this.email.isRead = !this.email.isRead;
            console.log(this.email,val,'after')
        },
        emailDelete(){
            this.$emit('emailDelete', this.email)
        },
        showEmail(){
            this.$emit('showEmail')
        }
        },

    
    data() {
        return{
           
        }

    }

}
 
</script>




<style lang="">
.email-details{
    background: #F9FAFC;
    width: 100%;
    height: 100%;
    border-radius: 0 0px 13px 13px;
    box-shadow: 0px 0px 5px 0px rgba(173,171,173,1);
}
.details-header{
    padding: 10% 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-size: 1.3em;
    font-family: monospace;
    font-weight: 900;
}
.details-content{
    padding: 5%;
    font-weight: 400;
}

.details-buttons{
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
}

.details-button{
    box-shadow: 4px 0px 11px -1px rgba(173,171,173,1);
}

.close-btn{
    margin-left: 90%;
    margin-top: 10px;
    display: none;
}

@media (max-width: 710px) {
  .close-btn{
      display: initial;
  }

}



    
</style>