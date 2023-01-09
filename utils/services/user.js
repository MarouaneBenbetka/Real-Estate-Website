import { get, getAll, patch, post, USER, remove } from "./crud";

const userCrud = {
    getAll: getAll.bind(null, USER),
    get: get.bind(null, USER),
    post: post.bind(null, USER),
    patch: patch.bind(null, USER),
    remove: remove.bind(null, USER)
}

export default userCrud;
