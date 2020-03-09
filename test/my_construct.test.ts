import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import {Stack} from '@aws-cdk/core';
import {MyConstruct, MyConstructProps} from "../lib/my_construct";
import {expect as expectCDK, MatchStyle, matchTemplate} from "@aws-cdk/assert";

const CONSTRUCT_ID = 'my-test-construct';

let minimumProps: MyConstructProps = {};

function createStack(props: MyConstructProps | Function) {
    const app = new cdk.App();
    const stack = new Stack(app, 'testing-stack', {env: {account: '1234567', region: 'us-east-1'}});
    let propsToUse: MyConstructProps = props as MyConstructProps;
    if (props instanceof Function) {
        propsToUse = props(stack);
    }
    new MyConstruct(stack, CONSTRUCT_ID, propsToUse);
    return stack;
}


describe('Has something', () => {
    test('Has empty', () => {
        const stack = createStack(minimumProps);
        expectCDK(stack).to(matchTemplate({
            "Resources": {}
        }, MatchStyle.EXACT))
        ;
    });
});
