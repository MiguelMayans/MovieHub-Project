import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const { VITE_AUTH_DOMAIN: domain, VITE_AUTH_CLIENT_ID: clientId, VITE_AUTH_AUDIENCE: audience } = import.meta.env
const redirectUri = window.location.origin + "/homepage"

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri, audience: audience
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>


)
