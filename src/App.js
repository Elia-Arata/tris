import { useState } from 'react';
import './App.css';


function App() {


  const statoIniziale = {
    prossimaMossa: "x",
    celle: [null, null, null, null, null, null, null, null, null],
    vittoria: false
  }

  const [app, appState] = useState(statoIniziale);

  function aggiornaStato(indice) {
    const statoAggiornato = app.celle.map((elementoCorrente, index) => {
      if (index == indice) {
        if (elementoCorrente == 'x') {
          return 'o';
        }
        else if (elementoCorrente == 'o') {
          return 'x';
        }
        else {
          return app.prossimaMossa;
        }

      } else {
        return elementoCorrente;
      }
    })
    let statoVittoria = app.vittoria

    if (statoAggiornato[0] == "x" && statoAggiornato[1] == "x" && statoAggiornato[2] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[3] == "x" && statoAggiornato[4] == "x" && statoAggiornato[5] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[6] == "x" && statoAggiornato[7] == "x" && statoAggiornato[8] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[0] == "x" && statoAggiornato[3] == "x" && statoAggiornato[6] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[1] == "x" && statoAggiornato[4] == "x" && statoAggiornato[7] == "x") {
      statoVittoria = true;
    } if (statoAggiornato[2] == "x" && statoAggiornato[5] == "x" && statoAggiornato[8] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[0] == "x" && statoAggiornato[4] == "x" && statoAggiornato[8] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[2] == "x" && statoAggiornato[4] == "x" && statoAggiornato[6] == "x") {
      statoVittoria = true;
    }
    if (statoAggiornato[0] == "o" && statoAggiornato[1] == "o" && statoAggiornato[2] == "o") {
      statoVittoria = true;
    }
    if (statoAggiornato[3] == "o" && statoAggiornato[4] == "o" && statoAggiornato[5] == "o") {
      statoVittoria = true;
    }
    if (statoAggiornato[6] == "o" && statoAggiornato[7] == "o" && statoAggiornato[8] == "o") {
      statoVittoria = true;
    }
    if (statoAggiornato[0] == "o" && statoAggiornato[3] == "o" && statoAggiornato[6] == "o") {
      statoVittoria = true;
    } 
    if (statoAggiornato[1] == "o" && statoAggiornato[4] == "o" && statoAggiornato[7] == "o") {
      statoVittoria = true;
    } 
    if (statoAggiornato[2] == "o" && statoAggiornato[5] == "o" && statoAggiornato[8] == "o") {
      statoVittoria = true;
    }
    if (statoAggiornato[0] == "o" && statoAggiornato[4] == "o" && statoAggiornato[8] == "o") {
      statoVittoria = true;
    }
  
    if (statoAggiornato[2] == "o" && statoAggiornato[4] == "o" && statoAggiornato[6] == "o") {
    statoVittoria = true;
    }





  appState({
    ...app,
    celle: statoAggiornato,
    prossimaMossa: app.prossimaMossa == "x" ? "o" : "x",
    vittoria: statoVittoria,
  });
}

return <div className='centraTutto'>
  <h1>TIC TAC TOE</h1>  

  <div className='bordo'>
    <div className='righe'>
      <div onClick={() => aggiornaStato(0)} className='cella'>
        {app.celle[0]}
      </div>
      <div onClick={() => aggiornaStato(1)} className='cella'>
        {app.celle[1]}
      </div>
      <div onClick={() => aggiornaStato(2)} className='cella'>
        {app.celle[2]}
      </div>
    </div>
    <div className='righe'>
      <div onClick={() => aggiornaStato(3)} className='cella'>
        {app.celle[3]}
      </div>
      <div onClick={() => aggiornaStato(4)} className='cella'>
        {app.celle[4]}
      </div>
      <div onClick={() => aggiornaStato(5)} className='cella'>
        {app.celle[5]}
      </div>
    </div>
    <div className='righe'>
      <div onClick={() => aggiornaStato(6)} className='cella'>
        {app.celle[6]}
      </div>
      <div onClick={() => aggiornaStato(7)} className='cella'>
        {app.celle[7]}
      </div>
      <div onClick={() => aggiornaStato(8)} className='cella'>
        {app.celle[8]}
      </div>
    </div>
  </div>
    {app.vittoria && <h1 className='vittoria'>VITTORIA</h1>}
</div>
}



export default App;
