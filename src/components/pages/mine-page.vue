<template>
    <div>
        Mine1<br/>
        Mine2<br/>
        Mine3<br/>
        <mt-button type="primary" width="100%" @click="onFxxkClick">FXXK</mt-button>
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
        }
    }
    , created () {
        this.$bus.on('onFxxk', this.onFxxk);
        this.$bus.once('onFxxk', () => console.log('This listener will only fire once'));
    }
    , mounted () {}
    , destroy() {
        this.$bus.off('onFxxk', this.onFxxk);
    }
    , watch: {}
    , computed: {}
    , methods: {
        onFxxkClick() {
            this.$bus.emit("onFxxk");
        }
        , onFxxk() {
            window.console.log("onFxxk " + thinkutils.DateUtils.now());
        }
    }
}
</script>
<style scoped>
</style>