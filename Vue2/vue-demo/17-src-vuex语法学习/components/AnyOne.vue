<template>
  <div>
    <h2>随便一个组件-1</h2>
    <p>{{ $store.state.user.age }}</p>
    <p>{{ $store.state.user.uname }}</p>
    <p>{{ $store.getters['user/abc'] }}</p>
    <p>{{ $store.getters['user/isAll'] }}</p>
    <button @click="$store.commit('user/updateAge', 300)">修改</button>
    <br />
    <button @click="$store.dispatch('user/updateAgeAfter3s', 400)">
      3s后修改
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
