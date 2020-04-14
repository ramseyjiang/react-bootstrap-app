import React from "react";

export default function Social(props) {
  return (
    <div>
      <small className="text-sm-left">{props.title}: 
        <button className="border rounded-circle border-light social-button-padding">
          <img alt="Register with Google" onClick={props.handleGoogle} src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg"/>
        </button>
        <button className="border rounded-circle border-light social-button-padding">
          <img alt="Register with Facebook" onClick={props.handleFb}  src="https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_facebook.svg"/>
        </button>
      </small>
    </div>
  );
}