let axios = require("axios");

const serverApi = process.env.NODE_ENV === "development" ?
    "http://localhost:8142/" : "http://wiki-server-prototype.azurewebsites.net/";

const getPage = function(page, cbSuccess, cbError) {
    return axios.get(serverApi + "wiki/" + page).then(res => {
        cbSuccess(res.data);
    }, cbError());
};

const createPage = function(page, cbSuccess, cbError) {
    return axios.post(serverApi + "api/page/" + page).then(res => {
        cbSuccess(res.data);
    }, cbError());
};

const deletePage = function(page, cbSuccess, cbError) {
    return axios.post(serverApi + "api/delete/" + page).then(res => {
        cbSuccess(res.data);
    }, cbError());
};

const linkPage = function(page, link, cbSuccess, cbError) {
    return axios.post(serverApi + "api/link/" + page + "/to/" + link).then(res => {
        cbSuccess(res.data);
    }, cbError());
};

const api = {
    getPage: getPage,
    createPage: createPage,
    deletePage: deletePage,
    linkPage: linkPage
};

export default api;
