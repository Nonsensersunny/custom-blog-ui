<template>
    <div>
        <div id="zcomment">
            <div class="comment-wrapper">
                <div class="comment-info">
                    <span><input type="text" name="" id="" placeholder="Nickname"></span>
                    <span><input type="text" placeholder="Email"></span>
                    <span><input type="text" placeholder="Website"></span>
                </div>
                <div class="comment-divider"></div>
                <div class="comment-content">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Wanna say something to me?"></textarea>
                    <div class="comment-addon"><a href="#">Emoji</a><span>|</span><a href="#">Preview</a></div>
                    <div class="md-info">
                        <img src="./../../assets/svg/markdown.svg" alt="" srcset="">
                        <button>Reply</button>
                    </div>
                    
                </div>
            </div>
            <div class="comment-display">
                <span><strong>1</strong> Comment(s)</span>
                <ul class="comment-list">
                   <li class="comment-items">
                       <div class="comment-item">
                           <div class="comment-item-wrapper">
                               <img class="item-avatar" src="./../../assets/avatar.jpeg" alt="">
                                <span class="item-info">
                                    <a href="#">Zyven</a>
                                    <p class="item-time">2018-01-01</p>
                                </span>
                                <!-- <span class="item-ip">
                                    Chrome 88.88.88.88
                                </span> -->
                           </div>
                           <div class="item-content">
                               <span class="item-detail">That's great!</span>
                               <a href="#" class="reply-link">Reply</a>
                           </div>
                           <div class="item-divider"></div>
                       </div>
                    </li> 
                    <li class="comment-items">
                        <div class="comment-item">
                           <div class="comment-item-wrapper">
                                <img class="item-avatar" src="./../../assets/avatar.jpeg" alt="">
                                <span class="item-info">
                                    <a href="#">Zyven</a>
                                    <p class="item-time">2018-01-01</p>
                                </span>
                                <!-- <span class="item-ip">
                                    Chrome 88.88.88.88
                                </span> -->
                           </div>
                           <div class="item-content">
                               <span class="item-detail">The resource http://localhost:8082/fonts/font.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it wasn't preloaded for nothing.</span>
                               <a href="#" class="reply-link">Reply</a>
                           </div>
                           <div class="item-divider"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zcomment',
    data() {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
#zcomment
    font-family sans-serif
    font-size 15px
    .comment-wrapper
        border 1px solid gray
        border-radius 5px
        padding 20px
        .comment-info
            @media screen and (min-width: 600px) 
                display flex
            @media screen and (max-width: 600px) 
                display inline-block
            span 
                    margin 1px
                    input 
                        border none
                        outline none
        .comment-divider
            border-bottom 1px dashed gray
        .comment-content
            width 100%
            textarea
                width 100%
                outline none
                border none
            .comment-addon
                float right
            .comment-addon *
                margin-left 20px
            .md-info
                clear both
                padding-top 10px
                img
                    width 25px
                button 
                    float right 
                    border-radius 10px
                    outline none
                    width 100px
    .comment-display
        ul 
            list-style none
            margin-top 20px
            padding 0
            li
                margin-bottom 10px
        .comment-list
            .comment-items
                .comment-item
                    .comment-item-wrapper
                        display flex
                        .item-avatar
                            width 40px  
                            height 40px
                            border-radius 40px
                        .item-info
                            line-height 20px
                            margin-left 10px
                            .item-time
                                font-size 12px
                        .item-ip
                            margin-left 10px
                    .item-content
                        @media screen and (max-width 600px) 
                            margin 0
                        @media screen and (min-width 600px) 
                            margin-left 50px
                        .item-detail
                            word-wrap break-word
                        .reply-link
                            float right
                    .item-divider
                        border-bottom 1px dashed gray
                        clear both
                        margin 10px
</style>
