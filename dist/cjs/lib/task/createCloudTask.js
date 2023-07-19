"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloudTask = void 0;
const createHttpTaskWithToken_1 = require("./createHttpTaskWithToken");
const sendGraphqlRequest_1 = require("./sendGraphqlRequest");
const createCloudTask = async (skeetOptions, queue = 'my-queue', graphqlQuery, inSeconds = 0) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            const result = await (0, sendGraphqlRequest_1.sendGraphqlRequest)('mutation', queue, graphqlQuery);
            return result;
        }
        else {
            const result = await (0, createHttpTaskWithToken_1.createHttpTaskWithToken)(skeetOptions, queue, graphqlQuery, inSeconds);
            return result;
        }
    }
    catch (error) {
        throw new Error(`Error in createCloudTask: ${error}`);
    }
};
exports.createCloudTask = createCloudTask;
//# sourceMappingURL=createCloudTask.js.map