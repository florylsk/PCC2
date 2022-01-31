import {Container} from "react-bootstrap";


export default function HowToBuyBody(props){

    return(
      <div id="HowToBuyBody">
        <h2 className="text-center" style={{color:"#fff", fontWeight:300}}>How to buy in ComponentsPC</h2>
          <Container   style={{width:850,height:350,backgroundColor:"#fff",fontSize:"15px",marginTop:30}}>
              <p style={{color:"#888"}}>
                  ¡Comprar en Pccomponentes es muy sencillo! Pulsa, arriba a la derecha, en ‘ Entra o regístrate’ y rellena el formulario con tus datos. Una vez que hayas creado tu cuenta te darás cuenta de que formas parte de algo muy grande, recibirás varios correos, podrás acceder a tu Panel de usuario, y, lo más importante, ya podrás realizar tu primer pedido. ¡A ello! <br/>
              </p>
              <p style={{color:"#888"}}>
                  Una vez que te hayas paseado por la web y visto lo que estabas buscando, añádelo al carrito. Sigue buscando más cosas, ¡tenemos más de diez mil artículos! Que nada se te escape. Repite el proceso y añade cuantas cosas quieras al carrito, no te preocupes, es virtual, entra todo, no tienes que colocar nada, ¡Mola eh!<br/>
              </p>
                  <p style={{color:"#888"}}>
                  Cuando pulses en realizar pedido verás que tienes que elegir una dirección de envío, en caso de que tengas varias, y de facturación. También eliges la forma de envío y cómo quieres pagar el pedido, elige la que más te guste y hale, ya está.<br/>
              </p>
              <p style={{color:"#888"}}>
                  ¿Ya está? ¡No! Estábamos bromeando. En la siguiente pantalla verás un resumen de tu pedido, échale un ojo por si hay algún dato erróneo o quieres añadir algo. Si pulsas sobre finalizar compra, recibirás un correo electrónico con toda la información. Cuando el pedido salga de Pccomponentes recibirás otro correo y un sms para que puedas hacer el seguimiento en todo momento. Ahora sí, ¡ya está todo!.<br/>
              </p>
          </Container>


      </div>

    );
}