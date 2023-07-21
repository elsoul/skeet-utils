"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphqlTask = void 0;
const tasks_1 = require("@google-cloud/tasks");
const sendGraphqlRequest_1 = require("./sendGraphqlRequest");
const createGraphqlTask = async (projectId, region, queryName, params, endpoint, inSeconds = 0) => {
    try {
        const client = new tasks_1.v2beta3.CloudTasksClient();
        const parent = client.queuePath(projectId, region, queryName);
        const graphql = (0, sendGraphqlRequest_1.graphqlString)('mutation', queryName, params);
        const body = Buffer.from(graphql).toString('base64');
        const serviceAccountEmail = `${projectId}@${projectId}.iam.gserviceaccount.com`;
        const oidcToken = {
            serviceAccountEmail,
        };
        const task = {
            httpRequest: {
                headers: {
                    'Content-Type': 'application/json',
                },
                httpMethod: 'POST',
                url: endpoint + '/graphql',
                oidcToken,
                body,
            },
            scheduleTime: {},
        };
        if (inSeconds) {
            task.scheduleTime = {
                seconds: parseInt(String(inSeconds)) + Date.now() / 1000,
            };
        }
        const request = { parent, task };
        const [response] = await client.createTask(request);
        console.log(`Created task ${response.name}`);
        return response.name;
    }
    catch (error) {
        throw new Error(`createGraphqlTask: ${error}`);
    }
};
exports.createGraphqlTask = createGraphqlTask;
//# sourceMappingURL=createGraphqlTask.js.map