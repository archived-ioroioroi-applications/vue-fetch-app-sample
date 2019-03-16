<template>
  <div>
    <!--ここはvalueをv-bindでcomputedのmessageと繋いでる-->
    <!--つまり、入力フォームの初期値にstoreのmessageを使っている-->
    <!--storeのメッセージを表示してるのは呼び出し元のVueRunning.vueの方なので注意-->
    <input type="text" :value="message" @input="doUpdate"/>

  </div>

</template>
<script>
export default {
  name: 'EditForm',
  computed: {
    message () {
      return this.$store.getters.message
    }
  },
  methods: {
    doUpdate (event) {
      // ディスパッチでstoreのアクションを呼んでいる
      // event.targetはeventを渡してきた要素を指すのでここではinputタグを指してる
      // そのvalueなので、event.target.valueは入力された文字
      // つまり、入力された文字を引数として渡してstoreのdoUpdateアクションを呼んでる
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>
