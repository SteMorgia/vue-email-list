var app = new Vue ({
    el: '#app',
    data: {
        emails: []
    },
    methods: {
        
        getMailCasuali() {
            for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emails.push (response.data.response);
            })
        }
    }
    }
})