import { selector } from "recoil";
import { countAtom } from "../atom/count";

export const evenSelector = selector({
    key : "evenSelector",
    get : (props) => {
        const count = props.get(countAtom)
        return count % 2 == 0
    }
})

export const filteredTodos = selector({
    key : "filteredTodos",
    get : (props) => {
        const todos = props.get(todosAtom)
        const filter = props.get(filterAtom)

        return todos.filter(x => x.title.includes(filter) || x.decription.includes(filter))
    }
})