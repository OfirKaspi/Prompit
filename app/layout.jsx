import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: 'Prompit',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <Provider>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <div className="app">
                        <Nav />
                        {children}
                    </div>
                </body>
            </Provider>
        </html>
    )
}

export default RootLayout