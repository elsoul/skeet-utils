import { v2beta3 } from '@google-cloud/tasks';
import * as dotenv from 'dotenv';
dotenv.config();
export const createHttpTaskWithToken = async (queue = 'my-queue', payload, inSeconds = 0, skeetOptions) => {
    const { projectId, region, lbDomain } = skeetOptions;
    let url = '';
    let oidcToken = {};
    if (process.env.NODE_ENV === 'development') {
        url = `http://localhost:3000/graphql`;
    }
    else {
        const serviceAccountEmail = `${projectId}@${projectId}.iam.gserviceaccount.com`;
        url = `https://${lbDomain}/graphql`;
        oidcToken = {
            serviceAccountEmail,
        };
    }
    const client = new v2beta3.CloudTasksClient();
    const parent = client.queuePath(projectId, region, queue);
    const convertedPayload = JSON.stringify(payload);
    const body = Buffer.from(convertedPayload).toString('base64');
    const task = {
        httpRequest: {
            httpMethod: 'POST',
            url,
            oidcToken,
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        },
        scheduleTime: {},
    };
    if (inSeconds) {
        task.scheduleTime = {
            seconds: parseInt(String(inSeconds)) + Date.now() / 1000,
        };
    }
    try {
        // Send create task request.
        const request = { parent, task };
        const [response] = await client.createTask(request);
        console.log(`Created task ${response.name}`);
        return response.name;
    }
    catch (error) {
        throw new Error(`createHttpTaskWithToken: ${error}`);
    }
};
//# sourceMappingURL=createHttpTaskWithToken.js.map