<template>
  <div>
    <!-- 呼び出し元に渡された transferMsg を表示するスペース -->
    <h2>
      {{transferMsg}}
    </h2>
    <!-- 自分の中で定義した data である msg を表示するスペース -->
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello reactiveText!'
    }
  },
  props: {
    // data() で定義した変数と同じkeyを指定すると duplicated error となるので注意
    transferMsg: String
  }
}
</script>
