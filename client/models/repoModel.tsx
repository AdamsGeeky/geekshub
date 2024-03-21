import mongoose from "mongoose";
const repoConfigSchema = new mongoose.Schema({
    name : String,
    repo_name : String,
    issueOpenContent : String,
    issueCloseContent : String,
    pullRequestOpenContent : String,
    pullRequestCloseContent : String,
});

const repoModel  = mongoose.models.repoInfo || mongoose.model("repoModel",repoConfigSchema);
export default repoModel;