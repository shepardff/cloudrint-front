import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { fabric } from 'fabric';

let canvas: any = null;
const canvasWidth = 300;
const canvasHeight = 300;
let width = 0;
let height = 0;

const EditorPage = () => {
  const resizeImage = (content: any, maxWidth: number, maxHeight: number, full?: boolean): any => {
    return new Promise(async function (resolve, reject) {
      let width = 0;
      let height = 0;
      let nObj: any = {};
      let i = new Image();
      let img = new Image();

      i.onload = function () {
        width = i.width;
        height = i.height;
      };
      i.src = content;

      img.onload = function () {
        let canvas = document.createElement('canvas');
        let ctx: any = canvas.getContext('2d');
        let ratio = Math.min(maxWidth / width, maxHeight / height);

        if (full && maxHeight > height * ratio && maxWidth !== maxHeight) {
          maxWidth = 10000;
          ratio = Math.min(maxWidth / width, maxHeight / height);
          nObj['top_only'] = true;
        }

        if (full && maxWidth > width * ratio && maxWidth !== 10000) {
          maxHeight = 10000;
          ratio = Math.min(maxWidth / width, maxHeight / height);
          nObj['left_only'] = true;
        }

        nObj['width'] = width * ratio;
        nObj['height'] = height * ratio;

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.drawImage(img, 0, 0, width * ratio, height * ratio);

        nObj['content'] = canvas.toDataURL();

        console.log('SIZES', nObj);

        resolve(nObj);
      };

      img.src = content;
    });
  };

  const getBase64FromUrl = async (url: any) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  const convertImg = async () => {
    const image = await resizeImage(await getBase64FromUrl('http://localhost:3000/large.jpeg'), canvasWidth, 0, true);
    width = image.width;
    height = image.height;

    fabric.Image.fromURL(image.content, function (oImg) {
      oImg.name = 'selected';
      oImg.hasControls = false;
      oImg.selectable = false;

      canvas.add(oImg);

      /*const strokeWidth = 10;

      let rect = new fabric.Path(
        `M 0 0 L 
          ${300 - strokeWidth} 
          0 L ${300 - strokeWidth} 
          ${300 - strokeWidth} 
          L 0 ${300 - strokeWidth} z`,
        {
          perPixelTargetFind: true,
          fill: 'transparent',
          stroke: 'white',
          strokeWidth: strokeWidth,
          name: 'rect',
          selectable: false,
        }
      );
      canvas.centerObject(rect);
      canvas.add(rect);*/

      const movingRect = new fabric.Rect({
        left: 0,
        top: 0,
        fill: '',
        stroke: 'black',
        strokeWidth: 0,
        width: width,
        height: height,
        hasControls: false,
        name: 'movingRect',
      });
      canvas.add(movingRect);
    });
  };

  useEffect(() => {
    canvas = new fabric.Canvas('canvas');

    convertImg();

    canvas.on('object:moving', (obj: any) => {
      console.log(obj.target.left, obj.target.top);
      canvas.getObjects().map((nObj: any) => {
        if (nObj.name === 'selected' || nObj.name === 'movingRect') {
          nObj.set('top', obj.target.top);
          nObj.set('left', obj.target.left);
          if (obj.target.top > 0) {
            nObj.set('top', 0);
          }
          if (obj.target.left > 0) {
            nObj.set('left', 0);
          }
          if (obj.target.top < canvasHeight - height) {
            nObj.set('top', canvasHeight - height);
          }
          if (obj.target.left < canvasWidth - width) {
            nObj.set('left', canvasWidth - width);
          }
        }
      });
    });
  });

  return (
    <>
      <Header />
      <Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <canvas id="canvas" width={canvasWidth} height={canvasHeight} style={{ border: 'solid 1px green' }}></canvas>
      </Content>
      <Footer />
    </>
  );
};

export default EditorPage;
