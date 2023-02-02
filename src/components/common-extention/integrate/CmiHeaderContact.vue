<template>
  <div class="header__contact" :class="position ? 'positionFixed' : ''">
    <div class="header__contact__linkPage">
      <div
        v-for="(item, i) in dropHeader"
        :key="i"
        class="header__contact__item"
      >
        <DropDown :data-drop="item.dataDrop" />
      </div>
    </div>
    <div class="header__contact__call">
      <span>
        <i class="fas fa-phone-volume"></i>
      </span>
      <span>
        <span>
          <img
            class="iconFlag"
            src="@/static/pc-static/common/icon/flag/VN.png"
            alt=""
          />
        </span>
        VN
      </span>
      <span>(+84) 777 444 933</span>
    </div>
    <div class="header__contact__linkPage">
      <router-link
        v-if="
          TokenData !== null && TokenData.userName == 'admin123' && !linkAdmin
        "
        to="/admin"
        class="header__contact__item fa-center textWhite"
      >
        <span><i class="fas fa-users-cog"></i></span>Admin Page
      </router-link>
      <div v-if="TokenData == null" class="header__contact__item">
        <span class="fa-center"><i class="fas fa-user"></i></span>
        <span><DropDown :data-drop="dataDropLogin" /></span>
      </div>
      <div v-else class="header__contact__item">
        <span class="fa-center"><i class="fas fa-user"></i></span>
        <DropDown :data-drop="dataDropAcc" @logOut="logOut()" />
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '../../common/DropDown.vue'
export default {
  name: 'HeaderContact',
  components: { DropDown },
  props: {
    positionProp: Boolean,
    linkAdminProp: Boolean,
  },
  data() {
    return {
      TokenData: '',
      position: this.positionProp || false,
      linkAdmin: this.linkAdminProp,
      dropHeader: [
        {
          dataDrop: {
            txtBtn: { drop: 'Pages', link: '/' },
            txtItem: [
              { item: 'Home', link: '/home' },
              { item: 'Shop', link: '/shop-page' },
              { item: 'Error', link: '/error' },
              { item: 'item1', link: '/1' },
            ],
          },
        },
        {
          dataDrop: {
            txtBtn: { drop: 'Blogs', link: '/' },
            txtItem: [{ item: 'item2', link: '/' }],
          },
        },
        {
          dataDrop: {
            txtBtn: { drop: 'Products', link: '/' },
            txtItem: [{ item: 'item2', link: '/' }],
          },
        },
      ],
      // dataDropAcc: {
      //   txtBtn: {
      //     drop: this.$store.state.token
      //       ? this.$store.state.token.userName
      //       : 'login',
      //     link: '/',
      //   },
      //   txtItem: [{ item: 'Logout', event: 'logOut' }],
      // },
      // dataDropLogin: {
      //   txtBtn: { drop: 'Login', link: '/login' },
      // },
    }
  },
  mounted() {
    // try {
    //   this.TokenData = this.$store.state.token
    // } catch (error) {
    //   console.log(error)
    // }
  },
  methods: {
    logOut() {
      window.localStorage.removeItem('token')
      this.$store.commit('setToken')
      this.TokenData = this.$store.state.token
      console.log(this.$router.currentRoute.matched[0].name)
      if (this.$router.currentRoute.matched[0].name === 'Admin') {
        this.$router.push({ name: 'Home' })
      }
    },
  },
}
</script>

<style lang = 'scss'>
.header {
  width: 100%;
  height: auto;
  display: block;
  /* background-image: url(~@/assets/img/bg.jpg); */
  &__contact {
    width: 100%;
    height: 50px;
    background-color: #1a212e;
    display: flex;
    color: white;
    font-weight: 500;
    padding: 10px 120px;
    align-items: center;
    justify-content: space-between;
    &__item {
      /* padding: 0px 20px; */
      display: flex;
      color: white;
      span {
        padding: 0 10px;
      }
    }
    &__item:hover span {
      color: white;
      text-shadow: 2px 2px 10px #fff;
    }
    &__linkPage {
      display: flex;
    }
    &__call {
      span {
        padding: 0 5px;
      }
    }
  }
}
.iconFlag {
  width: 15px;
  height: 15px;
}
.fa-center {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>
