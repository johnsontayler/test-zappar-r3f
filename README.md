# Zappar for React Three Fiber Example

​
This repository contains an AR example using the Zappar SDK for React-Three-Fiber. This specific example uses `react-scripts` to compile and bundle the assets and code, and TypeScript to get full auto-complete and compile-time error checking.
​
To learn more about Zappar for React-Three-Fiber, head over to the [Zappar for React Three](https://www.npmjs.com/package/@zappar/zappar-react-three-fiber) (@zappar/zappar-react-three-fiber) page on npm.
​

## Prerequisites

​
To get started you'll want to ensure you have:
​

- installed Node.js version 10 or later

## Running the Project

​
Once you have cloned this repository, open a terminal in the root directory of this project and follow these steps to get started.
​
Install the dependencies by running:
​

```bash
yarn
```

​
Next, run the project using the following command:
​

```bash
yarn start
```

​
The `webpack server` tool will host the content locally and give you an address you can open in your browser of your local machine.

If you hit a connection not private wall, click:

```bash
advanced
Proceed to localhost (unsafe)
```

​
If you'd like to try on a mobile device, follow these steps:
​

1. Ensure the device is on the same local network (e.g. Wifi)

2. Find out the IP address of your computer
   You can find it on Windows by running ipconfig within CMD (It should appear under IPv4 Address) or ipconfig getifaddr en0 on Mac/Linux. The IP format is usually 192.168.0.X

3. On your mobile device, visit: `https://YOUR-IP-ADDRESS:PORT` replacing both `YOUR-IP-ADDRESS` and `PORT` (the port is the number after the `:` in the address given by `webpack-dev-server`). Note it's important to type `https` at the start of the address to ensure your device connects over HTTP**S**.

Zapworks CLI is sadly not an option since it can’t convert TypeScript to Javascript before serving

---
