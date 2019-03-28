Vue.component('search-officer-id', {
    props: ['loading'],
    components: {},
    data() {
        return {
            officerID: ''
        }
    },
    methods: {
        getDocketsByOfficerID: function () {
            let that = this
            $.post('http://ax1vnode1.cityoflewisville.com/v2/', {
                webservice: 'Courts/Dockets/Get Docket By Officer ID',
                OfficerNumber: this.officerID
            }, function (data) {
                that.$emit('clicked', {
                    method: 'Search By Officer ID',
                    data: data[0],
                    param: that.officerID
                })
            }
            )
        }
    },
    template: `
    <div class="col s12 m12 l4 deep-purple white-text lastname">
    <p>Search by Officer ID:</p>
        <div class="col s9">
            <input type="text" v-model="officerID" @keyup.enter="getDocketsByOfficerID"> 
        </div>
        <div class="col s3">
            <button class="btn waves-effect waves-light  green darken-1" type="submit" @click="getDocketsByOfficerID" name="action">Go</button>
        </div>
</div>
                `
})