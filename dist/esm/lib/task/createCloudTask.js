import { createHttpTaskWithToken, } from './createHttpTaskWithToken';
import { sendGraphqlRequest } from './sendGraphqlRequest';
export const createCloudTask = async (skeetOptions, queue = 'my-queue', graphqlQuery, inSeconds = 0) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            const result = await sendGraphqlRequest('mutation', queue, graphqlQuery);
            return result;
        }
        else {
            const result = await createHttpTaskWithToken(skeetOptions, queue, graphqlQuery, inSeconds);
            return result;
        }
    }
    catch (error) {
        throw new Error(`Error in createCloudTask: ${error}`);
    }
};
//# sourceMappingURL=createCloudTask.js.map