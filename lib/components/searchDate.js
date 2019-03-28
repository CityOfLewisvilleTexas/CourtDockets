Vue.component("search-date", {
  props: ['dates'],
  components: {},
  data() {
    return {
      selectedDate: '',
    };
  },
  methods: {
    getDocketsByDate: function() {
        let that = this
        if(this.selectedDate === '' || this.selectedDate === 'Choose Date...') {
            return
        }
        else {
            $.post('http://ax1vnode1.cityoflewisville.com/v2/', {
                        webservice: 'Courts/Dockets/Get Docket By Date',
                        DocketDate: this.selectedDate
                    }, function(data) {
                       that.$emit('clicked', {
                            method: 'Search By Date',
                            data: data[0],
                            param: that.selectedDate
                       })
                    })
        }
    }
  },
  created() {
      
  },
  watch: {
    selectedDate: function() {
        this.getDocketsByDate()
    }
  },
  computed: {
    prettyDocketDates: function() {
        return this.dates.map(date => {
            return moment(date).add(1, 'days').format('MM/DD/YYYY')
        })
    }
},
  template: `
    <div class="col s12 m12 l4 deep-purple white-text">
        <p>Search by Docket Date:</span></p>
        <select  v-model="selectedDate">
            <option v-for="date in prettyDocketDates" :selected="$index == 0" value="{{date}}" :id="$index">{{ date }}</option>
        </select>
    </div>

          `
});
