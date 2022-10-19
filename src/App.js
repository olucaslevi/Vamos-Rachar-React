import './App.css';
import logo from './logo.png';
import React from 'react';
import {useState,useEffect} from 'react';
import light from './light.ico';
import {FacebookMessengerShareButton,FacebookMessengerIcon,FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,WhatsappShareButton,WhatsappIcon} from 'react-share';

function App() {
  const [blackTheme, setBlackTheme] = useState(false);
  const [valorCalculado, setValorCalculado] = useState(0.00);
  const [valorTotal, setValorTotal] = useState(0.00);
  const [valorPessoa, setValorPessoa] = useState(0);
  const [canShare, setCanShare] = useState(false);

  const handleClick = () => {
    setBlackTheme(!blackTheme);
  }
  // useEffect(() => {
    useEffect(() => {
      // verify if the value is a number
      if (isNaN(valorTotal) || isNaN(valorPessoa)) {
        setValorCalculado(0.00);
      } else {
        setValorCalculado((valorTotal / valorPessoa).toFixed(2));
      }
      setValorCalculado(valorTotal/valorPessoa);
      if (valorTotal > 0 && valorPessoa > 0) {
        setCanShare(true);
      } else {
        setCanShare(false);
      }
    }, [valorTotal,valorPessoa]);
  // }, [valorTotal,valorPessoa]);


  const handleChange = (event) => {
    setValorTotal(event.target.value);
    console.log(valorTotal);
  }

  const handleChangePessoa = (event) => {
    setValorPessoa(event.target.value);
    console.log(valorPessoa);
  }

  const handleShare = () => {
    // apenas envia valor pelo whatsapp
  }

  return (
    <div className="App">
      <header className={blackTheme?'App-header-black':'App-header-white'}>
      <a className="themeButton" onClick={handleClick}><img className={blackTheme?"logoTheme":"anyName"} src={light} height="30vmin" filter={blackTheme?"invert(100%)":"brightness(0.5)"}></img></a>
        <h0>Vamos Rachar!</h0>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="form-global">
          <label>Valor da Conta:</label>
          <input type="text" name="valor" placeholder='R$ 00,00' onChange={handleChange}/>
          <label>Quantidade de Pessoas:</label>
          <input type="text" name="pessoas" placeholder='0'onChange={handleChangePessoa}/>
          <h3>Cada um paga: R${valorCalculado?valorCalculado:"R$ 00.00"}</h3>
          {canShare?<div>
            <FacebookShareButton url="https://vamos-rachar.vercel.app/" quote="Vamos Rachar!">
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            <TwitterShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            <WhatsappShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
              <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            <FacebookMessengerShareButton url="https://vamos-rachar.vercel.app/" title="Vamos Rachar!">
              <FacebookMessengerIcon size={32} round={true}/>
            </FacebookMessengerShareButton>
          </div>:<p>Digite apenas valores válidos!</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
