import { Construct } from '@aws-cdk/core';
export interface MyConstructProps {
}
export declare class MyConstruct extends Construct {
    props: MyConstructProps;
    constructor(scope: Construct, id: string, props: MyConstructProps);
}
