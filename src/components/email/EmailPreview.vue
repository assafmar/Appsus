<template>
    <section class="email-preview" @click.stop="seeDetails">
        <div class="preview-title">
            <div class="email-from">From:{{email.from}}</div>
            <div class="email-date">{{ (Date(email.date)).toString().substr(4,17)}}</div>
            <!--<p>{{ (Date(email.date))}}</p>-->
        </div>
        <p class="email-subject">{{email.subject}}</p>
    
    </section>
</template>

<script>
import moments from 'moment'
export default {
    name: 'email-preview',
    props: ['email'],
    methods: {
        seeDetails() {
            console.log('EMIT selected email', this.email);
            this.$emit('selectedEmail', this.email);
        },

        moment: function () {
            return moments();
        }

    },
    data() {
        return {
    
        }

    }

}


</script>




<style lang="">
.email-preview {
    background: #D3DCE6;
    /*height: 80px;*/
    border-radius: 3px;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    flex-direction:column;
    padding: 0px 10px;

}

.preview-title{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.email-from{
font-size: 1em;    
}
.email-date{
font-size: 1em;    
}
.email-subject{
font-size: 1em;    
}


</style>