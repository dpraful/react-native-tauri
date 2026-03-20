import ReactDOM from 'react-dom'
import App from '../../App'

const rootElement = document.getElementById('root')

console.log('Document ready, root element:', rootElement)

if (rootElement) {
  try {
    if (ReactDOM.createRoot) {
      ReactDOM.createRoot(rootElement).render(<App />)
    } else if (ReactDOM.render) {
      ReactDOM.render(<App />, rootElement)
    } else {
      throw new Error('No render method in ReactDOM')
    }
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
  }
} else {
  console.error('Root element not found')
}