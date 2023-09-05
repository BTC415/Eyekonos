import React, { useState, useEffect, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { formatEther, parseEther } from "@ethersproject/units";
import { Contract } from "@ethersproject/contracts";
import {
  ChainId,
  Token,
  WETH,
  Fetcher,
  Pair,
  Trade,
  Route,
  TokenAmount,
  TradeType,
  Percent
} from "@uniswap/sdk";

// contracts
import SNUABI from "../abis/snu.json";
import UniswapV2RouterABI from "../abis/uniswapv2router.json";

// images
import ArrowImage from "../assets/images/arrow-up.png";
import MetamaskImage from "../assets/images/metamask.svg";
import WalletConnectImage from "../assets/images/walletconnect.svg";
import ETHImage from "../assets/images/ethereum.png";

// variables
const CHAIN_ID = ChainId.MAINNET;
const SNUAddress = "0xd1cbfc7f417e9f5511a7502c83f2074f675995f5";
const UniswapV2RouterAddress = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";
const SNU = new Token(CHAIN_ID, SNUAddress, 18);
const slippageTolerance = 1.5;
const deadlineMins = 10;
const gasFeeAmount = 0.02;

const transactionSuccessText = "Transaction Success";
const transactionFailText = "Transaction Fail";
const transactionRejectText = "Transaction Reject";

const Swap = () => {
  // states
  const context = useWeb3React();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context;
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [walletModalItemState, setWalletModalItemState] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [ETHBalance, setETHBalance] = useState();
  const [SNUBalance, setSNUBalance] = useState();
  const [SNUAllowance, setSNUAllowance] = useState(false);
  const [ETHAmount, setETHAmount] = useState("");
  const [SNUAmount, setSNUAmount] = useState("");
  const [direction, setDirection] = useState<"fromETHToSNU" | "fromSNUToETH">(
    "fromETHToSNU"
  );

  const [insufficient, setInsufficient] = useState(false);
  const [focusToken, setFocusToken] = useState<"ETH" | "SNU">("ETH");
  const [pair, setPair] = useState<Pair | null>(null);

  // refs
  const walletModalRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    Fetcher.fetchPairData(SNU, WETH[CHAIN_ID])
      .then(_pair => {
        setPair(_pair);
        console.log("pair", _pair);
      })
      .catch();
  }, []);

  useEffect(() => {
    if (pair !== null) {
      if (direction === "fromETHToSNU") {
        const route = new Route([pair], WETH[CHAIN_ID]);
        if (focusToken === "ETH") {
          if (parseFloat(ETHAmount) !== 0) {
            try {
              const trade = new Trade(
                route,
                new TokenAmount(WETH[CHAIN_ID], `${parseEther(ETHAmount)}`),
                TradeType.EXACT_INPUT
              );

              setSNUAmount(
                trade
                  .minimumAmountOut(
                    new Percent((slippageTolerance * 100).toString(), "10000")
                  )
                  .toSignificant(6)
              );
              setInsufficient(false);
            } catch {
              setInsufficient(true);
              setSNUAmount("");
            }
          } else {
            setSNUAmount("");
          }
        } else {
          if (parseFloat(SNUAmount) !== 0) {
            try {
              const trade = new Trade(
                route,
                new TokenAmount(SNU, `${parseEther(SNUAmount)}`),
                TradeType.EXACT_OUTPUT
              );

              setETHAmount(
                trade
                  .maximumAmountIn(
                    new Percent((slippageTolerance * 100).toString(), "10000")
                  )
                  .toSignificant(6)
              );
              setInsufficient(false);
            } catch (error) {
              setInsufficient(true);
              setETHAmount("");
            }
          } else {
            setETHAmount("");
          }
        }
      } else {
        const route = new Route([pair], SNU);
        if (focusToken === "ETH") {
          if (parseFloat(ETHAmount) !== 0) {
            try {
              const trade = new Trade(
                route,
                new TokenAmount(WETH[CHAIN_ID], `${parseEther(ETHAmount)}`),
                TradeType.EXACT_OUTPUT
              );

              setSNUAmount(
                trade
                  .maximumAmountIn(
                    new Percent((slippageTolerance * 100).toString(), "10000")
                  )
                  .toSignificant(6)
              );
              setInsufficient(false);
            } catch {
              setInsufficient(true);
              setSNUAmount("");
            }
          } else {
            setSNUAmount("");
          }
        } else {
          if (parseFloat(SNUAmount) !== 0) {
            try {
              const trade = new Trade(
                route,
                new TokenAmount(SNU, `${parseEther(SNUAmount)}`),
                TradeType.EXACT_INPUT
              );

              setETHAmount(
                trade
                  .minimumAmountOut(
                    new Percent((slippageTolerance * 100).toString(), "10000")
                  )
                  .toSignificant(6)
              );

              setInsufficient(false);
            } catch (error) {
              setInsufficient(true);
              setETHAmount("");
            }
          } else {
            setETHAmount("");
          }
        }
      }
    }
  }, [focusToken, direction, ETHAmount, SNUAmount, pair]);

  useEffect(() => {
    const getETHBalance = () => {
      library
        .getBalance(account)
        .then((balance: any) => {
          setETHBalance(balance);
        })
        .catch((err: any) => {
          setETHBalance(undefined);
        });
    };

    const getSNUBalance = async () => {
      const SNUContract = new Contract(SNUAddress, SNUABI, library.getSigner());
      const _SNUBalance = await SNUContract.balanceOf(account);
      setSNUBalance(_SNUBalance);
    };

    const getSNUAllowance = async () => {
      const SNUContract = new Contract(SNUAddress, SNUABI, library.getSigner());
      const _SNUAllowance = await SNUContract.allowance(
        account,
        UniswapV2RouterAddress
      );
      setSNUAllowance(parseFloat(formatEther(_SNUAllowance)) > 0);
    };

    setETHAmount("");
    setSNUAmount("");

    if (library && active && !error) {
      getETHBalance();
      getSNUBalance();
      getSNUAllowance();
    } else {
      setETHBalance(undefined);
      setSNUBalance(undefined);
      setSNUAllowance(false);
    }
  }, [active, chainId, error, library, account]);

  // functions
  const metamaskConnect = () => {
    const metamaskConnector = new InjectedConnector({
      supportedChainIds: [1]
    });
    activate(metamaskConnector);
  };

  const walletConnectConnect = () => {
    const RPC_URLS = {
      1: "https://mainnet.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7",
    };
    const walletConnectConnector = new WalletConnectConnector({
      rpc: RPC_URLS,
      bridge: "https://bridge.walletconnect.org",
      qrcode: true
    });
    activate(walletConnectConnector);
  };

  const walletDisconnect = () => {
    if (active) {
      deactivate();
    }
  };

  const initAmount = async () => {
    setETHAmount("");
    setSNUAmount("");

    // eth balance
    library
      .getBalance(account)
      .then((balance: any) => {
        setETHBalance(balance);
      })
      .catch((err: any) => {
        setETHBalance(undefined);
      });

    // snu balance
    const SNUContract = new Contract(SNUAddress, SNUABI, library.getSigner());
    const _SNUBalance = await SNUContract.balanceOf(account);
    setSNUBalance(_SNUBalance);

    // allowance
    const _SNUAllowance = await SNUContract.allowance(
      account,
      UniswapV2RouterAddress
    );
    setSNUAllowance(parseFloat(formatEther(_SNUAllowance)) > 0);
  };

  const getSwapButtonEnabled = () => {
    if (!active) {
      return false;
    }
    if (transactionPending) {
      return false;
    }
    if (
      (parseFloat(ETHAmount) === 0 && parseFloat(SNUAmount) === 0) ||
      (ETHAmount === "" && SNUAmount === "")
    ) {
      return false;
    }
    if (ETHBalance !== undefined) {
      if (
        direction === "fromETHToSNU" &&
        parseFloat(formatEther(ETHBalance)) -
          parseFloat(ETHAmount) -
          gasFeeAmount <
          0
      ) {
        return false;
      }
    }
    if (SNUBalance !== undefined && ETHBalance !== undefined) {
      if (
        direction === "fromSNUToETH" &&
        (parseFloat(SNUAmount) > parseFloat(formatEther(SNUBalance)) ||
          parseFloat(formatEther(ETHBalance)) - gasFeeAmount < 0)
      ) {
        return false;
      }
    }
    if (insufficient) {
      return false;
    }
    if (!SNUAllowance && direction === "fromSNUToETH") {
      return true;
    }
    return true;
  };

  const getSwapButtonText = () => {
    if (!active) {
      return "Connect Wallet";
    }
    if (transactionPending) {
      return "Transaction Pending";
    }
    if (
      (parseFloat(ETHAmount) === 0 && parseFloat(SNUAmount) === 0) ||
      (ETHAmount === "" && SNUAmount === "")
    ) {
      return "Input Amount";
    }
    if (ETHBalance !== undefined) {
      if (
        direction === "fromETHToSNU" &&
        parseFloat(formatEther(ETHBalance)) -
          parseFloat(ETHAmount) -
          gasFeeAmount <
          0
      ) {
        return "Insufficient balance";
      }
    }
    if (SNUBalance !== undefined && ETHBalance !== undefined) {
      if (
        direction === "fromSNUToETH" &&
        (parseFloat(SNUAmount) > parseFloat(formatEther(SNUBalance)) ||
          parseFloat(formatEther(ETHBalance)) - gasFeeAmount < 0)
      ) {
        return "Insufficient balance";
      }
    }
    if (insufficient) {
      return "Insufficient liquidity";
    }
    if (!SNUAllowance && direction === "fromSNUToETH") {
      return "Approve";
    }
    return "Swap";
  };

  const swapToken = async () => {
    if (!SNUAllowance && direction === "fromSNUToETH") {
      setTransactionPending(true);
      const SNUContract = new Contract(SNUAddress, SNUABI, library.getSigner());
      try {
        const transaction = await SNUContract.approve(
          UniswapV2RouterAddress,
          parseEther("1000000000000")
        );
        const receipt = await transaction.wait();
        setTransactionPending(false);
        if (receipt.status) {
          setSNUAllowance(true);
        } else {
          setSNUAllowance(false);
        }
      } catch {
        initAmount();
        setTransactionPending(false);
        toast.warn(transactionRejectText);
      }
      return;
    }

    const path =
      direction === "fromETHToSNU"
        ? [WETH[CHAIN_ID].address, SNU.address]
        : [SNU.address, WETH[CHAIN_ID].address];
    const to = account;
    const deadline = Math.floor(Date.now() / 1000) + 60 * deadlineMins;
    const UniswapV2RouterContract = new Contract(
      UniswapV2RouterAddress,
      UniswapV2RouterABI,
      library.getSigner()
    );
    const _SNUAmount = parseEther(SNUAmount);
    const _ETHAmount = parseEther(ETHAmount);

    setTransactionPending(true);

    if (direction === "fromETHToSNU") {
      if (focusToken === "ETH") {
        const amountIn = _ETHAmount;
        const amountOutMin = _SNUAmount;
        try {
          const transaction = await UniswapV2RouterContract.swapExactETHForTokens(
            amountOutMin,
            path,
            to,
            deadline,
            {
              value: amountIn
            }
          );

          const receipt = await transaction.wait();
          initAmount();
          setTransactionPending(false);
          if (receipt.status) {
            toast.success(transactionSuccessText);
          } else {
            toast.error(transactionFailText);
          }
        } catch {
          initAmount();
          setTransactionPending(false);
          toast.warn(transactionRejectText);
        }
      } else {
        const amountInMax = _ETHAmount;
        const amountOut = _SNUAmount;
        try {
          const transaction = await UniswapV2RouterContract.swapETHForExactTokens(
            amountOut,
            path,
            to,
            deadline,
            {
              value: amountInMax
            }
          );
          const receipt = await transaction.wait();
          initAmount();
          setTransactionPending(false);
          if (receipt.status) {
            toast.success(transactionSuccessText);
          } else {
            toast.error(transactionFailText);
          }
        } catch {
          initAmount();
          setTransactionPending(false);
          toast.warn(transactionRejectText);
        }
      }
    } else {
      if (focusToken === "ETH") {
        const amountInMax = _SNUAmount;
        const amountOut = _ETHAmount;
        try {
          const transaction = await UniswapV2RouterContract.swapTokensForExactETH(
            amountOut,
            amountInMax,
            path,
            to,
            deadline
          );
          const receipt = await transaction.wait();
          initAmount();
          setTransactionPending(false);
          if (receipt.status) {
            toast.success(transactionSuccessText);
          } else {
            toast.error(transactionFailText);
          }
        } catch {
          initAmount();
          setTransactionPending(false);
          toast.warn(transactionRejectText);
        }
      } else {
        const amountIn = _SNUAmount;
        const amountOutMin = _ETHAmount;
        try {
          const transaction = await UniswapV2RouterContract.swapExactTokensForETH(
            amountIn,
            amountOutMin,
            path,
            to,
            deadline
          );
          const receipt = await transaction.wait();
          initAmount();
          setTransactionPending(false);
          if (receipt.status) {
            toast.success(transactionSuccessText);
          } else {
            toast.error(transactionFailText);
          }
        } catch {
          initAmount();
          setTransactionPending(false);
          toast.warn(transactionRejectText);
        }
      }
    }
  };

  return (
    <div className="component-swap">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="component-swap__header">
        <div
          className="component-swap__header__wallet"
          onClick={async () => {
            await setWalletModalItemState(active);
            setIsWalletModalOpen(true);
          }}
        >
          {error instanceof UnsupportedChainIdError
            ? "Wrong NET"
            : account
            ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
            : "Connect Wallet"}
        </div>
      </div>
      <div className="component-swap__main">
        {direction === "fromETHToSNU" ? (
          <div className="component-swap__main__section">
            <div className="component-swap__main__section__left">
              <input
                className="component-swap__main__section__left__input"
                value={ETHAmount}
                onChange={evt => {
                  setETHAmount(evt.target.value);
                  setFocusToken("ETH");
                }}
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="number"
                inputMode="decimal"
                placeholder="0.0"
                spellCheck={false}
                autoComplete="off"
              />
              <div className="component-swap__main__section__left__balance">
                Balance:{" "}
                {ETHBalance === undefined
                  ? "---"
                  : parseFloat(formatEther(ETHBalance)).toPrecision(4)}
              </div>
              <div
                className="component-swap__main__section__left__max-btn"
                onClick={() => {
                  if (ETHBalance !== undefined) {
                    setETHAmount(
                      (
                        parseFloat(formatEther(ETHBalance)) - gasFeeAmount
                      ).toPrecision(4)
                    );
                  }
                }}
              >
                MAX
              </div>
            </div>
            <div className="component-swap__main__section__right">
              <img src={ETHImage} alt="ethereum" />
              <div>ETH</div>
            </div>
          </div>
        ) : (
          <div className="component-swap__main__section">
            <div className="component-swap__main__section__left">
              <input
                className="component-swap__main__section__left__input"
                value={SNUAmount}
                onChange={evt => {
                  setSNUAmount(evt.target.value);
                  setFocusToken("SNU");
                }}
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="number"
                inputMode="decimal"
                placeholder="0.0"
                spellCheck={false}
                autoComplete="off"
              />
              <div className="component-swap__main__section__left__balance">
                Balance:{" "}
                {SNUBalance === undefined
                  ? "---"
                  : parseFloat(formatEther(SNUBalance)).toPrecision(4)}
              </div>
              <div
                className="component-swap__main__section__left__max-btn"
                onClick={() => {
                  if (SNUBalance !== undefined) {
                    setSNUAmount(formatEther(SNUBalance));
                  }
                }}
              >
                MAX
              </div>
            </div>
            <div className="component-swap__main__section__right">
              <img src={ETHImage} alt="ethereum" />
              <div>SNU</div>
            </div>
          </div>
        )}

        <div className="component-swap__main__direction">
          <div
            className="component-swap__main__direction__container"
            onClick={() => {
              if (direction === "fromETHToSNU") {
                setDirection("fromSNUToETH");
                setFocusToken("SNU");
              } else {
                setDirection("fromETHToSNU");
                setFocusToken("ETH");
              }
              setETHAmount("");
              setSNUAmount("");
            }}
          >
            <div className="component-swap__main__direction__container__img"></div>
          </div>
        </div>

        {direction === "fromETHToSNU" ? (
          <div className="component-swap__main__section">
            <div className="component-swap__main__section__left">
              <input
                className="component-swap__main__section__left__input"
                value={SNUAmount}
                onChange={evt => {
                  setSNUAmount(evt.target.value);
                  setFocusToken("SNU");
                }}
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="number"
                inputMode="decimal"
                placeholder="0.0"
                spellCheck={false}
                autoComplete="off"
              />
              <div className="component-swap__main__section__left__balance">
                Balance:{" "}
                {SNUBalance === undefined
                  ? "---"
                  : parseFloat(formatEther(SNUBalance)).toPrecision(4)}
              </div>
            </div>
            <div className="component-swap__main__section__right">
              <img src={ETHImage} alt="ETHereum" />
              <div>SNU</div>
            </div>
          </div>
        ) : (
          <div className="component-swap__main__section">
            <div className="component-swap__main__section__left">
              <input
                className="component-swap__main__section__left__input"
                value={ETHAmount}
                onChange={evt => {
                  setETHAmount(evt.target.value);
                  setFocusToken("ETH");
                }}
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="number"
                inputMode="decimal"
                placeholder="0.0"
                spellCheck={false}
                autoComplete="off"
              />
              <div className="component-swap__main__section__left__balance">
                Balance:{" "}
                {ETHBalance === undefined
                  ? "---"
                  : parseFloat(formatEther(ETHBalance)).toPrecision(4)}
              </div>
            </div>
            <div className="component-swap__main__section__right">
              <img src={ETHImage} alt="ETHereum" />
              <div>ETH</div>
            </div>
          </div>
        )}
      </div>
      <div
        className="component-swap__swap-btn"
        style={{
          backgroundColor: getSwapButtonEnabled() ? "#f3135cff" : "#f3135c20",
          cursor: getSwapButtonEnabled() ? "pointer" : "not-allowed"
        }}
        onClick={() => {
          if (getSwapButtonEnabled()) {
            swapToken();
          }
        }}
      >
        {getSwapButtonText()}
      </div>
      <div className="component-swap__other">
        <div className="component-swap__other__btn">Chart</div>
      </div>
      <div
        className="component-swap__modal-background"
        style={{
          pointerEvents: isWalletModalOpen ? "initial" : "none",
          backgroundColor: isWalletModalOpen ? "#000000aa" : "transparent"
        }}
        onClick={() => {
          setIsWalletModalOpen(false);
        }}
      />
      <div
        className="component-swap__wallets"
        ref={walletModalRef}
        style={{
          maxHeight: isWalletModalOpen
            ? walletModalRef.current
              ? walletModalRef.current.scrollHeight
              : 0
            : "0px"
        }}
      >
        <div className="component-swap__wallets__container">
          <div className="component-swap__wallets__container__title">
            <div
              className="component-swap__wallets__container__title__close-btn"
              onClick={() => {
                setIsWalletModalOpen(false);
              }}
            >
              <img src={ArrowImage} alt="arrow-up" />
            </div>
            <div className="component-swap__wallets__container__title__text">
              Connect Wallet
            </div>
            <div className="component-swap__wallets__container__title__empty"></div>
          </div>
          {!walletModalItemState && (
            <div
              className="component-swap__wallets__container__wallet"
              onClick={() => {
                setIsWalletModalOpen(false);
                metamaskConnect();
              }}
            >
              <img src={MetamaskImage} alt="metamask" />
              <div className="component-swap__wallets__container__wallet__name">
                Metamask
              </div>
            </div>
          )}
          {!walletModalItemState && (
            <div
              className="component-swap__wallets__container__wallet"
              onClick={() => {
                setIsWalletModalOpen(false);
                walletConnectConnect();
              }}
            >
              <img src={WalletConnectImage} alt="walletconnect" />
              <div className="component-swap__wallets__container__wallet__name">
                WalletConnect
              </div>
            </div>
          )}
          {walletModalItemState && (
            <div
              className="component-swap__wallets__container__wallet"
              onClick={() => {
                setIsWalletModalOpen(false);
                walletDisconnect();
              }}
            >
              <div className="component-swap__wallets__container__wallet__name">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Swap;
