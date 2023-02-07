<template>
    <div>
        <h3>{{ text|Jame}}</h3>
        <div class="the__button" :class="{'the__button__block': block}">
            <button>
                <slot></slot>
            </button>
            <div class="the__button__loading img" v-if="loading">
               
            </div>
       
        </div>
    </div>
</template>
<script>
export default {
    name : "Button",
    data(){
        return {
            text : "Hello world how are you today";
        }
    }
    props:{
        loading :{
            type : Boolean,
            default : false,
        },
        block:{
            type : Boolean,
            default : false
        }
    }
}
</script>
<style>
.the__button {
        position: relative;
        display: inline-block;
    }
    .the__button__block {
        width: 100%;
    }
    .the__button__loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(48, 15, 15);
}
.the__button button {
    width: 100%;
}
.the__button__loading img {
    width: 25px;
}
  .the__button button {
      width: 100%;
      padding: 12px 0;
      background: #f5f6f5f6;
      color: #000;
      margin: 32px 0px;
  }
</style>