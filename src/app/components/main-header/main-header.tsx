// components/main-header/main-header.tsx
"use client"; // Certifica-se de que o componente é tratado como Client Component

import Styles from './main-header.module.scss';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from '../language/language-switch';

const MainHeader = () => {
  const router = useRouter();
  const { t } = useTranslation('common')
  const handleClickLogin = () => {
    router.push('/login');
  };
  const handleClickSigup= () => {
    router.push('/signup');
  };

  return (
    <div className={Styles.wrap}>
      <div className={Styles.wrap_logo}></div>
      <div className={Styles.wrap_menu}>
        <LanguageSwitcher />
        <a onClick={handleClickLogin} className={Styles.btn}>{t('login_button')}</a>
        <button onClick={handleClickSigup} className={Styles.btn}>
          {t('try_now')}
        </button>
      </div>
    </div>
  );
};

export default MainHeader
