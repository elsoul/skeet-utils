"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloudTask = void 0;
const createGraphqlTask_1 = require("./createGraphqlTask");
const sendGraphqlRequest_1 = require("./sendGraphqlRequest");
const createCloudTask = async (skeetOptions, queryName, params, inSeconds = 0) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            const result = await (0, sendGraphqlRequest_1.sendGraphqlRequest)('mutation', queryName, params);
            return result;
        }
        else {
            const result = await (0, createGraphqlTask_1.createGraphqlTask)(skeetOptions, queryName, params, inSeconds);
            return result;
        }
    }
    catch (error) {
        throw new Error(`Error in createCloudTask: ${error}`);
    }
};
exports.createCloudTask = createCloudTask;
//# sourceMappingURL=createCloudTask.js.map