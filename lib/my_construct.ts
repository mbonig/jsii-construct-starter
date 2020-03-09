import {Construct} from '@aws-cdk/core';

export interface MyConstructProps {

}

export class MyConstruct extends Construct {
    public props: MyConstructProps;

    constructor(scope: Construct, id: string, props: MyConstructProps) {
        super(scope, id);
        this.props = props;
    }
}
