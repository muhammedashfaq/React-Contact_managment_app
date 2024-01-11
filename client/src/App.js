import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoute from './Routes/AppRoutes';
function App() {
  return (
    <div>

<GoogleOAuthProvider clientId="<your_client_id>">
      <Router>
      <AppRoute/>        
      </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
