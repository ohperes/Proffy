import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/28010081?s=460&u=2d1865aade3d52b917265939075d55d93cd67471&v=4" alt="Vinicius Peres"/>
        <div>
          <strong>Vinicius Peres</strong>
          <span>Natação</span>
        </div>
      </header>
      <p>
        Entusiasta da natação aquática submarina submersiva
        <br/> <br/>
        Mistura de baleia e golfinho, nade com sabedoria e disciplina
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 900,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;