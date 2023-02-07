<template>
   <div>
   <Buttons />
    <div class="login-page">
        <div class="login-card">
            <div class="text-center">
                <h2>User Login</h2>
            </div>
            <form action="#" @submit.prevent="handleClick">
                <div>
                    <label>Username</label>
                    <input type="text" placeholder=" Enter your Username" required v-model="formdata.username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required v-model="formdata.password" />
                </div>
                <!-- <button type="submit">Login</button> -->
                <Buttons :block="true" loading>Login</Buttons>
            </form>
            <div class="password">
                <div>
    
                    <input type="checkbox">
                    <label>Remember me</label>
                </div>
                <div><a href="#">Forgate Password</a></div>
            </div>
           
        </div>
    </div>
   </div>
</template>
<script>
import axios from "axios"
import Buttons from './TheButton.vue'
// vue.use({axios});
export default {
    name : "Login",
    data: ()=>({
        formdata :{
            username : "",
            password : "",
        },
       
    }),
    components:{
        Buttons,
        axios,
    },
   
    methods:{
        handleClick(){
          if(this.formdata.password.length < 8){
            // alert("this is working");
              this.$eventBus.emit('toast', { 
                type : "success",
                message : "loging successfully",
               });
            return;
          } else{
          this.$eventBus.emit('toast',{
            type : "Error",
            message : 'something went wrong hear',
          });
           
          }
          this.loggin = true;
            axios.post("https://jsonplaceholder.typicode.com/todos/login", this.formdata).then((res) => {
               console.log(res.data);
                this.$eventBus.emit('toast', {
                    type: "success",
                    message: res.data.message,
                });
            }).catch((Error)=>{
                let errorMessage = "something went wrong hear";
                if(Error.response){
                    errorMessage = Error.response.data.message;
                }
                this.$eventBus.emit('toast', {
                    type: "error",
                    message: errorMessage,
                });

            }).finally(()=>{
                this.loggin = false;
            })
          
        }
        
    }

}
</script>
<style>
.login-page {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background: rgb(235, 235, 235);
    }
    .login-card {
        width: 400px;
        min-height: 193px;
        box-shadow: 0px 2px 9px 4px #dfdfdf;
        background: #000;
        border-radius: 5px;
        padding: 44px 33px;
    }
    
    .login-card input[type="text"],
    .login-card input[type="password"]{
        width: 100%;
        padding: 16px 6px;
        background: #f5f5f5;
        color: black;
        outline: none;
        border-radius: 5px;
        font-weight: 500;
        font-size: 16px;
        border: none
    }
    .text-center h2 {
        text-align: center;
    }
    form label {
        text-align: start;
        display: flex;
    }
    .password{
        display: flex;
        justify-content: space-between;
    }

    .password a {
        text-decoration: underline;
    }
</style>