
import './style.css';
import srcImage from './imageInSrc.jpg';


function App() {
  return (
    <div className="App">
     <div style={{border:"solid ,1px, black" , maxWidth:"100vw"}}>

   <h1 class="title_red">Your name here</h1>

  {"\n"}

<img src={srcImage} style={{width:'120px',height:'100px'}} />

{"\n"}

<img src='./imageInPublic.jpg' style={{width:'120px',height:'100px'}} />

   </div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
 </div>
  );
}

export default App;
