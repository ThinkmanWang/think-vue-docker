<template>
    <div class="slider">
        <mt-swipe :auto="3500">
            <mt-swipe-item v-for="item in swipeData" :key="item.pic">
                <img :src="item.pic" @click="toAdEvent(item)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "ThinkBanner"

        , data() {
            return {
                swipeData: [
                    {
                        pic: require('@/assets/main_page/jd2019.jpeg'),
                        link: 'https://u.jd.com/gvrmwX',
                        key: 'jd年货节'
                    },
                    {
                        pic: require('@/assets/main_page/taobao.jpg'),
                        link: 'https://u.jd.com/gvrmwX',
                        key: 'taobao特卖'
                    }
                ]
            };
        }
        , mounted () {
            window.console.log("ThinkBanner mounted");
        }
        , methods: {
            toAdEvent (item) {

                if (typeof this._hmt !== 'undefined') {
                    this._hmt.push(['_trackEvent', 'banner', 'click', item.key, '-'])
                }

                // $.report('banner', item.key, 'click', item.key)
                let linkBase = btoa(unescape(encodeURIComponent(item.link)))
                if (item.link.startsWith('http')) {
                    // window.open(item.link);
                    location.href = item.link
                } else {
                    location.href = this.ADDRESS + '/html/openDeepLink?urlBase=' + linkBase
                }
            }
        }
    }
</script>

<style scoped>
    .slider {
        height: 188px;
        /*font-size: 30px;*/
        text-align: center;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
    }

</style>