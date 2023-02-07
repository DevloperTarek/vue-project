<template lang="">
  <div>
    <!-- <Login /> -->
    <!-- <div class="toasts"> -->
      <TransitionGroup name="slide" tag="div" class="toasts">
        <TheToast  v-for="(toast, i) in toasts" :key="i" :toastType="toast.type" :message="toast.message"/>   
      </TransitionGroup>
    
    
  </div>
</template>
<script>
// import Login from './components/Login.vue';
import TheToast from './components/TheToast.vue'
export default {
  name : 'App',
  data:()=>({
    toasts : [
    // {
    //     type: 'Successfull',
    //     message: 'succesfully this is nice work'
    // },
    // {
    //   type:"Username",
    //   message : 'this is error hear',
    // }
    ]
  }),
  components : {
    // Login, 
    TheToast   
  },
  mounted(){
    this.$eventBus.on('toast', (data)=>{
      this.toasts.push(data);
      this.removeItem();
    });
  },
   methods: {
    removeItem(){
      //  setTimeout(() => {
      //    this.toasts.pop();
      //  }, 2000)
      setTimeout(()=>{
        this.toasts.shift();
      },2000);
      }
   }
  
}
</script>
<style>
.toasts {
      position: absolute;
      top: 0;
      right: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      overflow-x:hidden ;
    }
        .slide-enter-active,
        .slide-leave-active {
          transition: all 0.8s ease;
        }
    
        .slide-enter-from,
        .slide-leave-to {
          opacity: 0;
          transform: translateX(120px);
        }
</style>