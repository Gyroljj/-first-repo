<!-- <script>
export default {
  setup () {
    console.log('setup', this)
    const message = 'Hello World'
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script> -->

<script setup>
const message = 'Hello World'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage">Log Message</button>
  </div>
</template>
