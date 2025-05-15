// components/main-header/main-header.tsx
"use client"; // Certifica-se de que o componente é tratado como Client Component

import Link from 'next/link'; // Importação do Link do Next.js
import Styles from './main-header.module.scss';
import { useRouter } from 'next/navigation';
import { connect } from 'react-redux';

const MainHeader = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };

  return (
    <div className={Styles.wrap}>
      <div className={Styles.wrap_logo}></div>
      <div className={Styles.wrap_menu}>
          <a className={Styles.btn}>Login</a>
        <button onClick={handleClick} className={Styles.btn}>
          Experimentar
        </button>
      </div>
    </div>
  );
};

export default MainHeader
