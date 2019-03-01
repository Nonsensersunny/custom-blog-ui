<template>
    <div id="z-hitech">
        <zclock />
    </div>
</template>
<script>
import zclock from '@/components/z-clock/zclock'
export default {
    components: {
        zclock
    }
}
</script>
<style lang="stylus" scoped>
#z-hitech 
    @media screen and (min-width: 600px) 
        width 180px
        margin-left 10px
    @media screen and (max-width: 600px) 
        width 300px
        margin 10px auto
</style>
