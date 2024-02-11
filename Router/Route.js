export default class Route {
    constructor(url, title, pathHtlm, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtlm = pathHtlm;
        this.pathJS = pathHtlm;
    }
}