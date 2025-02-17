import { useState }  from 'react';
import { useTranslation } from 'react-i18next';
import { TopBar } from '../../sub-components/TopBar'
import "../styles/createAccount.sass"

function App() {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>();

  // definir atributos do usuário
  const [ user, setUser] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value
    }));
  }


// resposta para entrada de criação de conta do usuário
  const handleAccountCreation = (e: React.FormEvent) =>{
    e.preventDefault();

  // verifica se retorna algum atributo de user é nulo
    const hasEmptyFields: boolean = Object.values(user).some(value => !value)

    setMessage(
      hasEmptyFields
        ? t('fill_in_all_fields')
        : t('processing...')
    );
  };

  return (
    <main>
      <TopBar />

      <form className="">
        <p>
          {t('Insira seu primeiro nome')}:
        </p> 
        <input
          id="name"
          type="text"
          value={user.name}
          onChange = {handleChange}
          />

        <p> 
          {t('Insira seu sobrenome')}:
        </p>
        <input
          id="surname"
          type="text"
          value={user.surname}
          onChange = {handleChange}
          />

        <p> 
          {t('Nome de usuário')}:
        </p>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange = {handleChange}
          />

        <p> 
          {t('Insira o seu email')}:
        </p>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange = {handleChange}
          />

        <p> 
          {t('Crie uma senha')}:
        </p>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange = {handleChange}
          />

        <p> 
          {t('Confirme sua senha')}:
        </p>
        <input
          id="confirmpassword"
          type="password"
          value={user.confirmpassword}
          onChange = {handleChange}
          />

        <button
          onClick={handleAccountCreation}>
          {t('create account')}
        </button>
      </form>
      
      {message && (
        <p className={user.name ? 'response-login-1' : 'response-login-0'}>
          {message}
        </p>
      )}

<div className='w-[500px] h-[500px]' />
<div className='w-[500px] h-[500px]' />

    </main>
  );
}

export default App;