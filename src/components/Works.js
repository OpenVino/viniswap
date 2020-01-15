import React from 'react'
import styled from 'styled-components'

import { Controls } from './Redeem'

const WorksFrame = styled.div`
  width: 100%;
  padding: 24px;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  /* line-height: 170%; */
  /* text-align: center; */
`
const Title = styled.p`
  margin-top: 1rem !important;

  font-weight: 600;
  font-size: 16px;
`

const Desc = styled.p`
  line-height: 150%;
  font-size: 14px;
  margin-top: 1rem !important;
  font-weight: 500;
`

export function link(hash) {
  return `https://etherscan.io/tx/${hash}`
}

export const EtherscanLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.viniswapOrange};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`

export default function Works({ closeCheckout }) {
  const tokenName = process.env.REACT_APP_TOKEN_NAME;
  const tokenSupply = process.env.REACT_APP_TOKEN_SUPPLY;
  return (
    <WorksFrame>
      <Controls closeCheckout={closeCheckout} theme={'dark'} />

      <Title>How it works:</Title>
      <Desc>
        One {process.env.REACT_APP_TOKEN_NAME} token entitles you to one bottle of delicious organic Argentine wine (Mike Tango Bravo {process.env.REACT_APP_YEAR} - a blend of Malbec / Petit Verdot / Cabernet Sauvignon) from <a href="https://costaflores.com/">Costaflores Organic Vineyard.</a>
      </Desc>
      <Desc>
        Watch <a href="https://www.youtube.com/watch?v=7ZYISUzJBMo&feature=youtu.be" target="_blank" rel="noopener noreferrer"> here </a> to understand how the entire <a href="https://www.youtube.com/watch?v=GvhYdOVTmlM&feature=youtu.be" target="_blank" rel="noopener noreferrer"> Openvino </a> process works.
      </Desc>
      <Desc>
        You can sell the token back at any time, and beginning on May 6, {process.env.REACT_APP_YEAR}, you can redeem your {tokenName} token for 1 bottle of wine.
      </Desc>
      <Title>How it is priced:</Title>
      <Desc>
        Each buy/sell will move the price. The increase or decrease follows the Uniswap bonding curve. So, the price of our wines are defined by supply and demand, and the valuation changes over time...<a href="https://www.youtube.com/watch?v=PeXzm1L_Jyc&list=PLC67Nqxq04sy5cMoySL26NB91kH__DT8W&index=6&t=5s" target="_blank" rel="noopener noreferrer"> like a fine wine!</a>
      </Desc>
      <Desc>
        Buying or selling wine uses the uniswap protocol and accepts any token input as a payment method. The pool of {process.env.REACT_APP_TOKEN_NAME} is a uniswap pool where {tokenSupply} {tokenName} tokens were deposited along with the starting value of ETH.{' '}
      </Desc>
      <Desc>
        <a href="https://docs.uniswap.io/" target="_blank" rel="noopener noreferrer">
          Learn more about how uniswap works.
        </a>
      </Desc>
      <Desc>
        <a href="http://wiki.costaflores.com/" target="_blank" rel="noopener noreferrer">
          See the inner workings of the Openvino project.
        </a>
      </Desc>
      <Desc>
        <a href="https://t.me/joinchat/G5ohPEYvPAIvt48N1yrCRQ" target="_blank" rel="noopener noreferrer">
          Join our telegram group.
        </a>
      </Desc>
      <Desc>
        <a href="mailto:info@costaflores.com" target="_blank" rel="noopener noreferrer">
          Get in touch.
        </a>
      </Desc>
    </WorksFrame >
  )
}
