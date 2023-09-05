import React from "react";

// import DiscordIcon from "../assets/images/discord.svg";
import TelegramIcon from "../assets/images/telegram.svg";
import TwitterIcon from "../assets/images/twitter.svg";
// import RedditIcon from '../assets/images/reddit.svg';
import GithubIcon from "../assets/images/github.svg";
import InstagramIcon from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <div className="component-footer">
      <div className="component-footer__section-1">
        <div className="component-footer__section-1__title">
          SHINOBI HIDEOUT
        </div>
        <div className="component-footer__section-1__subtitle">(BUJOKU)</div>
        <br />
        <div className="component-footer__section-1__text">
          The Shinobi Clan grows stronger by the day. Follow us on our social
          media platforms to get the most up-to-date, and accurate Shinobi
          information. <br /> <br />
          We invite you to join our Telegram group, where you can interact with
          us, and thousands of other members of the Shinobi Clan.
        </div>
        <br />
        <br />
        <div className="component-footer__section-1__links">
          <a
            href="https://t.me/shinobilaunch"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://twitter.com/shinobilaunch"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://www.instagram.com/shinobilaunch"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://shinobi-inu.gitbook.io/"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="social" width="20px" />
          </a>
        </div>
      </div>

      <div className="component-footer__divider"></div>

      <div className="component-footer__section-2">
        <div className="component-footer__section-2__btns">
          <a
            className="component-footer__section-2__btns__btn"
            href="https://medium.com/@shinobilaunch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          <div className="component-footer__section-2__btns__btn">Ethereum</div>
        </div>
        <div className="component-footer__section-2__text">
          The Content shared on this website is for information purpose only
          and, thus, should not be considered as financial advice.
          Trading/Investing is risky and you should never invest more than you
          can afford to lose. Cryptocurrencies are risky. Never invest more than
          you can afford to lose. You alone assume the sole responsibility of
          evaluating the merits and risks associated with the use of any
          information or other Content on the Site before making any decisions
          based on such information or other Content. Eyekonos also does not
          promise financial gain, its purpose is to invest in other assets in
          order to accrue income to continue furthering the project and
          rewarding its users through other means
        </div>
      </div>
    </div>
  );
};

export default Footer;
