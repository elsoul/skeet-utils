import { v2beta3 } from '@google-cloud/tasks';
import * as dotenv from 'dotenv';
import { graphqlString } from './sendGraphqlRequest';
dotenv.config();
export const createGraphqlTask = async (skeetOptions, queryName, params, inSeconds = 0) => {
    try {
        const { projectId, region, lbDomain } = skeetOptions;
        const client = new v2beta3.CloudTasksClient();
        const parent = client.queuePath(projectId, region, queryName);
        const graphql = graphqlString('mutation', queryName, params);
        const body = Buffer.from(graphql).toString('base64');
        const serviceAccountEmail = `${projectId}@${projectId}.iam.gserviceaccount.com`;
        const url = `https://${lbDomain}/graphql`;
        const oidcToken = {
            serviceAccountEmail,
        };
        const task = {
            httpRequest: {
                headers: {
                    'Content-Type': 'application/json',
                },
                httpMethod: 'POST',
                url,
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
//# sourceMappingURL=createGraphqlTask.js.map