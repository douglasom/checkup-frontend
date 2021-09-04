// import logo from './logo.svg';
import './App.css'
import React from 'react'
import './checkup.css'
import Identificacao from "./Identificacao"
import Abas from "./Abas"
import {Form} from 'react-bootstrap'
import Acoes from "./Acoes"
import MensagemDeErro from './MensagemDeErro'

class App extends React.Component {

    mySubmitHandler = event => {
        event.preventDefault()

        let bodyObj = this.state
        const body = JSON.stringify(bodyObj)
        console.log("Enviando " + body)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            contentType: "text/plain",
            dataType: "text",
            body: body
            // body: JSON.stringify(postBody)
        };
        fetch('http://localhost:8080/checkup/salvarProntuario', requestOptions)
            .then(response => {
                if (response.ok) {
                    if (response.redirected) {
                        let paramConcatChar = "&"
                        if (response.url.indexOf("?")< 0) {
                            paramConcatChar = "?"
                        }
                        const originalUrl = btoa(unescape(encodeURIComponent(window.location.href)))
                        window.location.href = (response.url + paramConcatChar + "forwardURI=" + originalUrl)
                    }
                    console.log("OK!")
                } else {
                    console.log("NOT OK...")
                }
                console.log(response.headers.get("content-type"))
                return response.json()
            })
            .then(data => {
                console.log("Resposta:")
                console.log(data)
                if (data.erro) {
                    this.setState({"erro": data.erro})
                }
            });
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        // fetch("https://api.example.com/items")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items
        //             });
        //         },
        //         // Nota: É importante lidar com os erros aqui
        //         // em vez de um bloco catch() para não recebermos
        //         // exceções de erros dos componentes.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }


    erro() {
        if (this.state.erro) {
            window.scrollTo(0,0)
            return <MensagemDeErro>{this.state.erro}</MensagemDeErro>
        } else {
            return ""
        }
    }
    render() {
        return (
            <div className="App">
                <Form onSubmit={this.mySubmitHandler}>
                    <header className="App-header">
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        <Identificacao/>
                    </header>
                    {this.erro()}
                    <Abas/>
                    <Acoes/>
                </Form>
            </div>
        )
    }

}

export default App
