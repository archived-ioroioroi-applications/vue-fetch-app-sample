<template>
  <div id="message_space">
    <p>{{message}}</p>
    <EditForm></EditForm>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm'

export default {
  components: {EditForm},

  // vuexのstoreは基本的にcomputedと使う
  computed: {
    // main.jsでローカルにstoreを登録してるので、$storeが使える
    // ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    message () {
      return this.$store.getters.message
    }
  }
}

</script>

<style>

</style>
