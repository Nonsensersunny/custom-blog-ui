<template>
    <div id="z-content">
            <div id="preview"></div>
            <button @click="convert()">Convert</button>
            <button @click="test()">Test HEADER</button>
            <zcomment />
    </div>
</template>
<script>
import { markdown } from 'markdown'
import zcomment from '@/components/z-comment/zcomment'
export default {
    data () {
        return {
            md: ''
        }
    }, 
    components: {
        zcomment
    },
    methods: {
        test: function() {
            let param = {
                aid: 1,
            };
            let _this = this;
            this.$axios.get(_this.$api.view_article_by_id, param)
            .then(response => {
                console.log(response)
            })
        },
        convert: function() {
            var _this = this;
            var aid = 1;
            var data = { "aid": aid, "token": 123 };
            $.get({
            url: "http://127.0.0.1:9000/article/view?aid=" + 4,
            headers: {
                "Authorization": "sdadsa"
            },
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "sdfdsf");
            },
            // data: JSON.stringify(data),
            contentType: "application/JSON",
            xhrFields: { withCredentials: true },
            success: function(result) {
                // console.log(result)
                _this.md = result.data.content;
                console.log(_this.md)
                document.getElementById('preview').innerHTML = markdown.toHTML(_this.md);
                // var converter = new showdown.Converter();
                // document.getElementById('preview').innerHTML = converter.makeHtml(_this.md);
            }
            }).fail(function(e) {
                console.log(e)
            });
            // document.getElementById('preview').innerHTML = markdown.toHTML(this.md);
        }
    },
    created: function() {
        var _this = this;
        var aid = 1;
        var data = { "aid": aid };
        // var mk = $.get('http://127.0.0.1:9000/view/1', function(result) {
        //     _this.md = result;
        //     console.log(result);
        // })
        // $.get({
        // url: "http://127.0.0.1:9000/view/" + aid,
        // data: JSON.stringify(data),
        // contentType: "application/JSON",
        // xhrFields: { withCredentials: true },
        // success: function(result) {
        //     console.log(result)
        // }
        // }).fail(function(e) {
        //     console.log(e)
        // });
        
    },
    // mounted: function() {
    //     this.convert();
    // }
}
</script>
<style lang="stylus" scoped>
#z-content
    background-color #fff 
    opacity 0.6
    text-align left
    padding 10px
    @media screen and (max-width: 600px) 
        width 300px
        margin 10px auto
    #preview 
        font-family cursive
        code 
            background-color #111
</style>
