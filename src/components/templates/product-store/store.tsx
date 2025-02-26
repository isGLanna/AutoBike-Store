import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export function ProductStore() {
  const { t } = useTranslation()

  const [ user, setUser ] = useState<Record<string,string>> ({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  return(
    <div>
      <form>
        {Object.keys(user).map((key) => (
          <input 
            key={key}
            id={key}
            type={key.toLowerCase().includes('password') ? 'password' : 'text'}
            value={user[key]}
            onChange={handleChange}
            placeholder={t(`form.${key}`)}
          />
        ))}
      </form>
    </div>
  )
}
