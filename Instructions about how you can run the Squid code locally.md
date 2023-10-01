# Running Squid Code Locally

This README provides step-by-step instructions on how to run the Squid code locally on your machine. Squid is a powerful tool that allows you to interact with various components, including copying schemas, generating entities, subscribing to EVM logs, and transforming and saving data. This guide assumes you have a basic understanding of JavaScript, Node.js, and command-line usage.

## Prerequisites

Before you can run the Squid code locally, make sure you have the following prerequisites installed on your machine:

1. **Node.js and npm**: You need Node.js and npm (Node Package Manager) to install and manage JavaScript packages. You can download them from the [official Node.js website](https://nodejs.org/).

2. **Subsquid CLI**: Install the latest version of the Subsquid CLI as a global npm package using the following command:

   ```bash
   npm i -g @subsquid/cli@latest
   ```

   You can check the version of the Subsquid CLI by running:

   ```bash
   sqd --version
   ```

3. **Subsquid EVM Tools**: You'll also need the Subsquid EVM tools, including `squid-typeorm-codegen` and `squid-typeorm-migration`. Ensure that these tools are installed and available in your project.

## Instructions

Follow these steps to run the Squid code locally:

### Step 1: Copy the Schema

1. Replace the existing `schema.graphql` file in your Squid project with the provided schema definition. You can modify this schema to fit your project's requirements.

### Step 2: Generate Entities and Migrations

2. Generate TypeScript entities from the schema using the `squid-typeorm-codegen` tool:

   ```bash
   sqd codegen
   ```

3. Build your Squid project:

   ```bash
   sqd build
   ```

4. Start the local database for your project:

   ```bash
   sqd up
   ```

5. Generate database migrations from the generated entities:

   ```bash
   sqd migration:generate
   ```

### Step 3: Generate Typings from ABI

6. Copy the contract ABI file (e.g., `Gravity.json`) from your subgraph project and paste it into the `./abi` folder of your Subsquid project.

7. Generate TypeScript typings from the ABI file using the `sqd typegen` command:

   ```bash
   sqd typegen
   ```

### Step 4: Subscribe to EVM Logs

8. Configure the Squid processor in your project. Open the `src/processor.ts` file and set up the processor to fetch logs from specific contracts and topics as needed.

### Step 5: Transform and Save Data

9. Implement the data normalization function in your `src/main.ts` file, which extracts data from EVM logs based on topic values.

10. Modify the batch handler in the `src/main.ts` file to process and save the data as required for your project.

### Step 6: Run the Processor and GraphQL API

11. Start the indexing process by running:

    ```bash
    sqd process
    ```

    The processor will sync data and continue indexing new blocks until stopped.

12. Start the GraphQL API server by running the following command in a new terminal window:

    ```bash
    sqd serve
    ```

    The GraphQL API will be accessible on the default port (usually 4350) and provide access to the data indexed from EVM logs.

## Conclusion

You have successfully set up and run the Squid code locally, including copying schemas, generating entities, subscribing to EVM logs, and transforming and saving data. You can now customize your Squid project further to meet your specific requirements and explore its capabilities for handling and processing blockchain data. If you encounter any issues or need additional guidance, refer to the documentation or community resources related to Squid and Subsquid.
