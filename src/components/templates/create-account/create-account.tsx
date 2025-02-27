import { Link } from '@tanstack/react-router'
import { useTranslation } from "react-i18next"
import { useState } from 'react'
import styles from '../../molecules/fomulario/styles.module.sass'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export function CreateAccount() {
  const { t } = useTranslation();
  
  const [ user, setUser ] = useState<Record<string,string>> ({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    passwordconfirmation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  // resposta para entrada de conta do usuário
  const handleAccount = (e: React.FormEvent) => {
    e.preventDefault()
  }
  
  return (
    <div className="flex items-center justify-center pt-[50px] relative">
      <Link to='/'>
        <BsFillArrowLeftCircleFill
          size="35px" 
          className="fixed left-[calc(5vw-20px)] top-27 rounded-full transform -translate-y-1/2"
        />
      </Link>
      <form className={styles.form} onSubmit={handleAccount}>
        <h1 style={{ fontSize: '32px', marginBottom: '-25px', marginTop: '-15px', textShadow: '1px 0px 1px black'}}>{t('CreateAccount')}</h1>
        {Object.keys(user).map((key) => (
          <div key={key}>
            <p style={{textAlign: 'center', marginBottom: '8px'}}>{t(key)}</p>
            <input 
              id={key}
              type={key.toLowerCase().includes('password') ? 'password' : 'text'}
              value={user[key]}
              onChange={handleChange}
              style={{marginBottom: '16px'}}
            />
          </div>
        ))}

        <div style={{ display:'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '-15px'}}>
          <label>
            <input type="checkbox" style={{ width: '12px', height: '12px', marginRight: '8px', marginBottom: '5px', accentColor: '#0080AA'}} />
            Concordo em vender meus dados
          </label>
          <label>
            <input type="checkbox" style={{ width: '12px', height: '12px', marginRight: '8px', accentColor: '#0080AA'}} />
            Concordo em receber propaganda
          </label>
        </div>

        <Link to="/">
          <input type="submit" value={t('create')} style={{ fontWeight: 'normal' }}/>
        </Link>
      </form>
    </div>
  )
}
