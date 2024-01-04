'use client'
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { resolve } from 'path';
import { useState } from 'react';
import { blob } from 'stream/consumers';

export default function Home() {
const [thumbnail, setThumbnail] = useState('');

  const takePicture = async () => {
    defineCustomElements(window);
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
  
      var imageUrl = image.webPath;
      
      let imageElement = new Image();
      if (imageUrl != null)
      imageElement.src = imageUrl;
    setThumbnail(imageElement.src);

    } catch (error) {
      console.log('error')
    }
  };

  return (
    <div>
      <button onClick={takePicture}>Take Picture</button>
      <img src={thumbnail} alt="" />
      </div>
    );


}
