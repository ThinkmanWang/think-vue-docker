<template>
    <div>
        <ThinkBanner ref="thinkBanner"></ThinkBanner>
    </div>
</template>

<script>
import ThinkBanner from "@/components/controlls/think-banner";

export default {
    name: ''
    , props: {
    }
    , components: {
        ThinkBanner
    }
    , data () {
        return {
        }
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