import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas'

function App() {

    const [linea1, setLinea1] = useState('hola mundo');
    const [linea2, setLinea2] = useState();
    const [imagen, setImagen] = useState();

    const onChangeLinea1 = function (evento) {

        setLinea1(evento.target.value)
    }

    const onChangeLinea2 = function (evento) {

        setLinea2(evento.target.value)
    }

    const onChangeImagen = function (evento) {

        setImagen(evento.target.value)
    }

    const onClickExportar = function (evento) {
        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png")
            var link = document.createElement('a') //esta creando una etiqueta del link
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    }
    return (
        <div className="App">
            <select onChange={onChangeImagen}>
                <option value="1">Casa en llamas</option>
                <option value="2">Futurama</option>
                <option value="5">History channel</option>
                <option value="4">Matrix</option>
            </select><br />
            <input onChange={onChangeLinea1} type="text" placeholder="linea 1" /> <br />
            <input onChange={onChangeLinea2} type="text" placeholder="linea 2" /> <br />
            <button onClick={onClickExportar}>Exportar</button>
            <div className="meme" id="meme">
                <span>{linea1}</span> <br />
                <span>{linea2}</span>
                <img src={"img/" + imagen + ".jpg"} />
            </div>
        </div>
    );
}

export default App;
