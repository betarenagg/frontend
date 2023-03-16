import React from "react";
import medal from "../images/medal.svg";
import global from "../images/global.svg";
import wallet from "../images/wallet (2).svg";
import reward from "../images/reward (2).svg";
import transaction from "../images/transaction (2).svg";
import statistics from "../images/statistics.svg";
import ba from "../images/ba.svg";


export default function WalletCoins({profile}) {

  return (
    <div>
      <div className="pro-pop">
        <div className="pro-pop-inner">
          <div className="pro-pop-inner-top-flex">
            <div className="pro-pop-inner-top-flex-left">
              <div className="pro-pop-inner-top-flex-left-img">
                <img src={profile.img} alt="userImage" />
              </div>
              <div className="pro-pop-inner-top-flex-left1">
                <h3>{profile.username}</h3>
                <div className="pro-pop-inner-top-flex-left1-inner">
                  <div className="pro-pop-inner-top-flex-left1-inner-medal">
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                  </div>
                  <div className="pro-pop-inner-top-flex-left1-inner-rank">
                    <h4>
                      <span>{profile.ranking}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-pop-inner-top-flex-right">
              <img src={global} alt="global" />
              <h3>Global Setting</h3>
            </div>
          </div>

          <div className="pro-pop-inner-top2-cover">
            <div className="pro-pop-inner-top2">
              <div className="pro-pop-inner-top2-left">
                <h3>vip 0</h3>
              </div>
              <div className="pro-pop-inner-top2-right">
                <h4>
                  Need <span> 0</span> xp
                </h4>
                <h3>vip 1</h3>
              </div>
            </div>
            <div className="progress-vip-cover">
              <div className="progress-vip ">
                <div className="progress-motion-vip "></div>
              </div>
              <h3>5%</h3>
            </div>
          </div>

          <div className="pro-pop-inner-body">
            <div className="pro-pop-inner-body-inner">
              <div className="pro-pop-inner-body-inner1">
                <div className="pro-pop-inner-body-inner-left">
                  <img src={profile} alt="profile" />
                  <h3>User Information</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={statistics} alt="statistics" />
                  <h3>Statistics</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={transaction} alt="transaction" />
                  <h3>Transaction</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={profile} alt="profile" />
                  <h3>Live Support</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={profile} alt="profile" />
                  <h3>Affiliate</h3>
                </div>
              </div>
              <div className="pro-pop-inner-body-inner2">
                <div className="pro-pop-inner-body-inner-right">
                  <img src={wallet} alt="wallet" />
                  <h3>Wallet</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={ba} alt="ba" />
                  <h3>BASwap</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={profile} alt="profile" />
                  <h3>Vault Pro</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={reward} alt="reward" />
                  <h3>Reward</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={profile} alt="profile" />
                  <h3>VIP Club</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="pro-pop-inner-footer">
            <img src={profile} alt="profile" />
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
