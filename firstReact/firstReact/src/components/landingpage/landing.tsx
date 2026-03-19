import React from "react";
import Sidebar from "../sidebar/sidebar";
import { IonHeader, IonContent, IonPage, IonTitle } from "@ionic/react";
import "./landing.css";

function Landing() {
  return (
    <>
      <IonPage>
        <IonContent>
          <div className="layout">
            <div className="left">
              <Sidebar></Sidebar>
            </div>
            <div className="right">
              <IonHeader>
                <IonTitle>Super Cooler Title</IonTitle>
              </IonHeader>
              <p>Super Cooler Content</p>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Landing;
