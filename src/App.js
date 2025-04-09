import './App.css';
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Feed from "./component/Feed/Feed";
import Widgets from "./component/Widgets/Widgets";
import Login from "./component/Login/Login"
import {useStateValue} from "./StateProvider";


function App() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="App">
            {!user ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className="app_body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
