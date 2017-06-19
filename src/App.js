import { h, Component } from 'preact'
import './App.css'

const Social = (props) => (
    <div class='Social' onClick={() => window.open(props.link)}>
        {props.text}
    </div>
)

export default class App extends Component {
    render() {
        return (
            <div class='App container'>
                <div class='bio-wrap col-xs-9'>
                    <h1>Austin PeKarna</h1>
                    <p class='bio'>
                        Senior bassist and sound engineer at Berklee College of Music.
                    </p>
                </div>
                <div class='col-xs-3'>
                    <img src='../assets/austin-main-2.jpg' class='bio-pic img-responsive img-circle' alt=''/>
                    <Social text='Facebook' link='https://www.facebook.com/austin.pekarna' />
                </div>
            </div>
        )
    }
}
