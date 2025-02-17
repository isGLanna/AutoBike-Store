/* eslint-disable @typescript-eslint/no-unused-vars */
/*==========================================================================
  DEV: Giordano Lanna
  DATA: 28/01/2025
  ========================================================================== */

import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import background from '@/assets/gallery/main_menu_image.jpg'
import styles from './styles.module.sass'

export function Login() {
  const { t } = useTranslation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>()

  // resposta para entrada de login do usuário
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(email && password ? t('processing...') : t('fill_in_all_fields'))
  }

  // Função principal
  return (
    <div className="login-container h-[400px] pt-[80px]">
      <div className="absolute top-0 h-dvh w-dvw flex">
        <div className="flex-1 bg-red-200">
          <img
            className="flex-1 shrink-1 h-full w-full object-cover"
            src={background}
            alt="bicicleta"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form className={styles.form} onSubmit={handleLogin}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="submit" value="Entrar" />
            <Link to="/create-account">Criar conta</Link>
            <a
              rel="noreferrer noopener"
              href="https://letmegooglethat.com/?q=Como+recuperar+minha+senha"
              target="_blank"
            >
              Esqueci minha senha
            </a>
          </form>
        </div>
      </div>
      {/* 
        <form className="login-form" onSubmit={handleLogin}>
  
            <input
              id="email"
              type="email"
              placeholder={t('ph email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          /> 
  
          <input
            id="password"
            type="password"
            placeholder={t('ph password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button 
            onClick={handleLogin}>
            {t('sign in')}
          </button>
  
          <Link to='/create-account'>
            {t('create account')}
          </Link>
  
          <a 
            href="https://letmegooglethat.com/?q=Como+recuperar+minha+senha" className="forget-password">
            {t('forgot password')}
          </a>
  
        </form>
  
  
        {message && (
          <p className={email && password ? 'response-login-1' : 'response-login-0'}>
            {message}
          </p>
        )} */}
    </div>
  )
}
