import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };

    console.log("constructor");
  }

  //render ilk yüklendikten sonra componentDidMount'la setState gibi bir güncelleme işlemi gerçekleşirse 2. kez render çalışır 2. renderdan sonra componentDidUpdate çalışır
  componentDidUpdate = (prevProps, prevState) => {
    console.log("update");
  };


  //shouldComponentUpdate otomatik true döndürür bu da 2. render işleminin yapılması anlamına gelir. Eğer 2. render işlemi ve ardından update işlemi yapılması istenmiyosa ve gerekmiyosa (performans artışı için) return false ile componentDidMount sonrası 2. render edilmesi engellenebilir
  shouldComponentUpdate() {
    console.log("should");
    return false;
  }



  //Api istekleri burada gerçekleştirilir

  componentDidMount() {
    console.log("cmpmount");
    this.setState({
      a: 20,
    });
  }

  render() {
    console.log("render");

    return <div>Test</div>;
  }
}

export default Test;
