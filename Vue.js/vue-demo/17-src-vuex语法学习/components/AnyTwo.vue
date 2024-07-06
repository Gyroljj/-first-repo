<template>
  <div>
    <h2>随便一个组件-2</h2>
    <p>{{ nianling }}</p>
    <p>{{ uname }}</p>
    <p>{{ abc }}</p>
    <p>{{ isAll }}</p>
    <button @click="updateAge(age)">更新年龄</button>
    <br />
    <button @click="updateAgeAfter3s(age)">更新年龄(异步)</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      age: 2000
    }
  },
  // 数据类型的，都放在计算属性当中
  computed: {
    ...mapState('user', { nianling: 'age', uname: 'uname', list: 'list' }),
    ...mapGetters('user', ['abc', 'isAll'])
  },
  // 方法类型的，都放到methods中
  methods: {
    ...mapMutations('user', ['updateAge']),
    ...mapActions('user', ['updateAgeAfter3s'])
  }
}
</script>

<style lang="less" scoped></style>
