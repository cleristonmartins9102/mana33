// app/layout.tsx ou algum arquivo onde você está estruturando seu layout
"use client";

import { useDispatch } from 'react-redux';
import Styles from './page.module.scss';
import MainHeader from '@/app/components/main-header/main-header';
import { useEffect } from 'react';
import i18n from '../i18n'
import axios from 'axios';

const ClientWraper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: false })
  }, [dispatch])  

  return (
    <div className={Styles.wrap}>
      <MainHeader />
    </div>
  );
}

export default ClientWraper