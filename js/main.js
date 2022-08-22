var app = new Vue ({
    el: '#app',
    data: {
        emails: []
    },
    methods: {
        getMailCasuale() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emails.push (response.data.response);
            })
        }
    }
})