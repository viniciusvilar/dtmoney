import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import moneyImg from '../../assets/money.svg'

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const transactions = useContext(TransactionsContext)

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Entradas</p>
                    <img src={moneyImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}