import React, { Component } from 'react';


class HistorySample extends Component {
  //뒤로 가기
  handleGoBack= () => {
    this.props.history.goBack();
  };
  
  //홈으로 가기
  handleGoHome= () => {
    this.props.history.push('/');
  };
  
  componentDidMount(){
    this.unblock = this.props.history.block('정말 나가시겠습니까?');
  }
  //언마운트, 질문 멈춤 
  componentWillUnMount(){
    if (this.unblock){
      this.unblock();
     }
  }
  
  render(){
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
     );
  }
}

export default HistorySample;

/* p343 history
history객체는 라우트 컴포넌트 match, location과 함께 전달되는 props중 하나, 
component 내 메서드에서 API 호출 가능 : 버튼 클릭 후 뒤로, 로그인 후 화면 전환, 다른 페이지 이탈 등 */
