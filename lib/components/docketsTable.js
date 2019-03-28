Vue.component("dockets-table", {
    props: ['method', 'dataset'],
    components: {},
    data() {
      return {
      
      };
    },
    methods: {
      
    },
    created() {
        
    },
    watch: {
     
    },
    computed: {
        headers: function() {
            let headers, k;
            headers = [];
            for (k in this.dataset[0]) {
                    headers.push(k);
            }
            return headers;
        },
        sortedTableData: function() {
            var indexedData = []
				this.dataset.forEach(function(thing,idx) {
					indexedData.push({idx: idx})
					for (var prop in thing) {
						if (thing.hasOwnProperty(prop)) {
							indexedData[idx][prop] = thing[prop]
						}
					}
                })
            return indexedData
        }
  },
    template: `
     <div v-if="method != ''">
        <div v-if="dataset.length < 1"><h5>No Results Found.</h5></div>
        <table v-else class="responsive-table striped highlight centered" id="resultsTable">
            <thead>
                <tr>
                    <th v-for="header in headers" :id="$index">{{ header }}</th>
                </tr>
            </thead>

            <tbody>
                    <tr v-for="record in sortedTableData">
                        <td v-for="header in headers">{{ record[header] }}</td>
                    </tr>
            </tbody>
        </table>
        <div class="col-md-12 center text-center">
	    <span class="left" id="total_reg"></span>
            <ul class="pagination pager" id="myPager"></ul>
          </div>
        </div>
            `
  });
  