<template>
    <div>
        <h1>hi,{{ user.name }}</h1>
        <hr>
        <p>您的手机号码为{{ user.phone }}</p>
        <button class="btn-edit" @click="editPhone" :disabled="!editable">更新手机号</button>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: mapState({
      user: state => state.users.user,
      editable: state => state.users.editable
    }),
    methods: mapActions('users', [
      'editPhone'
    ]),
    created () {
      this.$store.dispatch('users/getCurrentUser')
    }
  }
</script>
<style scoped>
    .btn-edit[disabled]{
        cursor: not-allowed;
    }
</style>
