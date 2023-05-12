// #!/usr/bin/env node
// // To enable pipeline:
// // change "app": "npx ts-node --prefer-ts-exts bin/app.ts" to "app": "npx ts-node --prefer-ts-exts bin/pipeline.ts" in cdk.json
// // Remember to destroy existing infrastructure before deploying pipeline
// import * as cdk from 'aws-cdk-lib';
// import { PipelineStack } from '../lib/pipeline-stack';
// import * as config from '../config.json'

// const app = new cdk.App();

// // Resource name must be hard-coded, can't be a string template variable
// new PipelineStack(app, `${config.cdk_app.app_name}PipelineStack`, {
//     env: {
//         account: config.cdk_pipeline.build_environment.account_id,
//         region: config.cdk_pipeline.build_environment.region,
//     }
// });

// app.synth();