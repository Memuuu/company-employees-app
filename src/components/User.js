import React, { Component } from "react";
//impt ile yüklenebilir
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  static defaultProps = {
    id: "1",
    name: "Name Yok",
    salary: "Salary Yok",
    department: "Depart Yok",
  };

  state = {
    isVisible: false,
  };

  /*
  //click olduğu zaman oluşan eventi yakalamak için fonksiyon bir değişkeni kullanır
  onClickEvent(e){
    //onClickEvent.bind(this) şeklinde kullanırsa User componentini gösterir ama bind kullanılmadıgında undefined dönüş yapar
    console.log(this);
  }

  //1. şekil bind işlemi 
  // constructor(props){
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this)
  // }
*/

  //arrow function otomatik bind işlemi yapar
  // onClickEvent = (number,e) =>{
  //   //console.log(this)
  //   console.log(number);
  // }

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     isVisible: false
  //   }
  // }

  //her tıklandıgında olan durum açıksa kapalı kapalıysa açık olacak şekilde değişir
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  // onDeleteUser = (e)=> {
  //   // const {id} = this.props;
  //   //Consumer Dispatch
  // }

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    //Consumer dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };


  //User'de bulunan onDeleteUser fonksiyonunun  yaptığı gibi bir component kaldırma işleminden hemen önce uygulanır.
  componentWillUnmount() {
    console.log("willUnmount")
  }

  render() {
    //[Destructing] sayesinde this.props yazısından kurtuluyoruz değişken olarak direkt yazabiliyoruz
    const { id, name, department, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#62848d", color: "white" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>
                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text"> Maaş: {salary}</p>
                    <p className="card-text"> Department: {department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};
//static ile de oluşturulabilir return'un üstüne
// User.defaultProps= {
//   name: "Name Yok",
//   salary: "Salary Yok",
//   department: "Depart Yok",
// };

export default User;
