import WelcomeWidget from "./WelcomeWidget";
    export default function Home(props){
        return(
            <>
                <h1>Your at home!</h1>
                <WelcomeWidget email={props.email} />  
            </>
        );
    }