<template> 
    <div>
        <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">{{title}}</div>
            <div class="mdui-panel-item-summary">卖家：{{seller}}</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'book-card',
        props: {
            book: {
                default: {
                    title: 'A book',
                    seller: 'A Seller',
                    discrption: 'No detail'
                }
            }
        },
        computed: {
            title: function() {
                return this.book.title
            },
            seller: function() {
                return this.book.seller
            },
            description: function() {
                return this.book.description
            },
        }
    }
</script>

