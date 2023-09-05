import React, { useState, useRef, useEffect } from "react";

import { scrollTo } from "../utils";

// components
import Container from "./container";

// images
import Logo from "../assets/icons/logo.png";
import EllipseSvg from "../assets/svgs/ellipse.svg";
import NavigationSvg from "../assets/svgs/navigation.svg";
import CrossSvg from "../assets/svgs/cross.svg";
import useDeviceType from "../hooks/useDeviceType";
import useWindowWidth from "../hooks/useWindowWidth";
import { useHistory, useLocation } from "react-router-dom";

interface IHeaderProps {
  paramHeaderType?: string;
}

const Header: React.FC<IHeaderProps> = ({
  paramHeaderType = "menu_included",
}) => {
  const [headerType, setHeaderType] = useState(paramHeaderType);
  const location = useLocation();
  const history = useHistory();
  const [windowWidth, setWindowWidth] = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  const [clicked, setClicked] = useState('');
  const [addStyle, setAddStyle] = useState('')

  const mobileAboutMenu = useRef<HTMLHeadingElement>(null);
  const mobileCommunityMenu = useRef<HTMLHeadingElement>(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    console.log(windowWidth);
    if (
      Number(windowWidth) < 500 ||
      location.pathname.endsWith("") ||
      location.pathname.endsWith("my-events") ||
      location.pathname.endsWith("event-creator") ||
      location.pathname.endsWith("event-creator/new-event") ||
      location.pathname.endsWith("event-creator/create-event") ||
      location.pathname.endsWith("event-creator/setup/manage-collaborators") ||
      location.pathname.endsWith("event-creator/setup/individual-seating")
    ) {
      setHeaderType("logo_only");
    } else if (Number(windowWidth) < 800) {
      setHeaderType("menu_included");
    } else {
      setHeaderType("side_bar");
    }

    if (location.pathname == '/') setAddStyle("none")
    else setAddStyle("block")
  }, [windowWidth, location.pathname]);
  return (
    <div className="component-header" >    
     {/* style={{ display: addStyle, height: '100px' }} */}
      <div className="component-header__fixer" style={{height:"9vmin"}}>
        <div
          className={[
            "component-header__fixer__sidebar",
            location.pathname.endsWith("not-found") ||
              location.pathname.endsWith("/event") ||
              location.pathname.includes("/event/")
              ? "invisible"
              : " ",
            headerType,
          ].join(" ")}
        >
          <div className="component-header__fixer__sidebar__content">
            Tickets (1000 / 5000)
          </div>
        </div>
        {!(
          location.pathname.endsWith("/event") ||
          location.pathname.includes("/event/")
        ) && (
            <Container
              className={["component-header__fixer-container", headerType].join(
                " "
              )}
            >
              {headerType !== "logo_only" && (
                <div
                  className={[
                    "component-header__fixer__nav-mobile-btn",
                    isOpen ? "active" : "",
                  ].join(" ")}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsOpenAbout(false);
                    setIsOpenCommunity(false);
                  }}
                >
                  {!isOpen && (
                    <img src={NavigationSvg} width={"10vmin"} height={"10vmin"} />
                  )}
                  {isOpen && (
                    <img src={CrossSvg} width={"10vmin"} height={"10vmin"} />
                  )}
                </div>
              )}
              <div
                className="component-header__fixer__nav-mobile"
                style={{ bottom: isOpen ? "0%" : "100%" }}
              >
                <div className="component-header__fixer__nav-mobile__link">
                  <div
                    className="component-header__fixer__nav-mobile__link__text"
                    onClick={() => {
                      setIsOpen(false);
                      setIsOpenAbout(!isOpenAbout);
                    }}
                  >
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'setup' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setClicked('setup')
                        history.push("/event-creator/setup");
                      }}
                    >
                      Setup
                    </div>
                    <div
                      className="component-header__fixer__nav-mobile__link__text__dropdown"
                      style={{
                        transform: isOpenAbout
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <div
                    className="component-header__fixer__nav-mobile__link__menu"
                    style={{
                      maxHeight: isOpenAbout
                        ? mobileAboutMenu.current
                          ? mobileAboutMenu.current.scrollHeight
                          : 0
                        : "0px",
                    }}
                    ref={mobileAboutMenu}
                  ></div>
                </div>
                <div className="component-header__fixer__nav-mobile__link">
                  <div
                    className="component-header__fixer__nav-mobile__link__text"
                    onClick={() => {
                      setIsOpenCommunity(!isOpenCommunity);
                    }}
                  >
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'nft' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setIsOpen(false);
                        setClicked('nft')
                        history.push("/event-creator/nft");
                      }}
                    >
                      NFT
                    </div>
                    <div
                      className="component-header__fixer__nav-mobile__link__text__dropdown"
                      style={{
                        transform: isOpenCommunity
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    ></div>
                  </div>
                  <div
                    className="component-header__fixer__nav-mobile__link__menu"
                    style={{
                      maxHeight: isOpenCommunity
                        ? mobileCommunityMenu.current
                          ? mobileCommunityMenu.current.scrollHeight
                          : 0
                        : "0px",
                    }}
                    ref={mobileCommunityMenu}
                  ></div>
                </div>
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'flyer' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => { setClicked('flyer') }}
                  >
                    Flyer
                  </a>
                </div>
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'tickets' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('tickets')
                      setIsOpen(false);
                      history.push("/event-creator/tickets");
                    }}
                  >
                    Tickets
                  </a>
                </div>
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'admissions' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('admissions')
                      setIsOpen(false);
                      history.push("/event-creator/admissions");
                    }}
                  >
                    Admissions
                  </a>
                </div>
              </div>
              {headerType !== "logo_only" && (
                <div className="component-header__fixer__nav">
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'setup' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setClicked("setup")
                        history.push("/event-creator/setup");
                      }}
                    >
                      Setup
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'nft' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setClicked('nft')
                        history.push("/event-creator/nft");
                      }}
                    >
                      NFT
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav-mobile__link__text ${clicked == 'flyer' ? 'activeHeader' : ''}`}
                      // rel="noopener noreferrer"
                      onClick={() => setClicked('flyer')}
                    >
                      Flyer
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav-mobile__link__text ${clicked == 'tickets' ? 'activeHeader' : ''}`}
                      // rel="noopener noreferrer"
                      onClick={() => {
                        setClicked('tickets')
                        history.push("/event-creator/tickets");
                      }}
                    >
                      Tickets
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav-mobile__link__text ${clicked == 'admissions' ? 'activeHeader' : ''}`}
                      // rel="noopener noreferrer"
                      onClick={() => {
                        setClicked('admissions')
                        history.push("/event-creator/admissions");
                      }}
                    >
                      Admissions
                    </div>
                  </div>
                </div>
              )}
              <img
                className="component-header__fixer__logo"
                src={Logo}
                alt="logo"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push("/");
                }}
              />
            </Container>
          )}
        {(location.pathname.endsWith("/event") ||
          location.pathname.includes("/event/")) && (
            <Container
              className={["component-header__fixer-container", headerType].join(
                " "
              )}
            >
              {headerType !== "logo_only" && (
                <div
                  className={[
                    "component-header__fixer__nav-mobile-btn",
                    isOpen ? "active" : "",
                  ].join(" ")}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsOpenAbout(false);
                    setIsOpenCommunity(false);
                  }}
                >
                  <span className="component-header__fixer__nav-mobile-btn__bar" />
                  <span className="component-header__fixer__nav-mobile-btn__bar" />
                  <span className="component-header__fixer__nav-mobile-btn__bar" />
                </div>
              )}
              <div
                className="component-header__fixer__nav-mobile"
                style={{ bottom: isOpen ? "0%" : "100%" }}
              >
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'eventmedia' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('eventmedia')
                      history.push("/event/media");
                    }}
                  >
                    Event Media
                  </a>
                </div>
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'exclusivecontent' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('exclusivecontent')
                      history.push("/event/exclusives");
                    }}
                  >
                    Exclusive Content
                  </a>
                </div>
                <img src={EllipseSvg} alt="" width="10px" />
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'nft' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('nft')
                      history.push("/event/nft");
                    }}
                  >
                    NFT
                  </a>
                </div>
                <img src={EllipseSvg} alt="" width="10px" />
                <div className="component-header__fixer__nav-mobile__link">
                  <a
                    className={`component-header__fixer__nav-mobile__link__text ${clicked == 'merch' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('merch')
                      history.push("/event/merch");
                    }}
                  >
                    Merch
                  </a>
                </div>
              </div>
              {headerType !== "logo_only" && (
                <div className="component-header__fixer__nav">
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'eventmedia' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setClicked('eventmedia')
                        history.push("/event/media");
                      }}
                    >
                      Event Media
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <div className="component-header__fixer__nav__link">
                    <div
                      className={`component-header__fixer__nav__link__text ${clicked == 'exclusivecontent' ? 'activeHeader' : ''}`}
                      onClick={() => {
                        setClicked('exclusivecontent')
                        history.push("/event/exclusives");
                      }}
                    >
                      Exclusive Content
                    </div>
                  </div>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <a
                    className={`component-header__fixer__nav__link ${clicked == 'nft' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('nft')
                      history.push("/event/nft");
                    }}
                  >
                    NFT
                  </a>
                  <img src={EllipseSvg} alt="" width="10px" />
                  <a
                    className={`component-header__fixer__nav__link ${clicked == 'merch' ? 'activeHeader' : ''}`}
                    rel="noopener noreferrer"
                    onClick={() => {
                      setClicked('merch')
                      history.push("/event/merch");
                    }}
                  >
                    Merch
                  </a>
                </div>
              )}
              <img
                className="component-header__fixer__logo"
                src={Logo}
                alt="logo"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push("/");
                }}
              />
            </Container>
          )}
      </div>
    </div>
  );
};

export default Header;
