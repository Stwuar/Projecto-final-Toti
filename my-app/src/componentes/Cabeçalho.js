import React from "react";
import MyPrincipal from "../componentes/main"
import MyFooter from "../componentes/footer";
import MyMenu from "../componentes/header";
import "../componentes/apps.css"


const ConteudoTotal = () =>{
  return( 
    <div>
      <header>
        <MyMenu />
      </header>
      <main className="Principal">
        <MyPrincipal 
      image= "berlincia.jpg"
      name= "Berlincia"
      EmailAdress= "ber@gmail.com"
      PhoneNumber="+55115000000"
      />
        <MyPrincipal
         image= "darbis.jpg"
         name= "Darbis"
         EmailAdress= "Dar@gmail.com"
         PhoneNumber="+55116000000"
         />

        <MyPrincipal
         image= "mawete.jpg"
         name= "Mawete"
         EmailAdress= "mawe@gmail.com"
         PhoneNumber="+55117000000"
         />
       <MyPrincipal
         image= "stwr.jpg"
         name= "Stwar"
         EmailAdress= "stwr@gmail.com"
         PhoneNumber="+55118000000"
         />
      </main>
      
    </div>


  );
};
export default ConteudoTotal