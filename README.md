# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript with a prepared CDK Pipeline that is disabled by default. Using this approach makes it possible to first develop the app without the pipeline, and when it is ready to deploy the pipeline can be enabled.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

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

## CDK Pipeline Deployments
The pipeline is disabled by default. To enable it, follow the steps.
* Uncomment the Pipeline modules in .gitignore
* Uncomment bin/pipeline.ts
* Uncomment lib/app-stage.ts and lib/pipeline-stack.ts
* Change the line in cdk.json from `"app": "npx ts-node --prefer-ts-exts bin/app.ts"` to `"app": "npx ts-node --prefer-ts-exts bin/pipeline.ts"`
* Edit the appropriate lines in package.json
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