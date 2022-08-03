import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height="100vh"
            projectID="
            3c18deff-b1a5-4d5c-824a-22262a9741dc"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;