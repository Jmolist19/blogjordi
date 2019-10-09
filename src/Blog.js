import React from 'react';
import {Barra_tipo_menu} from './Bodyblog';
import {Textos} from './Bodyblog';
import TextButtons from './Bodyblog';
import LetterAvatars from './Bodyblog';
import TitlebarGridList from './Bodyblog';

class Header extends React.Component{
    render(){
      return(
        <div>
        <header>
        <LetterAvatars/>
        <TextButtons/>
        
        
          <title>
            Portada BMW AUTOMOTORES
          </title>
          <img src="https://i.pinimg.com/originals/07/0d/3e/070d3e118fa9bcf14bf6a1004308c91b.jpg" style={{width:100, height:100}}/>
          <h1>BMW AUTOMOTORES</h1>
          </header>

        </div>

      );
    }
}
class Body extends React.Component{
  render(){
    return(
      <div>
<Barra_tipo_menu/>
<Textos/>
<TitlebarGridList/>
</div>
          )
      }
}

class Footer extends React.Component{
  render(){
    return (
<div>
<footer style = {{background: 'black', color: 'white'}}>
      <p >
Autor Jordi Molist acerca de BMW automoteres líder mundial en la industria automovilistica desde el año 2000
<br></br>
El Libro de los Automotores
<br></br>
Madame linch 1222 Asunción - 132 Paraguay
<br></br>
Contact Center: UPA </p>
</footer>
</div>
    );

  }
}
export {
  Footer,
  Header,
  Body
}
