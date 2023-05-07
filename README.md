# Implementing Micro Frontends using Module Federation

Micro Frontends are a way of breaking up a large application into smaller, more manageable pieces that can be developed and deployed independently. This approach can make it easier to scale and maintain large codebases, as well as enabling teams to work on different parts of the application without interfering with each other. In this article, we will explore how to implement Micro Frontends using Module Federation, a feature built into webpack that allows modules to be shared across multiple applications.

## What is Module Federation?

Module Federation is a feature of webpack that allows modules to be shared across multiple applications. This can be useful for implementing Micro Frontends, as it enables different parts of the application to be developed and deployed independently, while still sharing common components and functionality. Recently, the Vite community has published a plugin for Vite ecosystem that provides Module Federation features, making it even easier to implement Micro Frontends.

## Two Approaches to Implementing Micro Frontends

There are two main approaches to implementing Micro Frontends: Remote/Host and Monorepo.

### Remote/Host

In the Remote/Host approach, each Micro Frontend is hosted in a separate server, and the host application communicates with the remote applications through HTTP requests. This approach can be useful for separating concerns and enabling each Micro Frontend to be developed and deployed independently.

### Monorepo

In the Monorepo approach, all Micro Frontends and the host application are in the same repository, and the Micro Frontends are only built when the host application is built. This approach can be useful for smaller applications where the benefits of separating concerns may not outweigh the added complexity.


In this demo I've tried out the 1st approach.

## Starting the Project

### Setup both projects first

Goto `remote` folder and `host` folder and run the below command.

`pnpm install`

### Run the Remote first

Goto the remote folder and run the below commands

1. `pnpm build`
2. `pnpm preview`

### Run the Host

Goto the `host` folder and run the below commands

1. `pnpm build`
2. `pnpm preview`


## How to Test

Goto the remote folder and navigate to the `src/components/Login` folder. Make any change and run build and preview commands.

Now goto the web browser where you have opened the remote application and check how the changes are getting affected without deploying the host application.
