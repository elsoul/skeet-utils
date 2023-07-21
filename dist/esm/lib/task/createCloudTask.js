import { createGraphqlTask } from './createGraphqlTask';
import { sendGraphqlRequest } from './sendGraphqlRequest';
import * as dotenv from 'dotenv';
dotenv.config();
export const createCloudTask = async (projectId, region, queryName, params, endpoint, inSeconds = 0) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            const result = await sendGraphqlRequest('mutation', queryName, params);
            return result;
        }
        else {
            const result = await createGraphqlTask(projectId, region, queryName, params, endpoint, inSeconds);
            return result;
        }
    }
    catch (error) {
        throw new Error(`Error in createCloudTask: ${error}`);
    }
};
//# sourceMappingURL=createCloudTask.js.map