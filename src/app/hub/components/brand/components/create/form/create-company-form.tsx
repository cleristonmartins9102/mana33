import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../../../../../../i18n'
import { apiGetCountryStatesFactory } from "@/app/main/factories/features/api-get-country-states-factory";
import { StateModel } from "@/app/data/models/state-model";
import { apiGetCitiesOfStateFactory } from "@/app/main/factories/features/api-get-cities-of-state-factory";
import { Input } from "../../../../../../components/input/input"
import { BuildValidator } from "@cleriston.marina/validator";
import { FormField } from "@/app/data/features/form/form-field";
import { useDispatch } from "react-redux";
import { FormGroup } from "@/app/data/features/form/form-group";
import { Select } from "@/app/components/select/select";
import { apiGetGeolocationByZipcodeFactory } from "@/app/main/factories/features/api-get-geolocation-by-zipcode-factory.";
import { apiGetAddressAutocompleteFactory } from "@/app/main/factories/features/api-get-address-autocomplete.ts";


const form: any = new FormGroup({
  fullName: new FormField([BuildValidator.force.int() as any]),
  shortName: new FormField([BuildValidator.string().min(5) as any]),
  phone: new FormField([BuildValidator.string().min(5) as any]),
  email: new FormField([BuildValidator.email() as any]),
  address: new FormField([BuildValidator.string().min(5) as any]),
  number: new FormField([BuildValidator.string().min(1) as any]),
  zipCode: new FormField([BuildValidator.string().min(9).max(9) as any]),
  district: new FormField([BuildValidator.string().min(5) as any]),
  city: new FormField([BuildValidator.string().min(2) as any]),
  state: new FormField([BuildValidator.string().min(2) as any]),
  country: new FormField([BuildValidator.string().min(5) as any]),
  registrationNumber: new FormField([BuildValidator.string().min(5) as any]),
})

export const CreateCompanyForm: React.FC = () => {
  const { t } = useTranslation('common')
  const [states, setStates] = useState<StateModel[]>()
  const [cities, setCities] = useState<string[]>()
  const cepElement = useRef<any>(null)
  i18n
  const allStates = [
                  { legend: 'Test', id: '1' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' },
                  { legend: 'Test2', id: '2' }
                ]
  const selectState = (e: ChangeEvent<HTMLSelectElement>) => {
    const apiGetCitiesOfState = apiGetCitiesOfStateFactory()
    apiGetCitiesOfState.get('Brazil', e.target.value).then((data) => {
      setCities(data)
    })
  }

  useEffect(() => {
    form.start()
    return () => {
      form.destroy()
    }
  }, [])

  useEffect(() => {
    const apiGetCountryStates = apiGetCountryStatesFactory()
    apiGetCountryStates.get('Brazil').then((data) => {
      setStates(data)
    })

  }, [])

  const cepValidator = (e: any) => {
    e.target.value = e.target.value.replace(/[^\d-]/g, '').slice(0, 9)
    if (e.target.value.length === 5 && e.inputType !== 'deleteContentBackward') {
      e.target.value = `${e.target.value}-`
    }
  }



  const dispatch = useDispatch()
  const actionCreator = (payload: any) => {
    return { type: 'ADD_CREATE_COMPANY_FORM', payload }
  }

  useEffect(() => {
    form.zipCode.subscribe((v: any) => {
      getAddress(v)
    })
  }, [])

  const getAddress = async (zipCode: string) => {
    const api = apiGetAddressAutocompleteFactory()
    const values = await api.get(zipCode)
    console.log(values)
  }

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className="space-y-4 pl-8 pr-8 pt-10">
        <h1 className="text-gray-700 pb-8 font-bold text-2xl">{t('register_company_legend')}</h1>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            {t('business_registered_name')}
            <span className="text-red-500">*</span>
          </label>
          <Input fieldControll={form.fullName} />
        </div>
        <div className='flex gap-6 w-full'>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('business_trading_name')}
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.shortName} />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('register_number')}
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.registrationNumber} />
          </div>
        </div>
        <div className="flex gap-6 w-full">
          <div className='w-full'>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('phone')}
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.phone} />
          </div>
          <div className='w-full'>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.email} />
          </div>
        </div>
        <div className='flex gap-6 w-full'>
           <div className="w-full">
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                {t('zipCode')}
                <span className="text-red-500">*</span>
              </label>
              <Select data={allStates}/>
            </div>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('address')}
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.address} />
          </div>
        </div>
        <div className='flex gap-6 w-full'>
          <div className="flex gap-6 w-full">
                    <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('number')}
              <span className="text-red-500">*</span>
            </label>
            <Input fieldControll={form.number} />
          </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                {t('district')}
                <span className="text-red-500">*</span>
              </label>
              <Input fieldControll={form.district} />
            </div>
          </div>
          <div className="w-full">
            <div className='flex gap-6 w-full'>
              <div className="w-full">
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  {t('state')}
                  <span className="text-red-500">*</span>
                </label>
                <Select data={allStates}/>
                {/* <select name="" id="" onChange={selectState} className="w-full border border-gray-300 rounded-md h-10.5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700">
                  {states?.map((state, i) => <option value={state.name} key={i}>{state.name}</option>)}
                </select> */}
              </div>
              <div className="w-full">
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  {t('city')}
                  <span className="text-red-500">*</span>
                </label>
                <select name="" id="" className="w-full border border-gray-300 rounded-md h-10.5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700">
                  {cities?.map((city, i) => <option value={cities} key={i}>{city}</option>)}
                </select>
              </div>
            </div>

          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
        >
          {t('create')}
        </button>
      </div>
    </div>
  )
}