import React, {useState, useEffect, useRef} from 'react';
import {navigate} from '@reach/router';
import mountains from '../static/images/mountains.png';
import '../static/css/main_styles.css';
import player_stand from '../static/images/kenney_platformercharacters/PNG/Player/Poses/player_stand.png';
import player_walk1 from '../static/images/kenney_platformercharacters/PNG/Player/Poses/player_walk1.png';
import player_walk2 from '../static/images/kenney_platformercharacters/PNG/Player/Poses/player_walk2.png';
import player_jump from '../static/images/kenney_platformercharacters/PNG/Player/Poses/player_jump.png';
import enemy from '../static/images/kenney_platformercharacters/PNG/Adventurer/Poses/adventurer_walk1.png';
import enemy2 from '../static/images/kenney_platformercharacters/PNG/Adventurer/Poses/adventurer_walk2.png';
import flying_enemy from '../static/images/flappy-dragon-sprite-sheets/PNG/frame-1.png';
import flying_enemy2 from '../static/images/flappy-dragon-sprite-sheets/PNG/frame-2.png';
import flying_enemy3 from '../static/images/flappy-dragon-sprite-sheets/PNG/frame-3.png';
import flying_enemy4 from '../static/images/flappy-dragon-sprite-sheets/PNG/frame-4.png';
import person from '../static/images/kenney_platformercharacters/PNG/Female/Poses/female_idle.png';
import heart from '../static/images/heart-fill.svg';
import billboard from '../static/images/billboard.png';
import game_over from '../static/images/game_over.gif';
import LinkedCS from '../static/images/linkedCS.jpg';
import ChatApp from '../static/images/chatApp.jpg';
import FaceDetection from '../static/images/faceDetection.jpg';
import speechBubble from '../static/images/speech_bubble.png';
import linkedin from '../static/images/linkedin.png';
import github from '../static/images/github.png';
import email from '../static/images/email.png';
const Main = () => {
    const [left, setLeft] = useState(5);
    const [top, setTop] = useState(80);
    const [input, setInput] = useState("");
    const [transform, setTransform] = useState(1);
    const [isLeft, setIsLeft] = useState(true);
    const [isGrounded, setIsGrounded] = useState(true);

    const [floorLeft, setFloorLeft] = useState([]);
    const [floorTop, setFloorTop] = useState([82, 82, 82, 82, 82, 82, 82, 82, 82]);


    const [flyingLeft, setFlyingLeft] = useState([]);
    const [flyingTop, setFlyingTop] = useState([75, 75, 75, 75, 75,75, 75, 75, 75, 75]);

    const [boardLeft, setBoardLeft] = useState([100, 200, 300, 400, 500, 600]);

    const [personLeft, setPersonLeft] = useState(50);

    const [score, setScore] = useState(0);
    const [hearts, setHearts] = useState([1, 1, 1]);

    const [gameStart, setGameStart] = useState(false);

    const [message, setMessage] = useState("");
    const [endMessage, setEndMessage] = useState(false);
    
    const [blink, setBlink] = useState(false);

    const [enemyState, setEnemyState] = useState(flying_enemy);
    const [floorState, setFloorState] = useState(enemy);

    const [gameWin, setGameWin] = useState(false);

    const player_style = {
        height: '10vh',
        width: '4vw',
        zIndex: '1',
        position: 'absolute',
        top: `${top}vh`,
        left: `${left}vw`,
        transform: `scaleX(${transform})`
    }   
    const floor_style = [];
    for(let i=0;i<floorLeft.length;i++){
        floor_style.push({
            zIndex: 1,
            position: 'absolute',
            top: `${floorTop[i]}vh`,
            left:   `${floorLeft[i]}vw`,
            width: '4vw',
            height: '9vh',
            transform: `scaleX(-1)`,
        });
    }
    const flying_style = [];
    for(let i=0;i<flyingLeft.length;i++){
        flying_style.push({
            zIndex: 1,
            position: 'absolute',
            top: `${flyingTop[i]}vh`,
            left:   `${flyingLeft[i]}vw`,
            width: '7vw',
            height: '6vh',
            transform: `scaleX(-1)`,
        });
    }
    const board_style = [];
    for(let i=0;i<boardLeft.length;i++){
        board_style.push({
            left: `${boardLeft[i]}vw`,
        });
    }
    const person_style = {
        zIndex: 0,
        position: 'absolute',
        top: '80vh',
        left:   `${personLeft}vw`,
        width: '4vw',
        height: '10vh',
        transform: `scaleX(-1)`,
    }
    const speech_style = {
        zIndex: 1,
        position: 'absolute',
        top: '60vh',
        left:   `${personLeft - 15}vw`,
        width: '30vw',
        height: '20vh',
    }

    let timer = useRef(null);
    let scoreTimer = useRef(null);
    let enemyTimer = useRef(null);
    let blinkTimer = useRef(null);
    let leftVal = useRef(5);
    let topVal = useRef(80);
    let playerPos = useRef(null);
    let walker = useRef(0);
    let jumper = useRef(0);
    let jumperEnd = useRef(false);
    let leftValCopy = useRef(5);
    let floorLeftVal = useRef([...floorLeft]); 
    let flyingLeftVal = useRef([...flyingLeft]);
    let enemyCounter = useRef(0);
    let boardLeftVal = useRef([...boardLeft]);
    let personLeftVal = useRef(personLeft);
    let scoreVal = useRef(score);
    let takenDamage = useRef(false);
    let heartsVal = useRef([1, 1, 1]);
    let gameOver = useRef(false);
    let text = useRef('');
    let textTimer = useRef(null);
    let messageVal = useRef(["Hey there, thanks for taking the time to look at my portfolio. ", "This website was made using React without any external libraries - meaning it's all original code! ", "To get started, move around with A and D, and jump with W. You can pause the game at any point with S. ", "Hint: Jumping over dragons is tough. Try to run backwards and then jump to make your jump go further! ","Make sure you click on the screen before playing and then check out the code behind this project :) "])

    useEffect(() => {
        clearInterval(timer.current);
        timer.current = setInterval(() => {
            switch(input){
                case 'd':
                    setIsLeft(true);
                    jumperEnd.current = false;
                    setTransform(1);
                    if(leftVal.current < 25){
                        setLeft(leftVal.current + 0.5);
                        leftVal.current += 0.5;
                        leftValCopy.current += 0.5;
                        
                    }
                    else{
                        leftValCopy.current += 0.5;
                        setGameStart(true);
                    }

                    if(Math.round(leftValCopy.current * 10) / 10 % 3 == 0){
                        if(walker.current % 2 == 0){
                            playerPos.current.src = player_walk1;
                        }
                        else{
                            playerPos.current.src = player_walk2;
                        }   
                        walker.current += 1;
                    }
                    break;
                case 'a':
                    setIsLeft(false);
                    jumperEnd.current = false;
                    setTransform(-1);

                    if(leftVal.current > 5){
                        setLeft(leftVal.current - 0.5);
                        leftVal.current -= 0.5;

                        leftValCopy.current -= 0.5;
                    }
                    else{
                        leftValCopy.current -= 0.5;
                    }
                    

                    if(Math.round(leftValCopy.current * 10) / 10 % 3 == 0){
                        if(walker.current % 2 == 0){
                            playerPos.current.src = player_walk1;
                        }
                        else{
                            playerPos.current.src = player_walk2;
                        }   
                        walker.current += 1;
                    }
                    break;
                case 'w':
                    setIsGrounded(false);
                    let dir;
                    isLeft ? dir = 'd' : dir = 'a';
                    playerPos.current.src = player_jump;
                    if(jumperEnd.current == false){
                        jumper.current += 1;
                    }
                    else{
                        jumper.current = 0;
                        setIsGrounded(true);
                        setInput(dir);
                        playerPos.current.src = player_stand;
                        break;
                    }
                    // jump up
                    if(jumper.current < 25) {
                        setTop(topVal.current - 0.8);
                        topVal.current -= 0.8;
                        
                        if(isLeft) {
                            if(leftVal.current < 25){
                                setLeft(leftVal.current + 0.5);
                                leftVal.current += 0.5;
                            }
                        }
                        else {
                            if(leftVal.current > 5){
                                setLeft(leftVal.current - 0.5);
                                leftVal.current -= 0.5;
                            }
                        }
                    }
                    // head down
                    else if(jumper.current < 49) {
                        setTop(topVal.current + 0.8);
                        topVal.current += 0.8;

                        if(isLeft) {
                            if(leftVal.current < 25){
                                setLeft(leftVal.current + 0.5);
                                leftVal.current += 0.5;
                            }
                        }
                        else {
                            if(leftVal.current > 5){
                                setLeft(leftVal.current - 0.5);
                                leftVal.current -= 0.5;
                            }
                        }
                    }
                    else {
                        jumperEnd.current = true;
                    }
                    break;
                case 's':
                    clearInterval(scoreTimer.current);
                    playerPos.current.src = player_stand;
                    jumperEnd.current = false;
                    setTop(topVal.current + 0.0);
                    topVal.current += 0.0;
                    setLeft(leftVal.current - 0.0);
                    leftVal.current -= 0.0;
                    setGameStart(false);
                    break;
            }
        }, 25);
    }, [input]);

    useEffect(() => {
        let arr = [];
        for(let i=0;i<10;i++){
            let last = 100;
            if(arr[0] != undefined){
                last = arr[arr.length-1];
            }
            arr.push((Math.floor(Math.random() * 75 + 40) + last)
            );
        }
        let idxArr = [];
        while(idxArr.length < 10){
            let idx = Math.floor(Math.random() * 10 + 0);
            if(!idxArr.includes(idx)){
                idxArr.push(idx);
            }
        }

        setFloorLeft([arr[idxArr[5]], arr[idxArr[6]], arr[idxArr[7]], arr[idxArr[8]],arr[idxArr[9]]]);

        floorLeftVal.current = [arr[idxArr[5]], arr[idxArr[6]], arr[idxArr[7]], arr[idxArr[8]],arr[idxArr[9]]];

        flyingLeftVal.current = [arr[idxArr[0]], arr[idxArr[1]], arr[idxArr[2]], arr[idxArr[3]], arr[idxArr[4]]];

        setFlyingLeft([arr[idxArr[0]], arr[idxArr[1]], arr[idxArr[2]], arr[idxArr[3]], arr[idxArr[4]]]); 


        let i = 0;
        let bool = true;
        textTimer.current = setInterval(() => {
            if(text.current.length < messageVal.current[i].length){
                setMessage(text.current);
                text.current = messageVal.current[i].slice(0, text.current.length + 1);
                // console.log(text.current);
            }
            else if(i !== messageVal.current.length-1){
                if(bool){
                    setTimeout(() => {
                        i++;
                        text.current = '';
                        bool = true;
                    }, 2000);
                }
                bool = false;
            }
            else{
                setTimeout(() => {
                    console.log("end");
                    setMessage('');
                    setEndMessage(true);
                    clearInterval(textTimer.current);
                }, 2000);
            }
            
        }, 50);
    
    blinkTimer.current = setInterval(() => {
        setBlink(!blink);
        if(gameStart){
            clearInterval(blinkTimer.current);
        }
    }, 500)
    }, []);

    useEffect(() => {
        if(gameStart && !gameOver.current){
            scoreTimer.current = setInterval(() => {
                setScore(scoreVal.current);
                scoreVal.current += 5;
            }, 100);

            enemyTimer.current = setInterval(() => {

                if(floorLeftVal.current[0] <= 0){
                    floorLeftVal.current = [...floorLeftVal.current.filter((val, i) => i !== 0).map(val => val), floorLeftVal.current[floorLeftVal.current.length-1] + Math.floor(Math.random() * 50 + 25)];
                    setFloorLeft(floorLeftVal.current);
                }

                setFloorLeft(floorLeftVal.current.map(val => {
                    return val - 0.5;
                }));

                floorLeftVal.current = [...floorLeftVal.current.map(val => val - 0.5)];

                floorLeft.forEach((val, i) => {
                    if(leftVal.current + 4 >= floorLeftVal.current[i] + 1 && leftVal.current <= floorLeftVal.current[i] + 3 && topVal.current + 7 >= floorTop[i]){
                        takenDamage.current = true;
                    }
                });

                if(flyingLeftVal.current[0] <= 0){
                    flyingLeftVal.current = [...flyingLeftVal.current.filter((val, i) => i !== 0).map(val => val), flyingLeftVal.current[flyingLeftVal.current.length-1] + Math.floor(Math.random() * 50 + 25)];
                    setFlyingLeft(flyingLeftVal.current);
                }

                setFlyingLeft(flyingLeftVal.current.map(val => {
                    return val - 0.5;
                }));

                flyingLeftVal.current = [...flyingLeftVal.current.map(val => val - 0.5)];

                flyingLeft.forEach((val, i) => {
                    if(leftVal.current + 4 >= flyingLeftVal.current[i] + 1.5 && leftVal.current <= flyingLeftVal.current[i] + 3 && topVal.current <= flyingTop[i] + 2 && topVal.current + 10 >= flyingTop[i] + 1){
                        takenDamage.current = true;
                    }
                });

                if(enemyCounter.current == 0){
                    setEnemyState(flying_enemy);
                    setFloorState(enemy);
                }
                else if(enemyCounter.current == 2){
                    setEnemyState(flying_enemy2);
                    setFloorState(enemy);
                }
                else if(enemyCounter.current == 4){
                    setEnemyState(flying_enemy3);
                    setFloorState(enemy2);
                }
                else if(enemyCounter.current == 6){
                    setEnemyState(flying_enemy4);
                    setFloorState(enemy2);
                    enemyCounter.current = 0;
                }
                enemyCounter.current++;


                setBoardLeft(boardLeftVal.current.map(val => {
                    return val - 0.2;
                }));
                boardLeftVal.current = [...boardLeftVal.current.map(val => val - 0.2)];

                setPersonLeft(personLeftVal.current - 0.5);
                personLeftVal.current -= 0.5;

                if(boardLeftVal.current[boardLeftVal.current.length - 1] <= 20){
                    console.log("Win");
                    clearInterval(timer.current);
                    clearInterval(enemyTimer.current);
                    clearInterval(scoreTimer.current);
                    setGameWin(true);
                }

            }, 25);
        }
        else {
            clearInterval(enemyTimer.current);
            clearInterval(scoreTimer.current);
        }
    }, [gameStart])

    useEffect(() => {
        if(takenDamage.current){
            if(heartsVal.current.length <= 1){
                console.log("Game over")
                gameOver.current = true;
            }
            heartsVal.current.pop();
            setHearts([...heartsVal.current]);
            heartsVal.current = [...heartsVal.current];
            setTimeout(() => {
                takenDamage.current = false;
            }, 1000);
        }
    }, [takenDamage.current])

    useEffect(() => {
        if(gameOver.current){
            clearInterval(timer.current);
            clearInterval(enemyTimer.current);
            clearInterval(scoreTimer.current);
        }
    }, [gameOver.current]);
    

    const handleKey = e => {
        let last = e[e.length-1];
        let letArr = ['a', 's', 'd', 'w'];
        if(isGrounded && letArr.includes(last)){
            setInput(last);
        }
    }
    const handleClick = () => {
        if(gameOver.current) {
            window.location.reload();
        }
    }
    return (
        <div className='body'>
            <header className='header'>
                <div className='scoreboard'>
                    <p className='score'>Score: {score}</p>
                    {
                    heartsVal.current.map((val, i) => {
                        return <img key={i} src={heart} className='heart'/>
                    })
                }
                </div>
                <div className='nav'>
                    <h3 className='current'>Home</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/projects'); window.location.reload();
                    }}>Projects</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/contact'); window.location.reload();
                    }}>Contact</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/endless'); window.location.reload(); 
                    }}>Endless</h3>
                </div>
            </header>   
            {
                !gameWin ? 
                <input className='input' value={input} onChange={e => handleKey(e.target.value)} onClick={e => handleClick()}/> :
                ''
            }
            
            <img src={mountains} className='mainImg'/>
            <div className='floor'></div>
            <img ref={playerPos} src={player_stand} className='player' style={player_style}/>
            {
                floor_style.map((val, i) => {
                    return <img src={floorState} key={i} className='movingFloor' style={floor_style[i]}/>
                })
            }
            {
                flying_style.map((val, i) => {
                    return <img src={enemyState} key={i} className='movingFloor' style={flying_style[i]}/>
                })
            }
            <img src={person} style={person_style} alt='person'/>
            <div style={speech_style}>
                {
                    !endMessage && !gameStart ? 
                    <img src={speechBubble}  className='speechBubble' alt='speech bubble'/> :
                    ''
                }
                {
                    !gameStart && !endMessage ? 
                    <p className='speechText'>{message}{
                        blink ? '|' : ''
                    }</p> :
                    ''
                }
            </div>
            
            <div className='board1Wrapper' style={board_style[0]}>
                <h2 className='board1Header1'>About</h2>
                <p className='board1Content1'>I'm a recent graduate from a coding bootcamp with a passion for creating and supporting business critical software. After beginning college early, I found a passion for software development and began teaching myself how to code. Soon after, I decided to join a coding bootcamp where I gained hands-on experience in web development. Combining my love of creativity and analytical thinking, I earned highest honors in C#/.NET and MERN (MongoDB, Express, React, Node).</p>
                <h2 className='board1Header2'>Experience</h2>
                <p className='board1Content2'>
                I'm a full stack developer with experience in C#/.NET, Python, and MERN (MongoDB, Express, React, Node). Along with designing, implementing and testing my own projects, I've led and worked with other developers in creating fully fleshed out and deployed web applications.
                </p>
                <img src={billboard} className='board1'/>
            </div>
            <div className='board2Wrapper' style={board_style[1]}>
                <div className='board2Header1'>
                    <h1>C#/.NET</h1>
                    <h1>Python</h1>
                    <h1>MERN</h1>
                </div>
                <div className='board2Content1'>
                    <div className='board2Col'>
                        <p>MySQL</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>ASP.NET Core</p>
                        <p>LINQ</p>
                        <p>Entity Framework Core</p>
                        <p>jQuery/AJAX</p>
                        <p>Bootstrap</p>
                    </div>
                    <div className='board2Col'>
                        <p>MySQL</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>Django</p>
                        <p>Selenium</p>
                        <p>jQuery/AJAX</p>
                        <p>Bootstrap</p>
                    </div>
                    <div className='board2Col'>
                        <p>JavaScript</p>
                        <p>MongoDB</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>Node.js</p>
                        <p>React</p>
                        <p>Express</p>
                        <p>Mongoose</p>
                        <p>jQuery/AJAX</p>
                        <p>Bootstrap</p>
                    </div>
                </div>
                <p className='board2Header2'>GitHub, Postman, GitBash, AWS EC2, AWS Route 53, Scrum, RESTful API</p>
                <img src={billboard} className='board3'/>
            </div>
            <div className='board3Wrapper' style={board_style[3]}>
                <div className='board3Header'>
                    <h2>LinkedCS</h2>
                    <p className='board3Date'>Oct. 2020</p>
                </div>
                <div className='board3Main'>
                    <img src={LinkedCS} className='board3Img'/>
                </div>
                <div className='board3Footer'>
                    <p className='board3FooterContent'>Single page social networking application borrowing concepts from LinkedIn and Instagram using: C#, Entity Framework Core, ASP.NET Core, MySQL, AJAX, Razor</p>
                </div>
                <img src={billboard} className='board3'/>
            </div>
            <div className='board3Wrapper' style={board_style[4]}>
                <div className='board3Header'>
                    <h2>ChatApp</h2>
                    <p className='board3Date'>Nov. 2020</p>
                </div>
                <div className='board3Main'>
                    <img src={ChatApp} className='board3Img'/>
                </div>
                <div className='board3Footer'>
                    <p className='board3FooterContent'>A communication app that allows users to access different rooms and send messages in real time using: Socket.io, MongoDB, Mongoose, Express, JavaScript</p>
                </div>
                <img src={billboard} className='board3'/>
            </div>
            <div className='board3Wrapper' style={board_style[2]}>
                <div className='board3Header'>
                    <h2>Face Detection</h2>
                    <p className='board3Date'>Sep. 2020</p>
                </div>
                <div className='board3Main'>
                    <img src={FaceDetection} className='board3Img'/>
                </div>
                <div className='board3Footer'>
                    <p className='board3FooterContent'>Login authentication through face detection using: Python, Django, OpenCV, AWS</p>
                </div>
                <img src={billboard} className='board3'/>
            </div>
            <div className='board3Wrapper' style={board_style[5]}>
                <div className='board3Header'>
                    <h2>Thanks for checking out my website!</h2>
                </div>
                <div className='board3Main'>
                    <p className='board3MainContent'>If you enjoyed this project or any of my other ones, please feel free to message me about any inquiries. If you haven't already, make sure you check out the code behind this project! There are no external libraries - all the code is my own! Don't believe me? Check it out at my github page https://github.com/nathan-roe or call me at 208-954-3979.</p>
                </div>
                <div className='board3Footer'>
                    <a href='https://github.com/nathan-roe' target='_blank' className='icon'><img src={github} className='icon'/></a>
                    <a href='https://www.linkedin.com/in/nathan-zachary-roe/' target='_blank' className='icon'><img src={linkedin} className='icon'/></a>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXxhKXMcCTGbdVZZPmGThCZPRZzfgKSfmDBghBHpNnLMVKhWDTjjNCpnkgvLGlHxqpGkg' target='_blank' className='icon'><img src={email} className='icon'/></a>
                </div>
                <img src={billboard} className='board3'/>
            </div>
            
            {
                heartsVal.current.length < 1 ? 
                <img src={game_over} className='gameOver'/> :
                ''
            }
            
        </div>
    );
}

export default Main;