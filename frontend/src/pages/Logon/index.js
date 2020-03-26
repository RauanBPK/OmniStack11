import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom' // Pra nao usar <a href=></a> pra nao recarregar a pag toda. Lembra de SPA!
import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id); // Salva o ID no browser para usar nos outros requests
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch(err){
            alert('Falha no login, tente novamente!')
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua Id"
                        value = {id}
                        onChange={e => setID(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className = "back-link" to="/register">
                        <FiLogIn size={16} color= "#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes'/>
        </div>
    )
}