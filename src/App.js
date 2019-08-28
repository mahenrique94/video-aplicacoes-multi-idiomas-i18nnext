import React, { useState } from 'react'
import { i18n } from './translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

const App = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location
  }
  return (
    <>
      <h1>{i18n.t('titles.app', {
        name: 'OUTRO'
      })}</h1>
      <p>{i18n.t('messages.itWorks')}</p>
      <button>{i18n.t('buttons.save')}</button><br/><br/>
      <small>{i18n.t('messages.smallText')}</small><br/><br/>
      <select onChange={handleSelectChange} value={language}>
        <option>Selecione um idioma</option>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
      </select>
    </>
  )
}

export default App
