import {Template} from "aws-cdk-lib/assertions"
import {App, getStack} from "@serverless-stack/resources"
import {StorageStack} from "../StorageStack"
import {test} from "vitest"

test ("Test StorageSTack", ()=>{
    const app = new App();
    //when 
    app.stack(StorageStack)
    //then 
    const template = Template.fromStack(getStack(StorageStack))
    template.hasResourceProperties("AWS::DynamoDB::Table", {
        BillingMode: "PAY_PER_REQUEST"
    })
})