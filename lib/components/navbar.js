Vue.component('navbar', {
    props: [],
    data() {
        return {}
    },
    template: 
    ` <nav class="deep-purple">
        <div class="nav-wrapper">
        <div><img id="logo" class="brand-logo hide-on-med-and-down deep-purple" src="lib/icons/logo.png"/></div>
           <div id="header" class="center">
                    <h4>City of Lewisville</h4>
                    <h3>Court Dockets</h3>
            </div>
            <div class="row red" id="disclaimer">
            <div class="col s12">
               <p>PLEASE BE AWARE THAT PERSONAL CHECKS ARE NOT ACCEPTED IN PAYMENT OF ACTIVE WARRANTS. VISA, MASTERCARD, CASH OR MONEY ORDERS ARE THE ONLY METHODS OF PAYMENT ACCEPTED TO CLEAR THE WARRANT.</p>
            </div>
        </div>
        </div>
     </nav>
  `
})