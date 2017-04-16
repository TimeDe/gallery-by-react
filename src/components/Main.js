require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片的相关数据
let imgDatas = require('../data/imageDatas.json');

//利用自执行函数,将图片名信息转换为图片真实路径URL信息
//ES6语法
imgDatas = imgDatas.map(x=> {
  x.imgUrl = require('../images/' + x.fileName);
  return x;
});
/*imgDatas = (function getImgUrl(imgDatasArr) {
 for(var i=0;i<imgDatasArr.length;i++){
 var singleImgData = imgDatasArr[i];

 singleImgData.imgUrl = require('../images/' + singleImgData.fileName);

 imgDatasArr[i] = singleImgData;
 }
 return imgDatasArr;
 })(imgDatas);*/

//老版本的React.createClass写法
/*var ImgFigure = React.createClass({
 render: function () {
 return(
 <figure>
 <img src={this.props.data.imgUrl} alt={this.props.data.title}/>
 <figcaption>
 <h2>{this.props.data.title}</h2>
 </figcaption>
 </figure>
 )
 }
 });*/

//推荐使用ES6语法的class写法
class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imgUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}


class AppComponent extends React.Component {
  render() {
    let controlerUnits = [];
    let imgFigures = [];

    imgDatas.forEach((item, index) => {
      imgFigures.push(<ImgFigure data={item} key={index}/>)
    });

    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controlerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
