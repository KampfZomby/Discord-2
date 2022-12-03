import { Firestore } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import logo from './logo.svg';

function Contact() {
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>

      <section>
      {<ChatRoom />}
      </section>

    </div>
  );
}
  
function ChatRoom() {

  const messageRef = Firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (<>
    <div>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

    </div>

    <div>

    </div>
  </>)

function ChatMessage(props) {
  const { text, uid } = props.message;

  return ( <p>{text}</p> )
}

}

export default Contact;