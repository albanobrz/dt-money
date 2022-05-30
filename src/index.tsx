import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 9:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'moradia',
          amount: 1000,
          createdAt: new Date('2022-02-12 10:00:00'),
        } 
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    // o schema é o banco de dados
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // primeiro parâmetro é qual Model estamos inserindo, e o segundo os dados
      return schema.create('transaction', data)
    })

  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);