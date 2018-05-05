<template>
    <loading v-if="this.loading"></loading>
    <msg-dialog v-else-if="this.err !== null" error="true" v-bind:message="err"></msg-dialog>
    <div class="mdui-container mdui-m-t-3" v-else>
        <div class="mdui-panel" mdui-panel>
            <div class="mdui-panel-item mdui-panel-item-open mdui-m-b-3 mdui-ripple" v-for="book in json" v-bind:key="book.id">
                <book-card v-bind="{book: book}"></book-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../components/Loading.vue'
    import MsgDialog from '../components/MsgDialog.vue'
    import BookCard from '../components/BookCard.vue'

    export default {
        name: 'book-list',
        components: {Loading, MsgDialog, BookCard},
        data() {
            return {
                url: 'https://api.myjson.com/bins/11hxzu',
                json: null,
                loading: false,
                err: null
            }
        },
        created() {
            this.fetchData()
            this.$mdui.mutation()
        },
        methods: {
            fetchData() {
                this.loading = true
                this.$mdui.JQ.ajax({
                    method: 'GET',
                    url: this.url,
                    success: (data) => {
                        this.loading = false
                        this.json = JSON.parse(data)
                        if (this.json.status === '200') {
                            this.json = this.json.books 
                            console.log(this.json[0].title)
                        }
                        else
                            this.err = '欸..内容无法正常加载'
                    },
                    error: (xhr, textStatus) => {
                        this.loading = false
                        this.err = '欸..获取数据出现异常'
                    }
                })
                this.$mdui.mutation()
            }
        }
    }
</script>
