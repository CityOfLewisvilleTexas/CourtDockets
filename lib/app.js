window.addEventListener('DOMContentLoaded',
    function () {
        let app = new Vue({
            el: '#app',
            data: function () {
                return {
                    docketDates: [],
                    activeSearchMethod: '',
                    activeDataSet: [],
                    activeParam: '',
                    isLoading: false
                }
            },
            methods: {
                getCourtDocketDates: function () {
                    let that = this
                    $.post('http://ax1vnode1.cityoflewisville.com/v2/', {
                        webservice: 'Court_DocketDates'
                    }, function (dockets) {
                        that.docketDates = dockets[0]
                        .map(date => {
                            return date['DocketDate']
                        })
                        console.log(that.docketDates)
                    })
                },
                updateSearchMethod: function(val) {
                    this.activeSearchMethod = val.method
                    this.activeDataSet = val.data
                    this.activeParam = val.param
                    this.isLoading = false
                    console.log('activeDataSet', this.activeDataSet)
                },
                setLoader: function() {
                    return this.isLoading = this.isLoading === false ? this.isLoading = true : this.isLoading = false
                }
            },
            created() {
                this.getCourtDocketDates()
            }
    })
    })