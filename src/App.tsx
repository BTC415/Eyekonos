import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// style
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
// pages
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Create from "./pages/create";
import Filter from "./pages/filter";
import Claim from "./pages/claim";
import Scan from "./pages/scan";
import Upload from "./pages/upload";
import Permissions from "./pages/permissions";
import Print from "./pages/print";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import BrowserContainer from "./components/browsercontainer";
import Organize from "./pages/organize";
import ManageData from "./pages/managedata";
import Setup from "./pages/setup";
import ManageAdmissions from "./pages/manageadmissions";
import EventMedia from "./pages/eventmedia";
import AccountAction from "./pages/accountaction";
import EventDetails from "./pages/eventdetails";
import TicketAllocation from "./pages/ticketallocation";
import MyEvents from "./pages/myevents";
import EventType from "./pages/eventtype";
import Collectibles from "./pages/collectibles";
import PageCreate from "./pages/pagecreate";
import NFTToTickets from "./pages/nfttotickets";
import MyNFT from "./pages/mynft";
import UploadDataLimits from "./pages/uploaddatalimits";
import ManageAdmissionsTable from "./pages/manageadmissionstable";
import AddStorage from "./pages/addstorage";
import PrintPreview from "./pages/printpreview";
import MyMedia from "./pages/mymedia";
import AddToCollection from "./pages/addtocollection";
import IncreaseStorage from "./pages/increasestorage";
import ExclusiveContent from "./pages/exclusivecontent";
import CollectionType from "./pages/collectiontype";
import SectionSeating from "./pages/sectionseating";
import EventCreatorSetup from "./pages/eventcreatorsetup";
import ManageCollaborators from "./pages/managecollaborators";
import ManageUserMedia from "./pages/manageusermedia";
import CreateEvent from "./pages/createEvent";
import EventSummary from "./pages/specificticketnfts";
import SpecificTicketNFTs from "./pages/specificticketnfts";
import Settings from "./pages/settings";
import TicketDesign from "./pages/ticketdesign";
import AccountSettings from "./pages/accountsettings";
import NFTOrganize from "./pages/nftorganize";
import { Collapsed } from "./pages/collapsed";
import store from "./redux/store";
import { Provider } from "react-redux";

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <BrowserContainer>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Claim />
            </Route>
            <Route exact path="/account">
              <AccountSettings />
            </Route>
            <Route exact path="/event-creator/new-event">
              <EventDetails />
            </Route>
            <Route exact path="/event-creator/create-event">
              <CreateEvent />
            </Route>
            <Route exact path="/event-creator/nft">
              <Organize />
            </Route>
            <Route exact path="/event-creator/nft/manage">
              <AddToCollection />
            </Route>
            <Route exact path="/event-creator/nft/allocate">
              <NFTToTickets />
            </Route>
            <Route exact path="/event-creator/nft/organize">
              <NFTOrganize />
            </Route>
            <Route exact path="/event-creator/nft/opensea">
              <Upload />
            </Route>
            <Route exact path="/event-creator/admissions">
              <ManageAdmissions />
            </Route>
            <Route exact path="/event-creator/admissions/manage">
              <ManageAdmissionsTable />
            </Route>
            <Route exact path="/event-creator/admissions/scan">
              <Scan />
            </Route>
            <Route exact path="/event-creator/tickets">
              <Setup />
            </Route>
            <Route exact path="/event-creator/tickets/print">
              <Print />
            </Route>
            <Route exact path="/event-creator/tickets/print-preview">
              <PrintPreview />
            </Route>
            <Route exact path="/event-creator/tickets/settings">
              <Settings />
            </Route>
            <Route exact path="/event-creator/tickets/design">
              <TicketDesign />
            </Route>
            <Route exact path="/event-creator/setup">
              <EventCreatorSetup />
            </Route>
            <Route exact path="/event-creator/individual-seating">
              <SpecificTicketNFTs />
            </Route>
            <Route exact path="/event-creator/setup/manage-collaborators">
              <ManageCollaborators />
            </Route>
            <Route exact path="/event-creator/setup/media">
              <ManageData />
            </Route>
            <Route exact path="/event-creator/setup/media/user-uploads">
              <ManageUserMedia />
            </Route>
            <Route exact path="/event-creator/setup/media/upload-limits">
              <UploadDataLimits />
            </Route>
            <Route exact path="/event-creator/setup/media/add-storage">
              <AddStorage />
            </Route>
            <Route exact path="/event-creator/:noData?">
              <Create />
            </Route>
            <Route exact path="/pagecreate">
              <PageCreate />
            </Route>
            <Route exact path="/event">
              <EventType />
            </Route>
            <Route exact path="/event/nft">
              <MyNFT />
            </Route>
            <Route exact path="/event/exclusives">
              <ExclusiveContent />
            </Route>
            <Route exact path="/event/media">
              <EventMedia />
            </Route>
            <Route exact path="/permissions">
              <Permissions />
            </Route>
            {/* <Route exact path="/collectiontype">
            <CollectionType />
          </Route> */}
            <Route exact path="/accountaction">
              <AccountAction />
            </Route>
            <Route exact path="/increasestorage">
              <IncreaseStorage />
            </Route>
            {/* <Route exact path="/ticketallocation">
            <TicketAllocation />
          </Route> */}
            <Route exact path="/my-events">
              <MyEvents />
            </Route>
            <Route exact path="/not-found">
              <NotFound />
            </Route>
            <Redirect to="/not-found" />
          </Switch>
        </BrowserContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
