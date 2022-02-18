import { RequestLinkExtractor } from "../../api";
import React from "react";
import Overridable from "react-overridable";
import ReactDOM from "react-dom";
import { RequestAction } from "./index";

const element = document.getElementById("request-actions");

export const RequestActions = ({ request }) => {
  const actions = Object.keys(new RequestLinkExtractor(request).actions);
  return (
    <Overridable id="InvenioRequests.RequestActions.layout" request={request}>
      <>
        {actions.map((action, url) => (
          <RequestAction action={action} key={action} />
        ))}
      </>
    </Overridable>
  );
};

export const RequestActionsPortalCmp = ({ request }) => {
  return ReactDOM.createPortal(<RequestActions request={request} />, element);
};

export const RequestActionsPortal = Overridable.component(
  "InvenioRequests.RequestActionsPortal",
  RequestActionsPortalCmp
);

export default Overridable.component(
  "InvenioRequests.RequestActions",
  RequestActions
);