import { Link, useNavigate } from '@tanstack/react-router'; // Adicione useNavigate
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import styles from '../../molecules/fomulario/styles.module.sass';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export function CreateAccount() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook para redirecionamento
  const [invalidFields, setInvalidFields] = useState<string[]>([]); // Lista de campos vazios após submit
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const [user, setUser] = useState<Record<string, string>>({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    passwordconfirmation: '',
  });

  const [termsAccepted, setTermsAccepted] = useState({
    sellData: false,
    receiveAds: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setTermsAccepted((prevTerms) => ({
        ...prevTerms,
        [id]: checked,
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [id]: value,
      }));
    }
    setEmptyFields((prevEmptyFields) => prevEmptyFields.filter((field) => field !== id));
  };

  // Resposta para entrada de conta do usuário
  const handleAccount = (e: React.FormEvent) => {
    e.preventDefault();

    // Percorre valores do objeto 'User' para filtrar atributos vazios
    const emptyFields = Object.keys(user).filter((key) => user[key].trim() === '');
    setInvalidFields(emptyFields);

    // Verifica se os termos estão setados
    const terms = termsAccepted.sellData;

    setEmptyFields(emptyFields);

    // Se não houver campos vazios e os termos forem aceitos, redirecione
    if (emptyFields.length === 0 && terms) {
      navigate({ to: '/' }); // Redireciona para a página inicial
    }
  };

  return (
    <div className="flex items-center justify-center pt-[70px] bg-[var(--background-color)] relative overflow-x-hidden text-[17px]">
      <Link to='/'>
        <BsFillArrowLeftCircleFill
          className="w-[35px] h-[35px] fixed left-[calc(5vw-20px)] top-28 rounded-full transform -translate-y-1/2"
        />
      </Link>

      <form className={styles.form} onSubmit={handleAccount}>
        <h1 style={{ fontSize: '32px', marginBottom: '-25px', marginTop: '-15px', textShadow: '1px 0px 1px black' }}>
          {t('CreateAccount')}
        </h1>

        {/* Dados de cadastro do usuário */}
        {Object.keys(user).map((key) => (
          <main key={key}>
            <p style={{ textAlign: 'center', marginBlock: '4px' }}>{t(key)}</p>
            <input
              id={key}
              type={key.includes('password') ? 'password' : 'text'}
              value={user[key]}
              onChange={handleChange}
              /* Adiciona estilo aos inputs não preenchidos */
              style={{
                marginBottom: '16px',
                borderColor: invalidFields.includes(key) ? '#b20' : '',
                borderWidth: invalidFields.includes(key) ? '2px' : '',
              }}
            />
          </main>
        ))}

        {/* Termos de aceite */}
        <div className=' flex flex-col text-[14px] ml-[-45px] accent-[#00608A]'>
          <label>
            <input
              type="checkbox"
              id="sellData"
              checked={termsAccepted.sellData}
              onChange={handleChange}
              style={{ width: '11px', height: '11px', marginRight: '8px', marginBottom: '5px' }}
            />
            Concordo em vender meus dados
          </label>
          <label>
            <input
              type="checkbox"
              id='receiveAds'
              checked={termsAccepted.receiveAds}
              onChange={handleChange}
              style={{ width: '11px', height: '11px', marginRight: '8px'}}
            />
            Aceito receber ofertas (opcional)
          </label>
        </div>

        {/* Botão de submit */}
        <input
          type="submit"
          value={t('create')}
          style={{ cursor: invalidFields.length ? 'not-allowed' : 'pointer',
          }}
        />
      </form>
    </div>
  );
}