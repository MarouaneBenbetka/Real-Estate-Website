import { get, getAll, patch, post, ANNONCE, remove } from "./crud";

const annonceCrud = {
    getAll: getAll.bind(null, ANNONCE),
    get: get.bind(null, ANNONCE),
    post: post.bind(null, ANNONCE),
    patch: patch.bind(null, ANNONCE),
    remove: remove.bind(null, ANNONCE)
}

export default annonceCrud;
