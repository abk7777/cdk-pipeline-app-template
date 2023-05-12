// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import { CodePipeline, CodePipelineSource, ShellStep, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
// // import { AppStage } from './app-stage';
// import * as config from '../config.json'

// export class PipelineStack extends cdk.Stack {
//     constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//         super(scope, id, props);

//         // don't declare as const when first deploying
//         // const pipeline = 
//         new CodePipeline(this, `${config.cdk_app.app_name}Pipeline`, {
//             pipelineName: `${config.cdk_app.app_name}Pipeline`,
//             dockerEnabledForSynth: true,
//             crossAccountKeys: true,
//             synth: new ShellStep('Synth', {
//                 input: CodePipelineSource.gitHub(`${config.cdk_pipeline.repository_owner}/${config.cdk_pipeline.repository_name}`, `${config.cdk_pipeline.branch}`),
//                 installCommands: ['npm i -g npm@latest'],
//                 commands: ['npm ci', 'npm run build', 'npx cdk synth']
//             })
//         });

//         // const devStage = pipeline.addStage(new AppStage(this, "dev", {
//         //     env: { account: process.env.DEV_ACCOUNT_ID, region: process.env.DEV_ACCOUNT_REGION }}));

//         // // devStage.addPost(new ManualApprovalStep('Approve'));

//         // // add a stage for each region in PROD_ACCOUNT_REGIONS
//         // prodRegions?.forEach(region => {
//         //     const prodStage = pipeline.addStage(new AppStage(this, `prod-${region}`, {
//         //         env: { account: process.env.PROD_ACCOUNT_ID, region: region }}));
//         // });

//         // const prodStage = pipeline.addStage(new AppStage(this, "prod-east", {
//         //     env: { account: process.env.PROD_ACCOUNT_ID, region: 'us-east-1' }}));
//     }
// }