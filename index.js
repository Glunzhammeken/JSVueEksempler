Vue.createApp({

    data() {

        return {
            name: "André",
            age: 25,
            atSchool: true,
            book:{
                title: "The Lord of the Rings",
                price: 19.99
            },
            todolist: [
                "male", "learn Vue", "learn JavaScript"
            ],
            books: [
                { title: "The Lord of the Rings", price: 19.99 },
                { title: "Harry Potter", price: 9.99 },
                { title: "The Hobbit", price: 14.99 }
            ]

            
        }

    },
    
    methods: {

    }

}).mount("#app")