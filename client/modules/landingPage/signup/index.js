const formTextElements = ['username', 'email', 'password', 'age', 'country', 'city']

export default function SignUp() {
  const authContainer = document.getElementById('auth-container')

  const signinContainer = document.createElement('div')
  signinContainer.className = 'signup'

  const h2El = document.createElement('h2')
  h2El.innerText = 'SignUp'

  const signupForm = document.createElement('form')
  formTextElements.forEach((elText) => {
    const inputElement = document.createElement('input')
    inputElement.placeholder = elText
    signupForm.appendChild(inputElement)
  })

  signinContainer.appendChild(h2El)
  signinContainer.appendChild(signupForm)

  authContainer.appendChild(signinContainer)
}
