<template>
    <div class="z-info container">
        <wired-card class="z-info-card" elevation="4">
            <div class="flip-wrapper">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front">
                            <img src="./../../assets/avatar.jpeg" alt="" srcset="" class="rounded-circle">
                            <p class="flip-caption">Zyven</p>
                        </div>
                        <div class="back">
                            <img src="./../../assets/zyven.jpeg" alt="" srcset="" class="rounded-circle">
                            <p class="flip-caption">Zhao</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="z-info-tags container">
                <div class="z-info-tags-wrapper row">
                    <div class="z-tag z-article-tag col-4" data-toggle="tooltip" data-placement="top" title="Articles">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <!-- <p class="">1</p> -->
                                    <img src="data:image/png;base64,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" alt="Article">
                                </div>
                                <div class="back">
                                    <!-- <p>Art</p> -->
                                    <p class="back-caption">10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="z-tag z-archive-tag col-4" data-toggle="tooltip" data-placement="top" title="Archive">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <!-- <p class="">1</p> -->
                                    <img src="data:image/png;base64,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" alt="Article">
                                </div>
                                <div class="back">
                                    <!-- <p>Arch</p> -->
                                    <p class="back-caption">10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="z-tag z-tag-tag col-4" data-toggle="tooltip" data-placement="top" title="Tags">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <!-- <p class="">1</p> -->
                                    <img src="data:image/png;base64,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" alt="Archive">
                                </div>
                                <div class="back">
                                    <!-- <p>Art</p> -->
                                    <p class="back-caption">10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="list-group list-group-flush">
                <a href="/#/" class="list-group-item list-group-item-action">Main</a>
                <a href="/#/about" class="list-group-item list-group-item-action">About</a>
                <a href="#" class="list-group-item list-group-item-action">Search</a>
            </div>
        </wired-card>
        <div class="z-copyright">&copy;鄂ICP备17023785号</div>
        <div class="gotop-area">
            <zgotop />
        </div>
    </div>
</template>
<script>
import zgotop from '@/components/z-gotop/zgotop'
export default {
    components: {
        zgotop,
        props: []
    },
    computed: {
        
    }
}
</script>
<style lang="stylus" scoped>
.z-info
    @media screen and (min-width: 600px) 
        width 250px
    @media screen and (max-width: 600px) 
        width 300px
        margin 0 auto
        .z-copyright 
            display none
    .z-info-card 
        background-color #fff 
        opacity 0.6
        height 100%
        .flip-wrapper 
            height 100px
            margin 10px auto
            .flip-container
                perspective 1000
                margin 0 auto
            .flip-container:hover .flipper, .flip-container.hover .flipper
                transform rotateY(180deg)
            .flip-container, .flip-container *
                width 80px
                height 80px
                .flipper 
                    transition 1s
                    transform-style preserve-3d
                    position  absolute
                    .front, .back 
                        backface-visibility hidden
                        position absolute
                        top 0
                        left 0
                        .rounded-circle
                            box-shadow 1px 1px 1px 2px #bbb
                        .flip-caption 
                            margin 0 auto
                            line-height 30px
                    .front
                        z-index 2
                    .back 
                        transform rotateY(180deg)
        .z-info-tags 
            line-height 5px
            perspective 1000
            .z-tag
                border-right 1px solid #ccc
            & .z-tag:nth-child(3)
                border-right none
            .z-article-tag, .z-archive-tag, .z-tag-tag
                .flip-container
                    perspective 1000
                    margin 0 auto
                .flip-container:hover .flipper, .flip-container.hover .flipper
                        transform rotateX(180deg)
                .flip-container, .flip-container *
                    width 20px
                    height 20px
                    .flipper 
                        transition 1s
                        transform-style preserve-3d
                        position  absolute
                        .front, .back 
                            backface-visibility hidden
                            position absolute
                            top 0
                            left 0
                        .front 
                            z-index 2
                        .back 
                            transform rotateX(180deg)
                            top -5px
            img 
                width 20px

    .z-copyright 
        font-family fantasy
    .gotop-area 
        position fixed 
        bottom 30px
        right 30px
        opacity 0.4
        z-index 3
</style>
