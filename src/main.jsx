import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Helmet } from 'react-helmet';

createRoot(document.getElementById('root')).render(
    <>
    <Helmet>
      <title>Xbox and Playstation Game Library</title>
      <meta name="description" content="Explore Common Xbox and Playstation games" />
      <link rel="icon" href="/xb-ps.jpg" type="image/svg+xml" />
    </Helmet>
    <App />
  </>
)
