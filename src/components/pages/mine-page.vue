<template>
    <div>
        Mine1<br/>
        Mine2<br/>
        Mine3<br/>
        <p>{{ szTime }}</p>
        <mt-button type="primary" size="large" @click="onFxxkClick">FXXK</mt-button>
    </div>
</template>

<script>
import thinkutils from "@/lib/thinkutils/thinkutils"

export default {
    name: ''
    , props: {
    }
    , components: {}
    , data () {
        return {
            szTime: ""
        }
    }
    , created () {
        this.$bus.on('onFxxk', this.onFxxk);
        // this.$bus.once('onFxxk', () => console.log('This listener will only fire once'));
    }
    , mounted () {}
    , destroy() {
        this.$bus.off('onFxxk', this.onFxxk);
    }
    , watch: {}
    , computed: {}
    , methods: {
        onFxxkClick() {
            this.$bus.emit("onFxxk", thinkutils.DateUtils.now());
            this.szTime = thinkutils.DateUtils.now();
        }
        , onFxxk(args) {
            window.console.log("onFxxk " + args);
        }
    }
}
</script>
<style scoped>
</style>