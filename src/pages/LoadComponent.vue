<template>
  <div>
    <reactivetext transferMsg="LoadComponent > ReactiveText"/>
  </div>
</template>

<script>
// vueファイルをインポート. '@/.../...' とすることで src/ からの絶対パスで指定できる. 相対パスなら './HogeFuga' とか '../components/HogeFuga' など.
import reactivetext from '@/components/ReactiveText'

export default {
  components: {
    reactivetext
  }
}
</script>
