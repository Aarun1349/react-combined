export const AddNew = (task) => {
    return {
        type: "ADD",
        payload: task
    }

}

export const RemoveAll = () => {
    return {
        type: "REMOVE",

    }

}

export const Delete = (id) => {
    return {
        type: "DELETE",
        payload: id
    }

}