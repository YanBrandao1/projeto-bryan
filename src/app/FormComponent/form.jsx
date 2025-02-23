'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./styles.module.css";

export default function Form() {

  const formKey = process.env.NEXT_PUBLIC_FORM_KEY;
  const ServiceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const [formData, setFormData] = useState({
    nome: '',
    sexo: '',
    nascimento: '',
    telefone: '',
    email: '',
    objetivo: [],
    mensagem: ''
  });

  const objetivos = [
    'Emagrecimento',
    'Ganho de massa muscular',
    'Tratamento nutricional para alguma condição clínica diagnosticada',
    'Normalizar alterações em exames bioquímicos'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        objetivo: checked
          ? [...prevData.objetivo, value]
          : prevData.objetivo.filter((obj) => obj !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      ServiceId,
      templateId,
      { ...formData, objetivo: formData.objetivo.join(', ') },
      formKey
    )
    .then(() => alert('Formulário enviado com sucesso!'))
    .catch((error) => alert('Erro ao enviar formulário: ' + error.text));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>

      <input className={`${styles.nome} ${styles.padrao}`}
        type="text"
        name="nome"
        placeholder="Nome Completo *"
        required
        value={formData.nome}
        onChange={handleChange}
      />

      <div className={styles.divisorDeConteudo}>

        <select className={`${styles.sexo} ${styles.padrao}`}
          name="sexo"
          required
          value={formData.sexo}
          onChange={handleChange}
        >
          <option value="">Sexo *</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>

        <label htmlFor="nascimento" className={styles.label}>
        Data de Nascimento:
      </label>
        <input className={`${styles.dataDeNascimento} ${styles.padrao}`}
          type="date"
          name="nascimento"
          value={formData.nascimento}
          onChange={handleChange}
        placeholder="Data de Nascimento"
        />
      </div>

      <div className={styles.divisorDeConteudo}>
        <input className={`${styles.telefone} ${styles.padrao}`}
          type="tel"
          name="telefone"
          placeholder="Telefone *"
          required
          value={formData.telefone}
          onChange={handleChange}
        />

        <input className={`${styles.email} ${styles.padrao}`}
          type="email"
          name="email"
          required
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <p>Objetivo *</p>
      {objetivos.map((obj, index) => (
        <label key={index} className={`${styles.objetivos}`}>
          <input
            type="checkbox"
            name="objetivo"
            value={obj}
            onChange={handleChange}
          />
          {obj}
        </label>
      ))}

      <textarea className={`${styles.mensagem} ${styles.padrao}`}
        name="mensagem"
        placeholder="Digite aqui a sua mensagem..."
        value={formData.mensagem}
        onChange={handleChange}
      />
      <div className={styles.buttonBox}>
        <button className={styles.botaoDeEnviar}
          type="submit"
        >
          Entrar na lista de espera
        </button>
      </div>
    </form>
  );
}
