import mongoose from "mongoose";
mongoose.connect(require("./config"));

let Schema = mongoose.Schema({
    title: String,
    text: String,
    links: Array
});
export default mongoose.model("Page", Schema);
