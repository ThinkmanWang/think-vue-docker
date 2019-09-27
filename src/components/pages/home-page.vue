<template>
    <div>
        <ThinkBanner ref="thinkBanner"></ThinkBanner>
        <ThinkNavBar></ThinkNavBar>
    </div>
</template>

<script>
import ThinkBanner from "@/components/controlls/think-banner";
import ThinkNavBar from '@/components/controlls/think-nav-bar'
// import { Navbar, TabItem } from 'mint-ui';

export default {
    name: ''
    , props: {
    }
    , components: {
        ThinkBanner
        , ThinkNavBar
    }
    , data () {
        return {
            selected: "1"
        };
    }
    , created () {}
    , mounted () {
        window.console.log("Home page loaded");
    }
    , watch: {}
    , computed: {}
    , methods: {}
}
</script>
<style>
    
</style>