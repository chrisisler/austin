import { h, Component } from 'preact'
import './App.css'

const Landing = () => (
    <div class='intro-wrap'>
        <div class='intro-text'>
            <h1 id='title'>Austin PeKarna</h1>
            <div class='line'/>
            <p class='subtitle'>Bassist</p>
            <p class='subtitle'>Engineer</p>
            <p class='subtitle'>Producer</p>
        </div>
        <img id='down' alt='down' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEJklEQVR4Xu3cwWrUUBQG4HMT69atoNAufIBOk0IXCt25UUEFBdGFurEv4cKX0I26UAQFFdSNO0EXQpO2D+CiBQW3bq3JlcgMDmOSezNJ7vw3/t1Okjlzvvz3npl2qoQ/UB1QUNWwGCEI2E1AEIKAdQCsHCaEIGAdACuHCSEIWAfAymFCCALWAbBymBCCgHUArBwmhCBgHQArhwkhCFgHwMphQggC1gGwcpgQgoB1AKwcJoQgYB0AK4cJIQhYB8DKsUpIkiTH4jj+AVa7V+XY9tAIkqbpqTzPPyql7sVxfN+rLoAUmyTJltb6bhAEZ6Io+lJXVi3Izs7OcpZln5VSx8cX2Yrj+AHI6/SijCRJ7ojInxtZa/09DMONtbW1g6riK0HGGJ+UUidnTiaK5a0wjTE5RWv9NQzD01UopSB7e3snDg8Pi2TMYkyuSxQDShnGNMrS0tLG6urqt9nLlIIU6cjz/IOIrNQ8L1EqmlOHMT5lPwiCzbKU1C5ZRLFcm6YOa4NRXMa4qZtQlFK3oih63Lz04Z2RpulNrfWjmldWmYzJOcax12L50kqp2/87yhjjYc1NbsQwJmSiRpT6NHeFYQ1SHEiUcpQuMRqBEOVfkK4xGoMQ5S9KHxhzgRBFpC+MuUFsUUTkehzHz4Y04CZJck1Enradpqp6Yhx765ppsdHnInJjKChjjCciElT0xWq0retpKxDLpAwCxQVGqyVrWnnoSXGF0RnIkJPiEqNTkCGiuMboHMQWRWt9ZX19/SXy9LW9vX1ZKfWizw287PW33tTLLmraU7TWmYhcRUUpMETkuVIq7Gua6mXsbTMSo6IsEqOXJavJ9IWGsmiM3kFs9hQUFAQMJyA+oKBgOANBRkHCcApiixIEwcUoit66GInTND2f5/nrRUxTzqesqie0GIl/BUFwqW+UMcYrpdQR16Ntrx8uznMnLxoFFcP5ktVwJO4lKcgYCwWx3FM6RUHHWDiISxQfMCBAXKD4ggED0gDlXBRF75sMEmmans3z/B3aNAUz9rb5QFJEfiqlLtiiFBha6zcichRptIUbe12g+IgBtWQ1GYlNSfEVAxbEZk+pQvEZAxpkHhTfMeBBmqAUx/q2gZftpb38Tr3JWGpz7O7u7kqWZcV3Hpdtji855iAMw83RaLQ/5/nOTvMCxDIpVU1r/eedzjRM3zF0WYjNc5k+JS65hlcYXuwhs01ugOIdhpcglsuXlxjeghhQvMXwGqQCxWsM70FmUKTq31XYDAwox3gz9tY1rHifUjzuw/sME/wgQEwv0qfHCQKmRRCCgHUArBwmhCBgHQArhwkhCFgHwMphQggC1gGwcpgQgoB1AKwcJoQgYB0AK4cJIQhYB8DKYUIIAtYBsHKYEIKAdQCsHCaEIGAdACuHCSEIWAfAymFCwEB+AxamF5IWmhuBAAAAAElFTkSuQmCC"/>
    </div>
)

export default class App extends Component {
    render() {
        return (
            <div id='app'>
                <Landing />
                <div id='rest'>
                    <p class='words'>
                        Both teacher and student, this young audio professional
                        has already learned industry secrets and best practices
                        at the prestigious Berklee College of Music.
                    </p>
                    <p class='words'>
                        Work in progress.
                    </p>
                </div>
            </div>
        )
    }
}
