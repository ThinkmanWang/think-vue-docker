<template>
    <div id="app-main">
        <mt-header id="app-header" v-bind:title="selected" fixed="true">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                <mt-button >关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-tab-container id="app-content" class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="首页">
                <HomePage></HomePage>
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                <MinePage></MinePage>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="首页">
                <img slot="icon" src="@/assets/logo.png" />
                首页
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="@/assets/logo.png" />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import thinkutils from "@/lib/thinkutils/thinkutils"
import HomePage from "@/components/pages/home-page"
import MinePage from "@/components/pages/mine-page"

export default {
    name: 'MainPage'
    , props: {
    }
    , components: {
        HomePage
        , MinePage
    }
    , data () {
        return {
            selected: '首页'
        };
    }
    , mounted () {
        
    }
    , created () {}
    , watch: {}
    , computed: {}
    , methods: {
        
    }
    
    
}
</script>
<style scoped>
#app-main #app-header {
    height: 7vh;
    min-height: 48px;
}
/* #app-main #app-content {
    position:relative;
} */
</style>