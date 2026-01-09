import { useState } from 'react'

const EmailSignup = ({ config, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    // Call the onSubmit handler if provided
    if (onSubmit) {
      try {
        await onSubmit(email)
        setSubmitted(true)
        setEmail('')
        setError('')
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      }
    } else if (config.apiEndpoint) {
      // If API endpoint is configured, send to that endpoint
      try {
        const response = await fetch(config.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
        
        if (!response.ok) {
          throw new Error('Failed to submit email')
        }
        
        setSubmitted(true)
        setEmail('')
        setError('')
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      }
    } else {
      // Default behavior - just show success message (for development)
      console.log('Email submitted:', email)
      setSubmitted(true)
      setEmail('')
      setError('')
    }
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
          <p className="text-sm text-green-800 font-medium">
            {config.successMessage || "Thanks! We'll be in touch soon."}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          placeholder={config.placeholder || "Enter your email"}
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-normal hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg"
        >
          {config.buttonText || "Join Waitlist"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </form>
  )
}

export default EmailSignup
