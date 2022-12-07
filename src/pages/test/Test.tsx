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
import Minecraft from "../../assets/Minecraft.png"
import Fleche from "../../assets/svg/flèche.svg"
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
                                    <IonCol size="4" key={oneProduct.title}>
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

function getAllProduct() {

}

function getOneProduct(product: any) {
    return (
        <IonCard>
            <IonHeader>
                <img src={Minecraft} alt="Minecraft" className="presentation"></img>
                <div>
                    <IonCardTitle>Serveur de jeu pour le jeu vidéo Minecraft</IonCardTitle>
                </div>
            </IonHeader>
            <IonCardContent>
                <IonList>
                    {
                        product.description.map((item: string) => {
                            return (<IonItem>
                                <img src={Fleche} alt="Flèche"/>
                                {item}
                            </IonItem>);
                        })
                    }
                    {/*<RepeatItem {product[0].description}></RepeatItem>*/}
                </IonList>
            </IonCardContent>
        </IonCard>
    );
}

function RepeatItem(tabDescription = []) {
    return tabDescription.map((item) => {
        return (<IonItem>
            <img src={Fleche} alt="Flèche"/>
            {item}
        </IonItem>);
    })
}

function getItem(description: string) {
    return (
        <IonItem>
            <img src={Fleche} alt="Flèche"/>
            {description}
        </IonItem>
    );
}

export default Test;
