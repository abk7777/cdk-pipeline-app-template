#!/usr/bin/env node
import * as dotenv from 'dotenv';
dotenv.config();
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';
import * as config from '../config.json'

const app = new cdk.App();
const appStack = new AppStack(app, `${config.cdk_app.app_name}Stack`, `${config.cdk_app.app_stage}`, {
    env: {
        account: process.env.DEV_ACCOUNT_ID,
        region: process.env.AWS_REGION
    }
});

// add tags
for (const [key, value] of Object.entries(config.cdk_app.tags)) {
    cdk.Tags.of(appStack).add(key, value);
}