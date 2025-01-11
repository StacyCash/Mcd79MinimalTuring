import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

/*
    This function will capture the word posted and store it as a json file in the storage account.
*/

export async function SubmitWord(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';
    context.log(` "${name}"`);
    return { body: `{"message":"Added word - thanks!"}` };
};
