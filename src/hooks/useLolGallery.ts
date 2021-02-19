import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { File } from '@ionic-native/file/ngx';


const PHOTO_STORAGE = "photos";
const LOL_FILE= "./lol-data.csv";


export function useLolGallery() {

  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  };

  return {
    takePhoto
  };
}

export interface WebImage {
  webviewPath?: string;
}
