import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styled'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'


interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />

                <input placeholder='Valor' type="number" value={amount} onChange={event => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>

                    {/* o isActive é um nome que eu quiser dar */}
                    <RadioBox type='button' onClick={() => { setType('deposit') }} isActive={type === 'deposit'} activeColor="green" >
                        {/* poderia usar className={type == 'deposit' ? 'active' : ''} e criar uma classe, mas usamos outro método */}
                        <img src={incomeImg} alt="entrada"  />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button' onClick={() => { setType('withdraw') }} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="saída" />
                        <span>Saída</span>
                    </RadioBox>
                    
                </TransactionTypeContainer>

                <input placeholder='Categoria' type="text" value={category} onChange={event => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}