Vue.component('search-last-name', {
    props: [],
    components: {},
    data() {
        return {
            lastName: ''
        }
    },
    methods: {
        getDocketsByLastName: function () {
            let that = this
            $.post('http://ax1vnode1.cityoflewisville.com/v2/', {
                webservice: 'Courts/Dockets/Get Docket By Last Name',
                LastName: this.lastName
            }, function (data) {
                that.$emit('clicked', {
                    method: 'Search By Last Name',
                    data: data[0],
                    param: that.lastName
                })
            })
        }
    },
    template: `
    <div class="col s12 m12 l4 deep-purple white-text lastname">
        <p>Search by Defendant Last Name:</p>
            <div class="col s9">
                <input type="text" v-model="lastName" @keyup.enter="getDocketsByLastName"> 
            </div>
            <div class="col s3">
                <button class="btn waves-effect waves-light  green darken-1" type="submit" @click="getDocketsByLastName" name="action">Go</button>
            </div>
    </div>
                `
})