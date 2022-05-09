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
            ],
            newTodo: ''
        },
        methods: {
            addTask() {
                if(this.newTodo) {
                    this.toDoTasks.push({
                        text: this.newTodo,
                        done: false
                    });
                    this.newTodo = '';
                }
            },
            removeTask(index) {
                this.toDoTasks.splice(index, 1);
            },
        }
    }
)