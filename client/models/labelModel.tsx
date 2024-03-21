import mongoose from "mongoose";
const labelConfigSchema = new mongoose.Schema({
    repo_name: String,
    name: String,
    issueContent: String,
    label: String,
});

const labelModel  = mongoose.models.labelInfo || mongoose.model("labelModel",labelConfigSchema);
export default labelModel;