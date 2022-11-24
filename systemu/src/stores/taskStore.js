
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { text: "Acheter du lait", done: false, uid: -1 },
            { text: "Faire la lessive", done: false, uid: -2 },
        ],
        lastId: 0
    }),
    actions: {
        addTask(text) {

            this.lastId++
            this.tasks.push({
                text: text,
                done: false,
                uid: this.lastId
            })

        },
        toggleTask(uid) {
            console.log("test", uid)
            let task = this.tasks.find(task => task.uid == uid)
            task.done = !task.done
        }
    }
}
)

