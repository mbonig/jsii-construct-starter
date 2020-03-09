#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {Stack} from '@aws-cdk/core';
import {MyConstruct} from '../lib/my_construct';

const app = new cdk.App();
const stack = new Stack(app, 'test-stack');

new MyConstruct(stack, 'test-construct', {});
