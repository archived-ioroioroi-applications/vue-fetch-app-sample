<template>
  <div>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <!-- methods で定義された関数を, @<Event>="<Method>()" で発火させることができる -->
    <button @click="clear()">clear</button>
    <button @click="call()">fetch</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Wellcome FetchData Page!'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    },
    call () {
      // 非同期で fetch 以下の処理を実行. ここでは対象のURLにGetリクエストを実行. 非同期なので, 画面が表示された時は data() で定義した初期値が表示され, その後に下記レスポンスに入れ替わる様子が見て取れる.
      fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
        .then(response => {
          // レスポンスのjsonをパース
          return response.json()
        })
        .then(json => {
          this.msg = json.postalcodes[0].adminName1
        })
        .catch(() => {
        })
    }
  }
}

</script>
