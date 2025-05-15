'use client'

import { useEffect } from 'react'
import BlackScreen from './black-screen'
import { useSelector } from 'react-redux';

function BlackScreenLayer() {
  const blackScreenOn = useSelector((state: any) => state.blackScreen.blackScreenOn);

  return blackScreenOn ? <BlackScreen /> : null
}


export default BlackScreenLayer
