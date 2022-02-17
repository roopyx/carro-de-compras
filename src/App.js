import { Component } from 'react'

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arberjas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({ ...x, cantidad: x.cantidad + 1})
        : x)
        return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState( { esCarroVisible: !this.state.esCarroVisible })
  }    

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        
      </div>
    )
  }
}

export default App