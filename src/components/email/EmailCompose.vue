<template>  
<section class = "email-compose">
     <h3>To : email</h3><el-input class="to" size="large"  placeholder="enter an email adress" v-model="to"></el-input>
     <h3>Subject:</h3><el-input class="sub"size="large" placeholder="Please input subject" v-model="subject">{{subject}}</el-input>
     <el-input class="txt" :autosize="{ minRows: 6, maxRows: 16}" type="textarea"placeholder="Please input" v-model="text">{{text}}</el-input> <br/>
     <el-button-group class="compose-buttons">
        <el-button class="compose-button" @click="cancel" type="warning">   Cancel</el-button>
        <el-button class="compose-button" @click="send" type="success">Send</el-button>
    </el-button-group>






</section>
</template>


<script>
import { Notification } from 'element-ui';
    export default {
    data(){
        return{
       to: '',
       subject: '',
       text: '',
       from: 'myself@example.com',
       mail: null
    }
  },

  methods:{
        send() {
            this.getMailToSend();
            this.$emit('send', this.mail);
            this.clear()
        },
        cancel(){
            this.$emit('cancel');
            this.clear();
        },
        getMailToSend(){
            this.mail = { 
                to:this.to,
                from:this.from,
                subject:this.subject,
                text:this.text,
                isRead: false,
                category:{sent:false,inbox:true}
            }
        },
        clear(){
            this.to = '';
            this.subject = '';
            this.text = '';
        }

    }   

    }



</script>




<style lang="">
.email-compose{
font-size: 1.2em;
display: inline-block;
background:#F9FAFC;
width: 100%;
height:100%;
}
.compose-buttons{
    margin: 10px;
    margin-left: 68%;
}
.compose-button{
    box-shadow: 4px 0px 11px -1px rgba(173,171,173,1);

}
.to{
    width: 40%;
    margin-left: 10px;
}
.sub{
    width: 40%;
    margin-left: 10px;
}
.txt{
    width: 80%;
    margin: 30px 10px 10px 10px;
}

h3{
    margin: 10px;
}


    
</style>