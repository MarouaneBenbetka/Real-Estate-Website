import { get, getAll, patch, post, MESANNONCE, remove } from "./crud";

const mesannoncesCrud = {
    getAll: getAll.bind(null, MESANNONCE),
    get: get.bind(null, MESANNONCE),
    post: post.bind(null, MESANNONCE),
    patch: patch.bind(null, MESANNONCE),
    remove: remove.bind(null, MESANNONCE)
}

export default mesannoncesCrud