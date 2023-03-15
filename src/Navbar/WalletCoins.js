import React from "react";
import search from "../images/search.svg";

import { useState } from "react";

export default function WalletCoins({Clear, updateCoin }) {
  const HandleCoinSelect = (coin_name, coin_image, coin_bal) => {
    const data = { coin_name, coin_bal, coin_image };
    updateCoin(data);
    Clear()
  };

  const [coinEl] = useState([
    {
      id: 1,
      coin_name: "BTC",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    },
    {
      id: 2,
      coin_name: "USDT",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    },
    {
      id: 3,
      coin_name: "ETH",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 4,
      coin_name: "SOL",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    },
    {
      id: 5,
      coin_name: "NEXO",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/3695/large/nexo.png",
    },
    {
      id: 6,
      coin_name: "USDC",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
    },
    {
      id: 8,
      coin_name: "BNB",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    },
    {
      id: 9,
      coin_name: "BUSD",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/9576/large/BUSD.png",
    },
  ]);

  return (
    <div>
      <div className="coin-pop">
        <div className="coin-pop-inner">
          <div className="coin-pop-inner-top">
            <div className="coin-pop-inner-top-flex">
              <img
                className="dropSearch"
                src={search}
                alt="search"
                width={"20px"}
              />
              <input type="text" />
            </div>
          </div>

          <div className="coin-pop-inner-body">
            <div className="coin-pop-inner-body-inner">
              {coinEl.map((coin) => (
                <div
                  onClick={() =>
                    HandleCoinSelect(
                      coin.coin_name,
                      coin.coin_image,
                      coin.coin_bal
                    )
                  }
                  key={coin.id}
                  className="coin-pop-inner-body-inner-flex-left"
                >
                  <div className="left1">
                    <img src={coin.coin_image} alt="table3" />
                  </div>
                  <div className="left2">
                    <h3>{coin.coin_name}</h3>
                  </div>
                  <div className="left3">
                    <h4>{coin.coin_bal}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="coin-pop-inner-footer">
            <button>Manage</button>
            <div className="coin-pop-inner-footer2">
              <h3>
                BTC price <span className="price"></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
