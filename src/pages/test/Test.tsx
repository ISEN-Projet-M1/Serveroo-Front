import {
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow, IonCol, IonCard, IonCardTitle, IonCardContent, IonList, IonItem
} from '@ionic/react';
import React from "react";
import Fleche from "../../assets/svg/fleche.svg"
import "./Test.css"
import {product} from "../../shared/information/product/product";

const Test: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>Page test</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        {
                            product.map((oneProduct: any) => {
                                return (
                                    <IonCol size="12" size-lg="4" key={oneProduct.title}>
                                        <IonCard>
                                            <IonHeader>
                                                <img src={require("../../assets/" + oneProduct.image)} alt="Minecraft"
                                                     className="presentation"></img>
                                                <IonCardTitle className="center">{oneProduct.title}</IonCardTitle>
                                            </IonHeader>
                                            <IonCardContent>
                                                <IonList>
                                                    {
                                                        oneProduct.description.map((item: string) => {
                                                            return (<IonItem key={item}>
                                                                <img src={Fleche} alt="Flèche"/>
                                                                {item}
                                                            </IonItem>);
                                                        })
                                                    }
                                                </IonList>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                )
                            })
                        }
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

/*function Repeat() {
    return product.map((oneProduct: any) => {
        return (
            <IonCol size="12" size-lg="4" key={oneProduct.title}>
                <IonCard>
                    <IonHeader>
                        <img src={require("../../assets/" + oneProduct.image)} alt="Minecraft"
                             className="presentation"></img>
                        <IonCardTitle className="center">{oneProduct.title}</IonCardTitle>
                    </IonHeader>
                    <IonCardContent>
                        <IonList>
                            {
                                oneProduct.description.map((item: string) => {
                                    return (<IonItem key={item}>
                                        <img src={Fleche} alt="Flèche"/>
                                        {item}
                                    </IonItem>);
                                })
                            }
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        )
    })
}*/



export default Test;
