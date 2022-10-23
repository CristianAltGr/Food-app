
import Provider from "./aplication/provider";
import Router from "./aplication/Routes";
import GlobalStyle from "./styles/GlobalStyle";


//faltara provider si se usa context o redux?
const App = () => {

    return (

        <Provider>
            <GlobalStyle />
            <Router />
        </Provider>


    )

}


export default App;
