import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 自作したコンポーネントをimport
import Top from '@/components/Top'
import Notice from '@/components/Notice'
import DataBind from '@/pages/DataBind'
import EventFire from '@/pages/EventFire'
import LoadComponent from '@/pages/LoadComponent'

Vue.use(Router)

export default new Router({
  routes: [
    // デフォルトの定義（不要なら削除）
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 下記を追加. URLパスに対応するコンポーネントを定義
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/databind',
      name: 'DataBind',
      component: DataBind
    },
    {
      path: '/eventfire',
      name: 'EventFire',
      component: EventFire
    },
    {
      path: '/loadcomponent',
      name: 'LoadComponent',
      component: LoadComponent
    }
  ]
})
