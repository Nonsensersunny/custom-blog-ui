<template>
    <div id="z-clock card">
        <div class="clock list-group list-group-flush">
            <p class="list-group-item list-group-item-action">{{ date }}</p>
            <p class="list-group-item list-group-item-action">{{ time }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            date: '',
            time: '',       
            week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
    },
    methods: {
        updateTime: function() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + '-' + this.week[cd.getDay()];
        },
        zeroPadding: function(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
    },
    created: function() {
        setInterval(this.updateTime, 1000);
        
    }
}
</script>
<style lang="stylus" scoped>
.clock 
    opacity 0.7
</style>
