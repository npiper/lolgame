import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { cart, play, camera, trash, close } from 'ionicons/icons';
import {ellipse, square, triangle } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonBadge, IonToolbar, IonThumbnail,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonFab, IonFabButton,IonItem, IonIcon, IonLabel, IonButton,IonGrid, IonRow,
IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { useLolGallery } from '../hooks/useLolGallery';

const Tab2: React.FC = () => {
  const { takePhoto } = useLolGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>DOLL GALLERY</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Do you want to Collect her?</IonCardSubtitle>
          <IonCardTitle>Snow Angel</IonCardTitle>

        </IonCardHeader>

        <IonCardContent>
        <IonThumbnail>
          <img src="https://www.nicepng.com/png/full/10-107341_2-030-snow-angel-lol-surprise-snow-angel.png" />
        </IonThumbnail>
          Brrr…it’s cold in here.
    </IonCardContent>
      </IonCard>


      <IonItem>
        <IonLabel>Accessories</IonLabel>
        <IonBadge color="secondary" slot="end">10</IonBadge>
      </IonItem>

      <IonItem>
        <IonLabel>Rarity</IonLabel>
        <IonBadge color="secondary" slot="end">33</IonBadge>
      </IonItem>

      <IonItem>
        <IonLabel>Cuteness</IonLabel>
        <IonBadge color="secondary" slot="end">26</IonBadge>
      </IonItem>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">


          <IonFabButton color="secondary" onClick={() => takePhoto()}>
            <IonIcon icon={cart}></IonIcon>
          </IonFabButton>

          <IonFabButton color="secondary">
            <IonIcon icon={play}></IonIcon>
          </IonFabButton>

        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
