const app = new Vue (
    {
        el: '#root',
        data: {
            toDoTasks: [
                {
                    text: "prendere un caffè",
                    done: false
                },
                {
                    text: "iniziare l'esercizio",
                    done: true
                },
                {
                    text: "consegnare l'esercizio",
                    done: false
                },
                {
                    text: "andare in palestra",
                    done: false
                }
            ]
        },
        methods: {
        
        }
    }
)