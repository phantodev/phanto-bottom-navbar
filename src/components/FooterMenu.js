
import '../FooterMenu.css';
import { ReactComponent as Home } from "../img/home.svg";
import Feed from "../img/feed.svg";
import Dollar from "../img/dollar.svg";
import Cog from "../img/cog.svg";
import { useState } from "react";
//import Curve from "../img/curve-white.svg";


function FooterMenu() {

  const opcoes = ['link-home-active', 'curve-white', 'icon-home-start', 'icon-start', 'icon-start', 'icon-start'];

  // SET INITIAL INDICATOR'S CLASS. THEN IN EACH CLICK EVENT ON ICON GONNA CHANGE THE CLASS WITH NEW LEFT POSITION AND TRANSITION.
  const [ linkActive, setLinkState ] = useState(opcoes);
  const [ iconActive, setIconState ] = useState("home");
  const [ homeActive, setHomeState ] = useState("mini-in");
  const [ feedActive, setFeedState ] = useState("text-start");
  const [ payActive, setPayState ] = useState("text-start");
  const [ configActive, setConfigState ] = useState("text-start");

  function animateIcons(props){
    console.log(iconActive);

    if(props === "home" && iconActive === "feed"){
      setLinkState(['link-home-active', 'curve-white', 'icon-in', 'icon-out', 'icon-start', 'icon-start']);
      setIconState("home");
      setFeedState("mini-out");
      setHomeState("mini-in");
    }
    if(props === "home" && iconActive === "pay"){
      setLinkState(['link-home-active', 'curve-white', 'icon-in', 'icon-start', 'icon-out', 'icon-start']);
      setIconState("home");
      setPayState("mini-out");
      setHomeState("mini-in");
    }
    if(props === "home" && iconActive === "config"){
      setLinkState(['link-home-active', 'curve-white', 'icon-in', 'icon-start', 'icon-start', 'icon-out']);
      setIconState("home");
      setConfigState("mini-out");
      setHomeState("mini-in");
    }


    if(props === "feed" && iconActive === "home"){
      setLinkState(['link-feed-active', 'curve-white-feed-active', 'icon-out', 'icon-in', 'icon-start', 'icon-start']);
      setIconState("feed");
      setHomeState("mini-out");
      setFeedState("mini-in");
    }
    if(props === "feed" && iconActive === "pay"){
      setLinkState(['link-feed-active', 'curve-white-feed-active', 'icon-start', 'icon-in', 'icon-out', 'icon-start']);
      setIconState("feed");
      setPayState("mini-out");
      setFeedState("mini-in");
    }
    if(props === "feed" && iconActive === "config"){
      setLinkState(['link-feed-active', 'curve-white-feed-active', 'icon-start', 'icon-in', 'icon-start', 'icon-out']);
      setIconState("feed");
      setConfigState("mini-out");
      setFeedState("mini-in");
    }



    if(props === "pay" && iconActive === "feed"){
      setLinkState(['link-payment-active', 'curve-white-payment-active', 'icon-start', 'icon-out', 'icon-in', 'icon-start']);
      setIconState("pay");
      setFeedState("mini-out");
      setPayState("mini-in");
    }
    if(props === "pay" && iconActive === "home"){
      setLinkState(['link-payment-active', 'curve-white-payment-active', 'icon-out', 'icon-start', 'icon-in', 'icon-start']);
      setIconState("pay");
      setHomeState("mini-out");
      setPayState("mini-in");
    }
    if(props === "pay" && iconActive === "config"){
      setLinkState(['link-payment-active', 'curve-white-payment-active', 'icon-start', 'icon-start', 'icon-in', 'icon-out']);
      setIconState("pay");
      setConfigState("mini-out");
      setPayState("mini-in");
    }


    if(props === "config" && iconActive === "pay"){
      setLinkState(['link-config-active', 'curve-white-config-active', 'icon-start', 'icon-start', 'icon-out', 'icon-in']);
      setIconState("config");
      setPayState("mini-out");
      setConfigState("mini-in");
    }
    if(props === "config" && iconActive === "home"){
      setLinkState(['link-config-active', 'curve-white-config-active', 'icon-out', 'icon-start', 'icon-start', 'icon-in']);
      setIconState("config");
      setHomeState("mini-out");
      setConfigState("mini-in");
    }
    if(props === "config" && iconActive === "feed"){
      setLinkState(['link-config-active', 'curve-white-config-active', 'icon-start', 'icon-out', 'icon-start', 'icon-in']);
      setIconState("config");
      setFeedState("mini-out");
      setConfigState("mini-in");
    }
  }


  return (
      <div className="container-icons-menu-footer">
        <a 
          className={`${linkActive[2]}`} 
          href="#" 
          onClick={() =>  animateIcons('home')}>
          <Home width="30" height="30" className="icon-base"/>
        </a>
        <a 
          className={`${linkActive[3]}`} 
          href="#" 
          onClick={() =>  animateIcons('feed')}>
          <img src={Feed} alt="Icon Menu" width="30"/>
        </a>
        <a 
          className={`${linkActive[4]}`} 
          href="#"
          onClick={() =>  animateIcons('pay')}>
            <img src={Dollar} alt="Icon Menu" width="30"/>
        </a>
        <a 
          className={`${linkActive[5]}`} 
          href="#" onClick={() =>  animateIcons('config')}>
          <img src={Cog} alt="Icon Menu" width="30"/>
        </a>
        <div className="container-texts">
            <div id="home-text" className={homeActive}>Home</div>
            <div id="feed-text" className={feedActive}>Feed</div>
            <div id="pay-text" className={payActive}>Money</div>
            <div id="config-text" className={configActive}>Config</div>
            <div id="indicator" className={`box ${linkActive[0]}`}></div>
        </div>
        <div className={`curve-white ${linkActive[1]}`}><div className="circle"></div></div>
    </div>
  );
}

export default FooterMenu;
