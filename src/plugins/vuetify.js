import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify, {
  VApp,
  VAppBar,
  VBtn,
  VIcon,
  VNavigationDrawer,
  VAppBarNavIcon,
  VBottomNavigation,
  VTextField,
  VRow,
  VCol
} from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VNavigationDrawer,
    VAppBarNavIcon,
    VBottomNavigation,
    VBtn,
    VIcon,
    VTextField,
    VCol,
    VRow
  },
})

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
    icons: {
      iconfont: 'mdi', // 默认值 - 仅用于展示目的
    },
  },
}

export default new Vuetify(opts)