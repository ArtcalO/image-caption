<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="retour">Retour</ion-button>
            </ion-buttons>
            <ion-title>Ajout Caption</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
       <ion-list>
            <ion-button @click="getImage">Image</ion-button>
           <ion-item>
            <ion-input
                label="Date"
                labelPlacement="floating"
                placeholder="Entrer la date"
                type="date"
                v-model="date"
            ></ion-input>
           </ion-item>

           <ion-item>
               <ion-input
                label="Caption"
                labelPlacement="floating"
                placeholder="Entre votre caption"
                type="text"
                v-model="caption"
            ></ion-input>
           </ion-item>

       </ion-list>

       <ion-button @click="ajouterCaption">Ajouter</ion-button>
    </ion-content>
</template>

<script>
import { Camera, CameraResultType } from '@capacitor/camera';
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonList,
    IonItem,
    IonInput,
    IonContent,
    modalController,
} from '@ionic/vue'
export default {

  name: 'DetailsCaption',
  components:{
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
  },
  props:["captionProps"],
  data() {
    return {
        date:null,
        caption:""
    };
  },
  methods:{
    retour(){
        return modalController.dismiss(null, 'cancel');
    },
    ajouterCaption(){
        let p = {
            date:this.date,
            caption:this.caption
        }
       return modalController.dismiss(p, "addCaptionEmited")
    },
    async getImage(){
         const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
          });
        console.log(image)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
