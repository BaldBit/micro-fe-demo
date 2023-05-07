# Micro Frontends using Module Federation

We can easily implement Micro Frontends using [Module Federation](https://github.com/module-federation). While this is built into webpack, recently Vite community has published a plugin for Vite eco system which provides Module Federation features.

vite-plugin-federation: https://github.com/originjs/vite-plugin-federation

While they have a good getting started documentation I wanted to try out an implementation by my own.

There are two ways of creating Micro Frontends;

1. Remote/Host: In this method micro frontends are hosted in a separate server
2. Monorepo: In this method micro frontends and hosts are in the same repo and MFEs gets built only when you build host applications

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
