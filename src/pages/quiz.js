import React, { Component } from 'react';
import {  Modal, Input, Button } from 'antd';
import Questions from './questions.js';
import axios from 'axios';
import '../assets/quiz.css';
import 'antd/dist/antd.css';

class Quiz extends Component {
    
    showModal = () => {
        this.setState({
        visible: true,
    });
};
  
handleOk  = (name, levelName, phone) => {
    axios.post('/api/Put', {
        level: levelName,
        name: name,
        phone: phone
    }).then((res) => {
      console.log(res)
    }).catch(err => {console.log(err)});
    // alert("Заявка принята!")
    //   window.location.reload();
};
  
handleOk  = (name, levelName, phone) => {
    axios.post('https://cambridgegroup.uz/api/leads_from_website', {
        level: levelName,
        name: name,
        phone: phone
    }).then((res) => {
      console.log(res)
    }).catch(err => {console.log(err)});
};


handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };


    state = {
        visible: false,
        answers: [],
        onQuestionNow: 0,
        total: 0,
        totalReading: 0,
        levelName:'',
        start: false,
        levelNameReading:'',
        readingTest: false,
        finished:false,
        finishedReading:false,
        readingAnswers:[],
        bianswers: [
            'TRUE',     
            'FALSE',    
            'NOT GIVEN'
        ], 
        showTimer: false,
        answerKeysReading : [
        'predators and prey',
        'protective coloring',
        'blend in',
        'after their coloring',
        'on many backgrounds',
        'stripes or spots',
        'color-blind',
        'countershading',
        'black backs',
            'TRUE',
            'TRUE',
            'FALSE',
            'NOT GIVEN',
        ],
        answerKeys: [
            'b', 'a', 'c', 'b', 'b', 'c', 'a', 'a', 'b', 'c',
            'a', 'b', 'a', 'c', 'b', 'b', 'a', 'c', 'a', 'a',
            'b', 'b', 'c', 'c', 'b', 'a', 'b', 'a', 'a', 'c',
            'c', 'b', 'a', 'b', 'b', 'c', 'b', 'b', 'a', 'c',
            'b', 'a', 'a', 'c', 'a', 'c', 'b', 'c', 'b', 'c',
        ],
        letters: ['a','b','c'],
        // eslint-disable-next-line
        timer: "40" + ":" + '00',    
    }
    
    componentDidMount(){
        let qn = sessionStorage.getItem('q_num')
        if(!qn) sessionStorage.setItem('q_num', 0)
        let answers = sessionStorage.getItem('answers')
        if(!answers) sessionStorage.setItem('answers', JSON.stringify([]))
        console.log(Questions)
        console.log(answers)
    }

    componentWillUnmount(){
    }

    textAnswer = (index, answer) => {
        let text_answers = JSON.parse(sessionStorage.getItem('text_answers'))
        if(!text_answers){
            sessionStorage.setItem('text_answers', JSON.stringify([]))
            text_answers = []
        }
        text_answers[index] = answer
        sessionStorage.setItem('text_answers', JSON.stringify(text_answers))

        console.log(text_answers)
    }

        startTimer = () => {
            var presentTime = this.state.timer;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = this.checkSecond((timeArray[1] - 1));
            if(s==='59'){m=m-1}
            if(m<0){
                if(this.state.finished) this.checkTotalReading()
                else this.checkTotal()
                return;
            }
            
            this.setState({
                timer : m + ":" + s 
            })
            setTimeout(this.startTimer, 1000);
        }

    checkSecond = (sec) => {
        if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
        if (sec < 0) {sec = "59"};
        return sec;
    }

    checkTotalReading = () => {
        let text_answers = JSON.parse(sessionStorage.getItem('text_answers'))
        var tot = 0
        // eslint-disable-next-line
        this.state.answerKeysReading.map((item, index) => {
            if(text_answers[index]){
                if(text_answers[index] === item) tot = tot + 1 
            } else {

            }
        })
        if(tot < 8) this.setState({levelNameReading: 'Pre-Intermediate'})
        else if(tot < 11) this.setState({levelNameReading: 'Intermediate'})
        else if(tot < 13) this.setState({levelNameReading: 'Upper-Intermediate'})
        else if(tot < 14) this.setState({levelNameReading: 'Advanced'})
        console.log(text_answers)
        console.log(tot)
        this.setState({totalReading: tot})
        this.setState({finishedReading: true, showTimer: false})
    }
    
    getBack = (n) => {
        if(this.state.onQuestionNow !== 0){
            this.setState({onQuestionNow : this.state.onQuestionNow - 1})
        }
    }
    
    checkTotal(){
        let answers = JSON.parse(sessionStorage.getItem('answers'))
            let tot = 0
            // eslint-disable-next-line
            this.state.answerKeys.map((item, index) => {
                if(answers[index] === item) tot = tot+1
        })
        let timernow = parseInt(this.state.timer[0]+this.state.timer[1])
        timernow = timernow + 20;
        let seconds = parseInt(this.state.timer[3]+this.state.timer[4])
        this.setState({total: tot, finished: true, timer: timernow+':'+seconds}, function () {
            let t = this.state.total
            if(t < 26) this.setState({showTimer: false})
            if(t < 17) this.setState({levelName: 'Beginner'})
            else if(t < 19) this.setState({levelName: 'Elementary'})
            else if(t < 26) this.setState({levelName: 'Pre-Intermediate'})
            else if(t < 33) this.setState({levelName: 'Intermediate'})
            else if(t < 40) this.setState({levelName: 'Upper-Intermediate', readingTest: true})
            else if(t < 51) this.setState({levelName: 'Advanced', readingTest: true})
        }); 
    }
    next = (n) => {
        if(this.state.onQuestionNow !== Questions.length - 1){
            this.setState({onQuestionNow : this.state.onQuestionNow + 1})
            let answers = JSON.parse(sessionStorage.getItem('answers'))
            answers[this.state.onQuestionNow] = null
        } else {
            this.checkTotal()
        }
    }  
    stopTimer = () => {
        // eslint-disable-next-line
        this.setState({timer: '00'+':'+'00'})
    }
    start = () => {
        this.setState({start: true, showTimer: true})
        this.startTimer()
    }
    checkAnswer = (e) => {
        let answers = JSON.parse(sessionStorage.getItem('answers'))
        answers[this.state.onQuestionNow] = this.state.letters[e];
        sessionStorage.setItem('answers', JSON.stringify(answers))
        if(this.state.onQuestionNow !== Questions.length - 1){
            this.setState({onQuestionNow : this.state.onQuestionNow + 1})
            this.next()
        } else {
            this.checkTotal()
        }
    }
    render() {
        return (
            <center className="backgrounddd"><br/>
             {this.state.start && this.state.showTimer ? (<span>
                            <div className="testing">ТЕСТИРОВАНИЕ</div>
                            <div className="timer"> Осталось: {this.state.timer} </div>
            </span>) : (<span></span>)}
            {!this.state.start ? (<span>
                
                <div className="instruction">ИНСТРУКЦИЯ</div>

                <br></br>

                <div className="contentinfo">

                <div>Время - 1 час <br/> (40 мин Grammar and Vocabulary + 20 мин Reading (IELTS) ) </div>

                <br></br>

                <div>Распределение уровней Grammar and Vocabulary </div>
                <div>Beginner: 0-16 </div>
                <div>Elementary: 17-18 </div>
                <div>Pre-Intermediate: 19-25 </div>
                <div>Intermediate: 26-32 </div>
                <div>Upper-Intermediate: 33-39</div>
                <div>Advanced: 40-50 </div>

                <br></br>

                <div>
                Если ваш уровень выше Intermediate (26 баллов),
                <br></br>
                то вы имеете правдо пройти тест на Reading (IELTS).
                </div>

                <br></br>
              
                <div>Распределение уровней Reading (IELTS) </div>
                <div>Intermediate: 8-10</div>
                <div>Upper-Intermediate: 11-13</div>
                <div>Advanced: 13 </div>

                </div>

                <br/>

                <button type="button" className="btn btn-lg btn-default button-glow trialversion" onClick={this.start}>Начать тестирование </button>

            </span>) : (<span></span>)}
                {this.state.finished ? (
                    <div>
                        {(this.state.total < 25) || (this.state.total > 24 && this.state.finishedReading) ? (
                            <span>
                                <div className="final">ИТОГИ ТЕСТИРОВАНИЯ</div>
                                <div className="pointsearned"> GRAMMAR AND VOCABULARY </div>
                                <div className="totaloutof">{this.state.total} из {Questions.length} </div>  
                                
                                    {
                                        !this.state.readingTest ? (
                                       
                                       <div>

<div className="yourlevel">
                                ВАШ УРОВЕНЬ:
                                <div className="levelname">{this.state.levelName}</div>       
                                        </div>

<div className="yourlevel"> 
С удовольствием поможем Вам подтянуть английский язык!
                </div>



                                        <div className="order morder">
                                            <br/>
                <button type="button" className="btn btn-lg btn-default button-glow trialversion" onClick={this.showModal}>
                ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
                </button>
                <Modal
                title="Хотите узнать больше?"
                visible={this.state.visible}
                onOk={() => this.handleOk(this.state.name, this.state.levelName, this.state.phone)}
                onCancel={this.handleCancel}
                >
                <div className="titleinfo"> Оставляйте свои контакты и наши менеджеры свяжутся с Вами.</div>
                <div className="inputinfo"> Ваш уровень - {this.state.levelName} </div>
                <Input 
                className="inputinfo" 
                placeholder="Имя Фамилия"
                onChange={(e) => this.setState({ name: e.target.value })}
                />
                <Input 
                className="inputinfo" 
                placeholder="+998"
                onChange={(e) => this.setState({ phone: e.target.value })}
                />
                </Modal>
                </div>  
                                        
                                        </div>

                                        ) :(null)
                                    }
                            </span>
                        ) : (null)
                                                    
                        }
                    </div>
                ) : (
                <div>
                    {
                        this.state.start ? (
                        <div>
                            <div className="questionnumber"> {this.state.onQuestionNow+1} из 50 </div>
                            <br />
                            <div className="questionandnumber"> 
                                <span className="number">{this.state.onQuestionNow+1}</span>
                                <span className="question">{Questions[this.state.onQuestionNow].q}</span>
                            </div>

                            <br/>

                            {Questions[this.state.onQuestionNow].answers.map((item, index) => {
                                return (
                                    <Button 
                                    className="answers"
                                    type="danger"
                                    onClick = {(e) => {this.checkAnswer(index)}} 
                                    key = {index}>{item}
                                    </Button>
                                    )
                            })}
                            <br/>
                            <br/>
                            <Button 
                            className="navigations"
                            type="default"
                            onClick={this.getBack}>
                            BACK
                            </Button>
                            <Button 
                            className="navigations"
                            type="default"
                            onClick={this.next}>
                            NEXT
                            </Button>

                        </div>         
                        ) : null
                    }

                </div>
                )} 
                {(this.state.total > 25 && this.state.finished && !this.state.finishedReading) ? (
                    <div>

                    <div className="readingpassage"> Reading Passage  </div>
                    <br/>
                    <div className="readingpassageinfo">
                            You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 3 below.
                    </div>
                    <br/>
                    <div className="readingtext">
                        <div className="titlename">Animal Camouflage</div>
                        <br/>
                        <div>
                            The theory of natural selection, proposed by Charles Darwin almost 150 years ago, hypothesizes that organisms with traits that give them a survival advantage tend to live longer and produce more offspring. Over many thousands of years of evolution, those beneficial characteristics dominate the gene pool. Animals that use camouflage to conceal themselves from their enemies, predator and prey alike, provide a classic example of natural selection at work. Creatures with some type of protective coloring pass along the genes responsible, with each generation fine-tuning them along the way, eventually providing the most effective coloring for their environment and lifestyle. Scientists have described four types of camouflage that animals use: background matching, disruptive coloration, counter­ shading, and mimicry.
                        </div>
                        <br/>
                        <div>
                            From dirt-colored chipmunks and gophers to leaf-green praying mantises and tree frogs to ocean-gray mackerel and sharks, all sorts of wildlife use background matching, also known as crypsis, to blend in with their surroundings. Some animals have the ability to alter their coloring as their environment changes season­ ally or as they change locations. The arctic fox and the snowshoe hare both have white winter fur that matches the snow and ice around them, but a brown pelt in warmer weather blends in with their woodland environs. Some reptiles and fish can alter their surface appearance instantly as they move from place to place. The green anole lizard changes from green to brown as it travels among leaves and branches, whereas the flounder and other types of flatfish are able to match not just the color but also the silty or mottled sandy texture of the ocean floor beneath them.
                        </div>
                        <br/>
                        <div>
                            Most animals, though, cannot change their appearance so easily. Because background matching works only for a specific setting and often requires animals to remain motionless for long periods, a somewhat more effective strategy involves having a camouflage that works on many backgrounds, blending in with all, but not perfectly matching any of them.
                        </div>
                        <br/>
                        <div>
                            Disruptive coloration uses a pattern such as stripes or spots to disrupt the body’s outline. The pattern breaks up the contour of the animal’s body, confusing observers and making it difficult to distinguish an individual shape. Colors with more contrast, like a tiger’s stripes, tend to increase the disruptive effect. This type of camouflage works well for animals that travel in herds. It helps zebras blend in not so much with their background as with each other. Their major predator, the lion, sees a mass of moving stripes and has trouble targeting a specific animal. A single zebra, on the other hand, may use background matching when hiding in tall grass, where its black and white stripes merge with the green and yellow stalks. The different colors of the grasses and zebra are no help to a lion, which is color-blind.1
                        </div>
                        <br/>
                        <div>
                            Animals with countershading typically have a dark backside and a light belly, which affect an onlooker’s perception of their three-dimensional appearance and help decrease their visibility in sunlight. Countershading also can create a more uniformly dark appearance, presenting an apparent lack of depth. Caterpillars make good use of this effect, which gives them a flat look that blends in with tree bark.
                        </div>
                        <br/>
                        <div>
                            Countershading is useful to birds and marine animals that are typically seen against a light environment from below and against dark surroundings from above. Predatory birds like hawks take advantage of it to conceal themselves from the small birds and rodents they hunt. While in flight, a dark back absorbs the sun­ light above them and a light underside reflects the light below, diminishing telltale shadows that might give them away. On the ground or in a tree, their mottled brown feathers blend in with branches and leaves. Penguins also use countershading. Their white chests and black backs stand out on land but disappear in water where penguins spend most of their time. They are almost invisible to an observer looking down into dark water, while a creature in deeper water looking up sees a splash of white that looks like a beam of sunlight.
                        </div>
                        <br/>
                        <div>
                            Mimicry, or masquerading, works not by hiding a creature but by making it appear to be something else. Walking stick insects are virtually indistinguishable from twigs, and katydids look so much like green leaves that leaf-eating insects have been observed trying to chew on them.
                        </div>
                        <br/>
                        <div>
                            A type of mimicry known as aposematism involves masquerading as an animal that is undesirable or even dangerous. Predators bypass the foul-tasting monarch butterfly, but they also avoid the tasty look-alike viceroy butterfly. Coral snake impersonators, like the harmless scarlet snake, have the same red, black, and yellow bands but in a different order: black, yellow, red, yellow on the coral snake and red, black, yellow, black on the scarlet snake. Different types of moths use aposematism to scare off predators; some species have a big spot on each wing to mimic the eyes of a large animal, while the hawk moth caterpillar has a pattern on its rear that looks like a snake head.
                        </div>
                        <br/>
                        <div>
                            Some predators use what is known as aggressive mimicry to disguise them­ selves as something harmless so they can catch prey off guard. Small animals are not afraid of turkey vultures, which are scavengers, not predators. So, when the similar zone-tailed hawk flies with a group of turkey vultures, it has an easy time locating and zeroing in on its living prey.
                        </div>
                        <br/>
                        <div>
                            No single type of camouflage works best in all situations, and many animals use more than one technique to enhance their ability to avoid detection by predator and prey alike.
                        </div>
                        <br/>

                    </div>
                <br/>
                <br/>
                    
                    <div>
                    <div className="questions13">Questions 1-9</div>
                    <br/>
                    <div className="questions13info">
                    Complete the summary below. Choose NO MORE THAN THREE WORDS from the passage for each answer.
                    </div>
                    <div className="questions13info">
                    Write your answers on lines 1-9 on your answer box.
                    </div>
                    <br/>
                    <div className="questions9text">
                    Camouflage helps animals hide from both <strong>1</strong> <input onChange={(e) => this.textAnswer(0, e.target.value)}/>. 
                    Animals pass on their <strong>2</strong> <input onChange={(e) => this.textAnswer(1, e.target.value)} /> through their genes.
                    There are four different types of camouflage.
                    In background matching, an animal’s appearance helps it
                    <strong>3</strong> <input onChange={(e) => this.textAnswer(2, e.target.value)} /> with its environment. 
                    The arctic fox and snowshoe hare are examples of animals that
                    <strong>4</strong> <input onChange={(e) => this.textAnswer(3, e.target.value)}/> with the seasons. However, not all animals can easily change their appearance.
                    Many use a different strategy, having camouflage that helps them disguise themselves <strong>5</strong>
                    <input onChange={(e) => this.textAnswer(4, e.target.value)}/> 
                    Animals with disruptive coloration have marking such as
                    <strong>6</strong> <input onChange={(e) => this.textAnswer(5, e.target.value)}/> that make it difficult for a predator to discern the shape of the body.
                    Therefore, the predator has a hard time targeting one animal out of a group. 
                    Although zebras are black and white, they can hide in tall grass because their major predator is
                    <strong>7</strong> <input onChange={(e) => this.textAnswer(6, e.target.value)}/>.
                    <strong>8</strong> <input onChange={(e) => this.textAnswer(7, e.target.value)}/> is a type of camouflage that helps hide animals that are seen from above or below.
                    Penguins, for example, have
                    <strong>9</strong> <input onChange={(e) => this.textAnswer(8, e.target.value)}/>, which help them blend in with the dark water from the point of view of an observer standing above.
                    </div>
                <br/>
                <br/>
                <div className="questions13">Questions 9-13 </div>
                <br/>
                <div className="questions13info">
                Do the following statements agree with the information in the passage? On lines on your answer box, write:
                Write your answers on lines 1-9 on your answer box.
                </div>

                <br/>        
                <br/>        
                <div className="tfnginfo">
                <div>TRUE - if the statement agrees with the information </div>
                <div>FALSE - if the statement contradicts the information </div>    
                <div> NOT GIVEN - there is no information on this </div>      
                <br />
                <div>
                <strong>10</strong>	The walking stick insect looks like a small stick.
                <br />
                {this.state.bianswers.map(item => {return (<span key={item+1}>{item} 
                <input className="tfng" type="radio"  name="asd" value={item}   
                 onClick={() => {this.textAnswer(9, item)}}/></span>)})} 
                <br/>
                </div>
                <div>
                <strong>11</strong>	The viceroy butterfly is similar in appearance to the monarch butterfly.
                <br />
                {this.state.bianswers.map(item => {return (<span key={item+1}>{item} 
                <input className="tfng" type="radio"  name="heywe" 
                onClick={() => {this.textAnswer(10, item)}}/></span>)})}
                </div>
                <div>
                <strong>12</strong>	The scarlet snake is extremely poisonous.
                <br />
                {this.state.bianswers.map(item => {return (<span key={item+1}>{item} 
                <input className="tfng" type="radio"  name="heyyo"
                 onClick={() => {this.textAnswer(11, item)}}/></span>)})}
                </div>
                <div>
                <strong>13</strong>	The hawk moth caterpillar is brightly colored.
                <br />
                {this.state.bianswers.map(item => {return (<span key={item+1}>{item} 
                <input className="tfng" type="radio" name="hey"  
                onClick={()=> {this.textAnswer(12, item)}}/></span>)})}
                </div>
                </div>
                </div>

                <Button 
                className="ready"
                type="danger"
                onClick={this.checkTotalReading}>
                Готово! 
                </Button>
                    
                <br />
                <br />
                </div>
                    
                ) : (
                
                this.state.finishedReading ? (<div>
                <div className="pointsearned">  READING (IELTS) </div>
                <div className="totaloutof">{this.state.totalReading} из 13</div>  

                <div className="yourlevel">
                                ВАШ УРОВЕНЬ:
                                <div className="levelname">{this.state.levelName}</div>       
                                        </div>
                <div className="yourlevel"> 
                    Поздравляем! Вы с легкостью можете начать подготовку к IELTS
                </div>

                <div className="order morder">
                    <br/>
                <button type="button" className="btn btn-lg btn-default button-glow trialversion" onClick={this.showModal}>
                ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
                </button>
                <Modal
                title="Хотите узнать больше?"
                visible={this.state.visible}
                onOk={() => this.handleOk(this.state.name, this.state.levelName, this.state.phone)}
                onCancel={this.handleCancel}
                >
                <div className="titleinfo"> Оставляйте свои контакты и наши менеджеры свяжутся с Вами.</div>
                <div className="inputinfo"> Ваш уровень - {this.state.levelName} </div>
                <Input 
                className="inputinfo" 
                placeholder="Имя Фамилия"
                onChange={(e) => this.setState({ name: e.target.value })}
                />
                <Input 
                className="inputinfo" 
                placeholder="+998"
                onChange={(e) => this.setState({ phone: e.target.value })}
                />
                </Modal>
                </div>  
                
                </div>) : (<span></span>) 
                
                )}
            </center>
        )
    }
}

export default Quiz;