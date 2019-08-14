import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 自作したコンポーネントをimport
import Top from '@/components/Top'
import Notice from '@/components/Notice'
import DataBind from '@/pages/DataBind'
import EventFire from '@/pages/EventFire'
import LoadComponent from '@/pages/LoadComponent'
import FetchData from '@/pages/FetchData'
import VuexRunning from '@/pages/VuexRunning'

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
      component: Top,
      props: {
        menu: {
          type: Array,
          required: true
        },
        collapsed: {
          type: Boolean,
          default: false
        },
        width: {
          type: String,
          default: '350px'
        },
        widthCollapsed: {
          type: String,
          default: '50px'
        },
        showChild: {
          type: Boolean,
          default: false
        },
        theme: { // available themes: 'white-theme'
          type: String,
          default: ''
        },
        showOneChild: {
          type: Boolean,
          default: false
        },
        rtl: {
          type: Boolean,
          default: false
        }
      }
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
    },
    {
      path: '/fetchdata',
      name: 'FetchData',
      component: FetchData
    },
    {
      path: '/vuexrunning',
      name: 'VuexRunning',
      component: VuexRunning
    }
  ]
})
