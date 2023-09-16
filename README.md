# Welcome to your CDK TypeScript project

Customizable CDK TypeScript project template that decouples application development from pipeline integration. The structure allows developers to build and test AWS applications without the overhead of a CI/CD pipeline. When ready for pipeline integration, the transition is as easy as uncommenting code and redefining deployment stages.

## Project Structure
```bash
.
├── README.md
├── bin
│   ├── app.ts              # Develop the app with no pipeline
│   └── pipeline.ts         # Pipeline to deploy the app (disabled by default)
├── cdk.json                # Update the app entry point to bin/pipeline.ts to enable pipeline
├── config.json             # App specific configuration
├── jest.config.js
├── lib
│   ├── app                 # App modules go here
│   ├── app-stack.ts
│   ├── app-stage.ts        # Pipeline app stage (disabled by default)
│   └── pipeline-stack.ts   # Pipeline stack (disabled by default)
├── package.json
├── .gitignore              # Comment or uncomment the appropriate lines to avoid committing secrets
├── test
│   └── app.test.ts
└── tsconfig.json
```

## Prerequisites
<!-- TODO docs link -->
* Make sure you have bootstrapped the account you are deploying to with `cdk bootstrap`

## Quickstart
* Clone the repository and remove the `.git` directory: `rm -rf .git`
* Update `.env` with the appropriate values for `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION`
* Update `config.json` with the appropriate values for `cdk_app`
    * `app_name`
    * `github_personal_access_token_secret_arn`
    * `tags.org`, `tags.app`
* Develop your application in `lib/app-stack.ts`, modules in `lib/app/` and deploy from `bin/app.ts`
* When ready to deploy the pipeline, update `config.json` with the appropriate values for `cdk_pipeline`
    * `organization`
    * `repository_owner`
    * `repository_name`
    * `account_id` for the `build` and `deployment` environments, and the production `account_id` under the `production` field
* Follow the steps in [CDK Pipeline Deployments](#cdk-pipeline-deployments) to enable the pipeline
* Add your stage definition to `lib/app-stage.ts` and declare them in `lib/pipeline-stack.ts`
* Push your code to the `main` branch
* Deploy the pipeline with `cdk deploy`

## Environment
The app requires the following environment variables to be set.
```bash
# .env
CDK_DEFAULT_ACCOUNT=<account-id>
CDK_DEFAULT_REGION=<region>
```
Copy the .env.example file to .env and update the values.

## Usage

### CDK Pipeline Deployments
The pipeline is disabled by default. To enable it, follow the steps.
* Uncomment the Pipeline modules in .gitignore
* Uncomment bin/pipeline.ts
* Uncomment lib/app-stage.ts and lib/pipeline-stack.ts
* Change the line in cdk.json from `"app": "npx ts-node --prefer-ts-exts bin/app.ts"` to `"app": "npx ts-node --prefer-ts-exts bin/pipeline.ts"`
    ```tsx
    // change this:
    {
    "app": "npx ts-node --prefer-ts-exts bin/pipeline.ts",
    ...
    }

    // to this:
    {
    "app": "npx ts-node --prefer-ts-exts bin/app.ts",
    ...
    }
    ```
* Finally, edit the appropriate lines in package.json
    ```json
    {
      "name": "app", // Change the name of the app
      "version": "0.1.0",
      "bin": {
        "app": "bin/app.js" // change the key to the name of the app
      }
    }
    ```
* Make sure imports and resource configurations are correct before running `cdk diff` or `cdk deploy`
* If using tests, make sure to update the test files to reflect the changes

### CDK Usage

* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template