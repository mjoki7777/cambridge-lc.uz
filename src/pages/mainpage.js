import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collapse, Modal, Input, Card, Carousel}  from 'antd';
import {Navbar, Nav } from 'react-bootstrap';
import { Player, BigPlayButton } from 'video-react';
import ReactRotatingText from 'react-rotating-text';
import LazyLoad from 'react-lazyload';
import 'antd/dist/antd.css';
import '../assets/mainpage.css';
import '../assets/mainpage960.css';
import '../assets/mainpage1800.css';
import '../assets/mainpage2560.css';
import 'video-react/dist/video-react.css'; 
const { Panel } = Collapse;
const { Meta } = Card;

function link() {
  window.location.href = "https://www.instagram.com/cambridge_kidzz/";
}

function link1() {
  window.location.href = "http://corporate.cambridgegroup.uz";
}

class Mainpage extends Component {

  state = { 
    visible: false, 
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk  = (name, level, phone) => {
    axios.post('/api/Put', {
    name: name,
    level: level,
    phone: phone
    }).then((res) => {
    console.log(res)
  }).catch(err => {console.log(err)});
  this.setState({
    visible: false,
  });
};

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render() {    

        return (
            <div className='background' >































              <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar" >

              <Navbar.Brand href="#home">
              <img
              alt="lion"
              src={'lion2.jpg'}
              float="left"
              width="120px"
              height="90px"
              />
              <div className="brandname"> 
              CAMBRIDGE 
              <div className="brandname2"> 
              <div> 
              LEARNING CENTRE 
              </div> 
              </div>
              </div>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link style={{color:'white'}} href="#about">О НАС</Nav.Link>
              <Nav.Link style={{color:'white'}} href="#courses">КУРСЫ</Nav.Link>
              <Nav.Link style={{color:'white'}} href="#teachers">ПРЕПОДАВАТЕЛИ</Nav.Link>
              <Nav.Link style={{color:'white'}} href="#events">МЕРОПРИЯТИЯ</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
              <Nav.Link style={{color:'white'}} href="tel:+998712001115" className="phone"> (71) 200-11-15 </Nav.Link> 
              <Nav.Link href="https://www.instagram.com/cambridge_learning_centre/">
              <img src={'instagram.png'} alt="instagram" className="instagram"/>
              </Nav.Link> 
              <Nav.Link href="https://t.me/CAMBRIDGELearningCentre">
              <img src={'telegram.png'} alt="telegram" className="telegram"/>
              </Nav.Link> 
              <Nav.Link href="https://www.facebook.com/CambridgeLC/">
              <img src={'facebook.png'} alt="facebook" className="facebook"/>
              </Nav.Link> 
              </Nav>
              </Navbar.Collapse>

              </Navbar>































              <Row className="desktop">
              <Col span={9} className="lionbox animated fadeInLeft">
              <img src={'lion.png'} alt="lion" className="lion"/>
              </Col>
              <Col span={6} className="textbox">
              <div className="text animated zoomIn duration-2">
              <div> ЗДЕСЬ ВЫ ПОЛУЧИТЕ <br/> ЖЕЛАЕМЫЙ РЕЗУЛЬТАТ </div>
              </div>
              <div className="animated fadeInUp duration-3s">
              <a href="https://cambridgeonline.uz/register/web">
              <button type="button" className="btn btn-lg btn-default button-glow">ЗАПИСАТЬСЯ НА ТЕСТ</button>
              </a>
              </div>
              </Col>
              <Col span={9} className="guardsmanbox animated fadeInRight">
              <img src={'guardsman.png'} alt="guardsman" className="guardsman"/>
              </Col>
              </Row>

              <div className="mobile">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <img src={'lion.png'} alt="lion" className="lion"/>
              <div className="text">
              <div> ЗДЕСЬ ВЫ ПОЛУЧИТЕ <br/> ЖЕЛАЕМЫЙ РЕЗУЛЬТАТ </div>
              <div className="animated">
              <a href="https://cambridgeonline.uz/register/web">
              <button type="button" className="btn btn-lg btn-default button-glow">ЗАПИСАТЬСЯ НА ТЕСТ</button>
              </a>
              </div>
              </div>
              <img src={'guardsman.png'} alt="guardsman" className="guardsman"/>
              </div>

































              <hr id="about"/>
              <br/>
              <div className="welearningcenter">
              <div className="we"> МЫ </div>
              <ReactRotatingText items={[
              '#УЧЕБНЫЙ ЦЕНТР', 
              '№ 1 В ТАШКЕНТЕ', 
              'КОМАНДА ПРОФЕССИОНАЛОВ',
              'ЛУЧШИЕ РЕЗУЛЬТАТЫ',
              'КАЧЕСТВЕННОЕ ОБУЧЕНИЕ'
              ]} />
              </div>
              <div className="player">
              <LazyLoad once >
              <Player
              playsInline
              poster={'videopreview.jpg'}
              src={'cambridgevideo.mp4'}
              >
              <BigPlayButton position="center" />
              </Player>
              </LazyLoad>
              </div>




























              <Row className="desktop1">
              <Col span={16} className="animated wow zoomInLeft">
              <div className="hello"> HELLO!</div>
              <div className="description"> 
              Учебный центр Cambridge - это то место, 
              где английский язык станет для Вас родным. 
              Наша команда опытных профессионалов готова 
              предоставить Вам качественное обучение с индивидуальным подходом.
              </div>
              </Col>
              <Col span={8}>
              <img src={'iphone.png'} alt="iphone" className="iphone  animated pulse wow infinite delay-1s" />
              </Col> 
              </Row>

              <div className="mobile1">
              <div className="hello animated wow zoomInLeft"> HELLO!</div>
              <div className="description animated wow zoomInLeft"> 
              Учебный центр Cambridge - это то место, 
              где английский язык станет для Вас родным. 
              Наша команда опытных профессионалов готова 
              предоставить Вам качественное обучение с индивидуальным подходом.
              </div>
              <div>
              <img src={'iphone.png'} alt="iphone" className="iphone animated pulse wow infinite delay-1s" />
              </div>
              </div>
























              <hr id="courses"/>

              <Row className="desktop2">
              <Col span={8}>
              <img src={'guardsman2.png'} alt="guardsman2" className="guardsman2 animated fadeInLeft wow" />
              </Col> 
              <Col span={16} >
              <Collapse className="collapsepanel animated fadeInRight wow">
              <Panel header="ОБЩИЙ АНГЛИЙСКИЙ" className="panel">
              <div className="panelcontent">
              От <strong> Beginner </strong> до <strong> Upper-Intermediate </strong>
              <br></br>
              Обучение широкому спектру письменного и устного владения английским языком.
              Здесь, Вы пройдете путь от начального уровня до профессионального и 
              овладеете письменным и устным английским для применения его в работе и повседневной жизни.
              <br></br>
              Занятия проводятся <strong>3 раза</strong> в неделю по <strong> 1.5 часа </strong>
              <br></br>
              Цена за месяц:
              <br></br>
              <strong> 500 000 сум </strong>
              </div>
              </Panel>
              <Panel header="ПОДГОТОВКА К IELTS" className="panel">
              <div className="panelcontent">
              Интенсивная и качественная подготовка к экзамену IELTS от опытных профессионалов.
              Благодаря разнообразию групп на наши курсы IELTS, Вы сможете подготовиться в удобное
              для Вас время и добиться высочайших результатов.
              <br></br>
              <strong> IELTS Full Course - </strong>
              длится 4 месяца и нацелен
              <br></br>
              на балл 7.0+
              <br></br>
              <strong> IELTS Rocket - </strong>
              длится 2 месяца и нацелен
              <br></br>
              на балл 6.0+
              <br></br>
              </div>
              </Panel>
              <div onClick={link1} className="ant-collapse-item panel">
              <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
              <i aria-label="icon: right" className="anticon anticon-right ant-collapse-arrow ant-collapse-arrow">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" style={{width: '1em',height: '1em'}}  fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
              </i>
              КОРПОРАТИВНОЕ ОБУЧЕНИЕ
              </div>
              </div>
              <div onClick={link} className="ant-collapse-item panel">
              <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
              <i aria-label="icon: right" className="anticon anticon-right ant-collapse-arrow ant-collapse-arrow">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" style={{width: '1em',height: '1em'}}  fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
              </i>
              АНГЛИЙСКИЙ ДЛЯ ДЕТЕЙ
              </div>
              </div>
              </Collapse>
              </Col>
              </Row>

              <div className="orderdesktop">
              <a href="https://cambridgeonline.uz/register/web">
              <button type="button" className="moji btn btn-lg btn-default button-glow trialversion">
              ЗАПИСАТЬСЯ НА ТЕСТ
              </button>
              </a>
              <Modal
              title="Хотите узнать больше?"
              visible={this.state.visible}
              onOk={() => this.handleOk(this.state.name, this.state.level, this.state.phone) }
              onCancel={this.handleCancel}
              >
              <div className="titleinfo"> Оставляйте свои контакты и наши менеджеры свяжутся с Вами.</div>
              <Input 
              className="inputinfo" 
              placeholder="Имя Фамилия"
              onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input 
              className="inputinfo" 
              placeholder="Уровень английского языка"
              onChange={(e) => this.setState({ level: e.target.value })}
              />
              <Input 
              className="inputinfo" 
              placeholder="+998"
              onChange={(e) => this.setState({ phone: e.target.value })}
              />
              </Modal>
              </div>

              <div className="mobile2">
              <Collapse className="collapsepanel  fadeInRight wow">
              <Panel header="ОБЩИЙ АНГЛИЙСКИЙ" className="panel">
              <div className="panelcontent">
              От <strong> Beginner </strong> до <strong> Upper-Intermediate </strong>
              <br></br>
              Обучение широкому спектру письменного и устного владения английским языком.
              Здесь, Вы пройдете путь от начального уровня до профессионального и 
              овладеете письменным и устным английским для применения его в работе и повседневной жизни.
              <br></br>
              Занятия проводятся <strong>3 раза</strong> в неделю по <strong> 1.5 часа </strong>
              <br></br>
              Цена за месяц:
              <br></br>
              <strong> 500 000 сум </strong>
              </div>
              </Panel>
              <Panel header="ПОДГОТОВКА К IELTS" className="panel">
              <div className="panelcontent">
              Интенсивная и качественная подготовка к экзамену IELTS от опытных профессионалов.
              Благодаря разнообразию групп на наши курсы IELTS, Вы сможете подготовиться в удобное
              для Вас время и добиться высочайших результатов.
              <br></br>
              <strong> IELTS Full Course - </strong>
              длится 4 месяца и нацелен
              <br></br>
              на балл 7.0+
              <br></br>
              <strong> IELTS Rocket - </strong>
              длится 2 месяца и нацелен
              <br></br>
              на балл 6.0+
              <br></br>
              </div>
              </Panel>
              <div onClick={link1} className="ant-collapse-item panel">
              <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
              <i aria-label="icon: right" className="anticon anticon-right ant-collapse-arrow ant-collapse-arrow">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" style={{width: '1em',height: '1em'}}  fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
              </i>
              КОРПОРАТИВНОЕ ОБУЧЕНИЕ
              </div>
              </div>
              <div onClick={link} className="ant-collapse-item panel">
              <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
              <i aria-label="icon: right" className="anticon anticon-right ant-collapse-arrow ant-collapse-arrow">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" style={{width: '1em',height: '1em'}}  fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
              </svg>
              </i>
              АНГЛИЙСКИЙ ДЛЯ ДЕТЕЙ
              </div>
              </div>
              </Collapse>

              <img src={'guardsman2.png'} alt="guardsman2" className="guardsman2 animated fadeInLeft wow" />

              <div className="ordermobile">
              <a href="https://cambridgeonline.uz/register/web">
              <button type="button" className="btn btn-lg btn-default button-glow trialversion">
              ЗАПИСАТЬСЯ НА ТЕСТ
              </button>
              </a>
              <Modal
              title="Хотите узнать больше?"
              visible={this.state.visible}
              onOk={() => this.handleOk(this.state.name, this.state.level, this.state.phone)}
              onCancel={this.handleCancel}
              >
              <div className="titleinfo"> Оставляйте свои контакты и наши менеджеры свяжутся с Вами.</div>
              <Input 
              className="inputinfo" 
              placeholder="Имя Фамилия"
              onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input 
              className="inputinfo" 
              placeholder="Уровень английского языка"
              onChange={(e) => this.setState({ level: e.target.value })}
              />
              <Input 
              className="inputinfo" 
              placeholder="+998"
              onChange={(e) => this.setState({ phone: e.target.value })}
              />
              </Modal>
              </div>
              </div>
























              <hr id="teachers" className="teacherstitleee"/>

              <div className="teacherstitle animated wow lightSpeedIn"> ПРЕПОДАВАТЕЛИ </div>

              <div className="desktop3">
              <Row className="teachersrow1">
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="sandra" src={'sandra.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Sandra" description="IELTS Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="bekzod" src={'bekzod.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Mr.Bekzod" description="IELTS Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="oqila" src={'oqila.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Oqila" description="IELTS Tutor"/>
              </Card>
              </Col>
              </Row>
              <br></br>
              <Row className="teachersrow1">
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="sogdiana" src={'sogdiana.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Sogdiana" description="General English Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="gayrat" src={'gayrat.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Mr.Gayrat" description="IELTS Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="kim" src={'kim.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Anastasia" description="General English Tutor"/>
              </Card>
              </Col>
              </Row>
              <br></br>
              <Row className="teachersrow1">
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="umida" src={'umida.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Umida" description="IELTS Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="shohrux" src={'shohrux.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Mr.Shohrux" description="IELTS Tutor"/>
              </Card>
              </Col>
              <Col span={8}>
              <div className="square"></div>
              <Card
              hoverable
              cover={ <img alt="gulnoza" src={'gulnoza.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <Meta title="Ms.Rosalia" description="General English Tutor"/>
              </Card>
              </Col>
              </Row>


              </div>

              <div className="mobile3">
              <Carousel autoplay>
              <div>
              <Card
              hoverable
              cover={ <img alt="sandra" src={'sandra.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Sandra" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="bekzod" src={'bekzod.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Mr.Bekzod" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="oqila" src={'oqila.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Oqila" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="sogdiana" src={'sogdiana.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Sogdiana" description="General English Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="gayrat" src={'gayrat.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Mr.Gayrat" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="kim" src={'kim.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Anastasia" description="General English Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="umida" src={'umida.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Umida" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="shohrux" src={'shohrux.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Mr.Shohrux" description="IELTS Tutor"/>
              </Card>
              </div>
              <div>
              <Card
              hoverable
              cover={ <img alt="gulnoza" src={'gulnoza.jpg'} />}
              className="teachersinfo animated wow zoomInLeft"
              >
              <div className="square"></div>
              <Meta title="Ms.Rosalia" description="General English Tutor"/>
              </Card>
              </div>
              </Carousel>
              </div>






























              <hr id="events" className="eventsss"/>

              <div className="events animated wow lightSpeedIn"> МЕРОПРИЯТИЯ </div>
              <div class="marquee">
              <span>
              <div className="mainrunning1">
              <div className="runningline">
              <b>Мотивационные тренинги &nbsp; </b> 
              Movie Club &nbsp;
              <b>Speaking Club &nbsp; </b>
              Благотворительные мероприятия &nbsp; 
              <b>Мастер-классы &nbsp;</b>  
              Mock Exams &nbsp; 
              <b>Дебаты &nbsp; </b> 
              Конкурсы &nbsp;
              </div>
              <img className="runningimages" src={'222.jpg'} alt="222"></img>
              <img className="runningimages" src={'333.jpg'} alt="333"></img>
              <img className="runningimages" src={'444.jpg'} alt="444"></img>
              <img className="runningimages" src={'555.jpg'} alt="555"></img>
              <img className="runningimages" src={'666.jpg'} alt="666"></img>
              <img className="runningimages" src={'777.jpg'} alt="777"></img>
              <img className="runningimages" src={'888.jpg'} alt="888"></img>
              <img className="runningimages" src={'999.jpg'} alt="999"></img>
              <img className="runningimages" src={'3333.jpg'} alt="3333"></img>
              <img className="runningimages" src={'4444.jpg'} alt="4444"></img>
              <img className="runningimages" src={'5555.jpg'} alt="5555"></img>
              <img className="runningimages" src={'6666.jpg'} alt="6666"></img>
              </div>
              </span>
              <span>
              <div className="mainrunning1">
              <div className="runningline">
              <b>Мотивационные тренинги &nbsp; </b> 
              Movie Club &nbsp;
              <b>Speaking Club &nbsp; </b>
              Благотворительные мероприятия &nbsp; 
              <b>Мастер-классы &nbsp;</b>  
              Mock Exams &nbsp; 
              <b>Дебаты &nbsp; </b> 
              Конкурсы &nbsp;
              </div>
              <img className="runningimages" src={'222.jpg'} alt="222"></img>
              <img className="runningimages" src={'333.jpg'} alt="333"></img>
              <img className="runningimages" src={'444.jpg'} alt="444"></img>
              <img className="runningimages" src={'555.jpg'} alt="555"></img>
              <img className="runningimages" src={'666.jpg'} alt="666"></img>
              <img className="runningimages" src={'777.jpg'} alt="777"></img>
              <img className="runningimages" src={'888.jpg'} alt="888"></img>
              <img className="runningimages" src={'999.jpg'} alt="999"></img>
              <img className="runningimages" src={'3333.jpg'} alt="3333"></img>
              <img className="runningimages" src={'4444.jpg'} alt="4444"></img>
              <img className="runningimages" src={'5555.jpg'} alt="5555"></img>
              <img className="runningimages" src={'6666.jpg'} alt="6666"></img>
              </div>
              </span>
              </div>

























              <div className="results animated wow lightSpeedIn"> РЕЗУЛЬТАТЫ </div>

              <div className="desktop4">

              <Row className="resultsrow">
              <Col span={8}>
              <img src={'result1.png'} alt="result1" className="resultsphoto animated rollIn wow"/>
              </Col>
              <Col span={8}>
              <img src={'result2.png'} alt="result2" className="resultsphoto animated rollIn wow"/>
              </Col>
              <Col span={8}>
              <img src={'result3.png'} alt="result3" className="resultsphoto animated rollIn wow"/>
              </Col>
              </Row>

              <Row className="resultsrow">
              <Col span={8}>
              <img src={'result4.png'} alt="result4" className="resultsphoto animated rollIn wow"/>
              </Col>
              <Col span={8}>
              <img src={'result5.png'} alt="result5" className="resultsphoto animated rollIn wow"/>
              </Col>
              <Col span={8}>
              <img src={'result6.png'} alt="result6" className="resultsphoto animated rollIn wow"/>
              </Col>
              </Row>

              <Row className="resultsrow">

              <Col span={8}>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result7.png'} alt="result7" className="resultsphoto animated rollIn wow" />
              </div>
              <div>
              <img src={'20.jpg'} alt="20" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'21.jpg'} alt="21" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'22.jpg'} alt="22" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </Col>


              <Col span={8}>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result8.png'} alt="result8" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'23.jpg'} alt="23" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'24.jpg'} alt="24" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'25.jpg'} alt="25" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </Col>


              <Col span={8}>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result9.png'} alt="result8" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'26.jpg'} alt="26" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'27.jpg'} alt="27" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'28.jpg'} alt="28" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </Col>

              </Row>
              </div>

              <div className="mobile4">
              <Carousel autoplay>
              <div>
              <img src={'result1.png'} alt="result1" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <img src={'result2.png'} alt="result2" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <img src={'result3.png'} alt="result3" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <img src={'result4.png'} alt="result4" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <img src={'result5.png'} alt="result5" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <img src={'result6.png'} alt="result6" className="resultsphoto animated rollIn wow "/>
              </div>
              <div>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result7.png'} alt="result7" className="resultsphoto animated rollIn wow" />
              </div>
              <div>
              <img src={'20.jpg'} alt="20" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'21.jpg'} alt="21" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'22.jpg'} alt="22" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </div>
              <div>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result8.png'} alt="result8" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'23.jpg'} alt="23" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'24.jpg'} alt="24" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'25.jpg'} alt="25" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </div>
              <div>
              <Carousel autoplay effect="fade">
              <div>
              <img src={'result9.png'} alt="result8" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'26.jpg'} alt="26" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'27.jpg'} alt="27" className="resultsphoto animated rollIn wow"/>
              </div>
              <div>
              <img src={'28.jpg'} alt="28" className="resultsphoto animated rollIn wow"/>
              </div>
              </Carousel>
              </div>
              </Carousel>
              </div>























              <div className="locations animated wow lightSpeedIn"> ГДЕ МЫ НАХОДИМСЯ? </div>

              <Row className="desktop5">
              <Col span={6}>
              <div className="locationsname"> ДАРХАН</div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="1" width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=cambridge%20learning%20centre&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </Col>
              <Col span={6}>
              <div className="locationsname"> ДРУЖБА НАРОДОВ </div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="2" width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Cambridge%20Learning%20Complex%209%20Furkat%20Street%2C%20Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </Col>
              <Col span={6}>
              <div className="locationsname"> БАДАМЗАР </div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="3" width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=99%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%90%D0%BC%D0%B8%D1%80%D0%B0%20%D0%A2%D0%B5%D0%BC%D1%83%D1%80%D0%B0%2C%20%D0%AE%D0%BD%D1%83%D1%81%D0%B0%D0%B1%D0%B0%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20UZ%2C%20%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20100084%2C%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </Col>
              <Col span={6}>
              <div className="locationsname"> ТИНЧЛИК </div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="3" width="90%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2262.525568698128!2d69.21296800497889!3d41.33528660499095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIwJzA1LjkiTiA2OcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1582712315036!5m2!1sen!2sus" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </Col>
              </Row>


              <div className="mobile5">
              <Carousel autoplay>
              <div>
              <div className="locationsname"> ДАРХАН</div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="4" width="70%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=cambridge%20learning%20centre&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </div>
              <div>
              <div className="locationsname"> ДРУЖБА НАРОДОВ</div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="5" width="70%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Cambridge%20Learning%20Complex%209%20Furkat%20Street%2C%20Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </div>
              <div>
              <div className="locationsname"> БАДАМЗАР</div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="6" width="70%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=99%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%90%D0%BC%D0%B8%D1%80%D0%B0%20%D0%A2%D0%B5%D0%BC%D1%83%D1%80%D0%B0%2C%20%D0%AE%D0%BD%D1%83%D1%81%D0%B0%D0%B1%D0%B0%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20UZ%2C%20%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20100084%2C%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </div>
              <div>
              <div className="locationsname"> ТИНЧЛИК </div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="3" width="70%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2262.525568698128!2d69.21296800497889!3d41.33528660499095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIwJzA1LjkiTiA2OcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1582712315036!5m2!1sen!2sus" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
              </div>
              </Carousel>
              </div>























              <div className="desktop6">
              <Row style={{width: '60%', margin: '0 auto', textAlign: 'center'}}>
              <Col span={6}>
              <a style={{color:'white'}} href="tel:+998712001115"> 
              +9989 (71) 200 11 15
              </a> 
              </Col>
              <Col span={6}>
              <a href="https://www.instagram.com/cambridge_learning_centre/">
              <img src={'instagram.png'} alt="instagram" className="instagram"/>
              </a>
              </Col>
              <Col span={6}>
              <a href="https://t.me/CAMBRIDGELearningCentre">
              <img src={'telegram.png'} alt="telegram" className="telegram"/>
              </a>
              </Col>
              <Col span={6}>
              <a href="https://www.facebook.com/CambridgeLC/">
              <img src={'facebook.png'} alt="facebook" className="facebook"/>
              </a>
              </Col>
              </Row>
              </div>

              <div className="mobile6"> 
              (71)200-11-15 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/cambridge_learning_centre/">
              <img src={'instagram.png'} alt="instagram" className="instagram"/>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://t.me/CAMBRIDGELearningCentre">
              <img src={'telegram.png'} alt="telegram" className="telegram"/>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/CambridgeLC/">
              <img src={'facebook.png'} alt="facebook" className="facebook"/>
              </a>
              </div>

















            </div>
        )
    }
}

export default Mainpage;