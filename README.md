# Readme viniswap ![language](https://img.shields.io/badge/language-javascript-blue.svg)

http://viniswap.costaflores.com

> viniswap is a wine exchange

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Support](#hammer_and_wrench-support)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## :package: Installation

### First check

You need to check if you have `Node.js`and `YARN` installed on your computer.

To check if you have `Node.js` installed, run this command in your terminal:

```sh
node -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the https://nodejs.org/es/

```sh
v10.18.0
```

To confirm that you have `YARN` installed you can run this command in your terminal:

```sh
yarn -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the https://yarnpkg.com/lang/en/

```sh
1.21.1
```

If `Node.js` or `YARN` is not installed you can install them on [this link](https://nodejs.org/en/)

Don't forget to update `YARN` after installing `Node.js`:

### Then install viniswap

```sh
yarn install
```

## :rocket: Usage

* 1 - git clone git@github.com:OpenVino/viniswap.git or git clone https://github.com/OpenVino/viniswap.git
* 2- cd viniswap
* 3- create .env file and complete
for example: 
---
MTB18
---
    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_PROVIDER_URL=https://mainnet.infura.io/v3/XXXXXXXX
    REACT_APP_TOKEN_NAME=MTB18
    REACT_APP_TOKEN_SUPPLY=16384
    REACT_APP_TOKEN_ADDRESS=0x1bcfd19f541eb62c8cfebe53fe72bf2afc35a255
    REACT_APP_REDEEM_MESSAGE=You can redeem your MTB18 tokens for bottles of wine, starting on May 6, 2021.'
    REACT_APP_YEAR=2018
    PORT=4000
---
MTB19
---
    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_PROVIDER_URL=https://mainnet.infura.io/v3/XXXXXXXX
    REACT_APP_TOKEN_NAME=MTB19
    REACT_APP_TOKEN_SUPPLY=17707
    REACT_APP_TOKEN_ADDRESS=0x87ab739464881af0011052d4ca0b0d657e8c3b48
    REACT_APP_REDEEM_MESSAGE=You can redeem your MTB19 tokens for bottles of wine, starting on May 6, 2022.
    REACT_APP_YEAR=2019
    PORT=4001
---

* 4 - 
    Insert images on src/components/Gallery: 
    * nfc.png
    * sent.png 
    * test.png

* 5 

```sh
yarn start
```

## :hammer_and_wrench: Support

Please [open an issue](https://github.com/OpenVino/viniswap) for support.

## :memo: Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/leonard-henriquez/readme-boilerplate/compare/).

## :scroll: License

[MIT](LICENSE)

### Project based on Unisocks
##### modified files:

* README.md
* functions/getEntries.js
* functions/submission-created.js
* package.json
* public/favicon.ico
* public/favicon_.ico
* public/index.html
* public/manifest.json
* src/components/Button.js
* src/components/BuyAndSell.js
* src/components/Card.js
* src/components/Checkout.js
* src/components/Confirmed.js
* src/components/Gallery/nfc.png
* src/components/Gallery/sent.png
* src/components/Gallery/test.png
* src/components/Redeem.js
* src/components/RedeemButton.js
* src/components/RedeemForm.js
* src/components/SelectToken.js
* src/components/Web3ReactManager/styles.js
* src/components/Works.js
* src/pages/Body/index.js
* src/pages/Main/index.js
* src/pages/Stats/index.js
* src/pages/Status/index.js
* src/theme/index.js
* src/utils/index.js


### Want to know more?

* [Documentation](http://wiki.costaflores.com/)
