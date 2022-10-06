import React from "react";
import MyPrincipal from "../componentes/main"
import MyFooter from "./Redes";
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
      EmailAdress= "sberlincia@gmail.com"
      PhoneNumber="+5548996689577"
      
      />
        <MyPrincipal
         image= "darbis.jpg"
         name= "Darbis .M"
         EmailAdress= "darbis.medinaadames974@gmail.com"
         PhoneNumber="+5518988169281"
         />

        <MyPrincipal
         image= "mawete.jpg"
         name= "Mawete .R"
         EmailAdress= "maweterafael28@gmail.com"
         PhoneNumber="+5511970295694"
         />
       <MyPrincipal
         image= "stwuar.jpg"
         name= "Stwuar .M"
         EmailAdress= "stwuarcarreno@gmail.com"
         PhoneNumber="+5554999161431"
         />
      </main>
      
    </div>


  );
};
export default ConteudoTotal;