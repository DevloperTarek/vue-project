<template>
    <div>
        <div :class="['toast','toast__' + toastType]">
            <div class="toast__header">
                <span>{{ toastType }}</span>
                <span>X</span>
            </div>
            <div class="toast__body">
                {{message}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : "TheToast",
        props : {
            toastType : {
                type : String,
                default : "success",
            },
            message:{
                type : String,
                default : 'Error',
            }
        }
    }
</script>
<style>
    .toast {
        width: 299px;
        box-shadow: 0 0 6px 2px #c9c9c9;
        min-height: 22px;
        margin: 11px;
        background:#fff;
        border-radius: 5px;
        color: green;
        transition: 11 1s ease;
    }
    .toast__Error 
    {
        color: red;
    }
    .toast__header {
        border-radius: 3px 3px 0 0;
        background: rgb(215, 215, 215);
        font-weight: bold;
        padding: 5px 11px;
        display: flex;
        justify-content: space-between;
    }
    .toast__body {
        padding: 11px;
    }
    .toast__Error .toast_header{
        background:rgb(252, 198, 198);
    }
    .toast__colse {
        cursor: pointer;
    }
</style>