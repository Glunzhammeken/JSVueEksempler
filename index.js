Vue.createApp({

    data() {

        return {
            name: "André",
            age: 25,
            atSchool: true,
            book: {
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

            ],
            counter: 0,
            date: new Date(),
            SU: 0,
            Movies: [

            ],

            title: "",
            price: 0,
            rating: 0,
            email: "",
            password: "",

            User: {
                email: "",
                password: "",
            },
            Users: [
            ],

            messagecockring: "",
            interval: null,
            amountNeededforring: 5,
            amountNeededfordildo: 100,
            pace: 1000,
            cockringcounter: 0,
        }


    },
    methods: {
        clickCounter() {
            this.counter++
        },
        counterreset() {
            this.counter = 0
        },
        clickCounter2(c) {
            return c + 1
        },
        AddMovie() {
            this.Movies.push({ title: this.title, price: this.price, rating: this.rating })
        },
        AddUser() {
            this.Users.push({ email: this.email, password: this.password })
            this.email = ""
            this.password = ""
            this.message = "User Added"
        },
        mounted() {
            if (this.amountNeededforring <= this.counter) {
                this.counter = this.counter - this.amountNeededforring
                this.amountNeededforring = this.amountNeededforring * 2
                this.cockringcounter++
                this.interval = setInterval(() => {
                    this.counter++;
                }, this.pace);

            }
            else {
                this.messagecockring = "Cant afford"
            }
        },
            beforeUnmount() {
                
                clearInterval(this.interval);
                this.amountNeededforring = 5;
                
              },
              mounteddildo() {
                if (this.amountNeededfordildo <= this.counter) {
                    this.counter = this.counter - this.amountNeededfordildo
                    this.amountNeededfordildo = this.amountNeededfordildo * 2
                    this.cockringcounter++
                    this.interval = setInterval(() => {
                        this.counter++;
                    }, this.pace);
    
                }
                else {
                    this.messagecockring = "Cant afford"
                }
            },


        
    



    }

}).mount("#app")