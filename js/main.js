var app = new Vue ({
    el: '#app',
    data: {
        emailCasuale: null
    },
    methods: {
        getMailCasuale() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emailCasuale = response.data.response;
            })
        }
    }
})