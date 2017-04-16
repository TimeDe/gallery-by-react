require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片的相关数据
let imgDatas = require('../data/imageDatas.json');

//利用自执行函数,将图片名信息转换为图片真实路径URL信息
imgDatas = (function getImgUrl(imgDatasArr) {
  for(let i=0;i<imgDatasArr.length;i++){
    let singleImgData = imgDatasArr[i];

    singleImgData.imgUrl = require('../images' + singleImgData.fileName);

    imgDatasArr[i] = singleImgData;
  }
  return imgDatasArr;
})(imgDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
