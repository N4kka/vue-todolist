const app = new Vue (
    {
        el: '#root',
        data: {
            toDoTasks: [
                {
                    text: "prendere un caffè",
                    done: true
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
                    done: true
                }
            ]
        },
        methods: {
            removeTask(index) {
                this.toDoTasks.splice(index, 1);
            }
        }
    }
)