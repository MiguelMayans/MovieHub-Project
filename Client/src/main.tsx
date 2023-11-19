import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserContextProvider } from './context/userContext.tsx'

const { VITE_AUTH_DOMAIN: domain, VITE_AUTH_CLIENT_ID: clientId, VITE_AUTH_AUDIENCE: audience } = import.meta.env
const redirectUri = window.location.origin + "/homepage"

ReactDOM.createRoot(document.getElementById('root')!).render(

  <UserContextProvider>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri, audience: audience
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </UserContextProvider>

)
