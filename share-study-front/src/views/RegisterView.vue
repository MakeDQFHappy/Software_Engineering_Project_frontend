<template>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="user_name">
        <a-input
          v-decorator="[
            'user_name',
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="password">
        <a-input
          v-decorator="[
            'password',
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" href="#/login">
        注册
      </a-button>
    </a-form-item>

    </a-form>
  </template>
  
  
<script>

export default {
  name: 'RegisterView',
  data () {
    return {
      loginForm: {
        loginName: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
  }
}
</script>