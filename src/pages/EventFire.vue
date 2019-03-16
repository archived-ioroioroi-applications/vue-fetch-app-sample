<template>
  <div>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <!-- methods で定義された関数を, @<Event>="<Method>()" で発火させることができる -->
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Wellcome EventFire Page!'
    }
  },
  // export 内で methods を定義すると, <template> 内で利用できる.
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>
