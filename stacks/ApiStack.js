import { Api, use} from "@serverless-stack/resources"
import {StorageStack} from "./StorageStack"

export function ApiStack ({stack, app}){
    const {table}=use(StorageStack)

    //Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function:{
                permissions: [table], 
                environment: {
                    TABLE_NAME: table.table.Name,
                },
            },
        },
        routes: {
            "POST /notes": "functions/create.main"
        },
    })

    //show the API endpoint in the output 
    stack.addPutputs({
        ApiEndpoint: api.url,
    })

    //return the API resource 
    return {
        api
    }
}