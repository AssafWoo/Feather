import { useState } from 'react'
import { trackWaitlistSubmit } from './GoogleTagManager'

const EmailSignup = ({ config, onSubmit, source = 'unknown' }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    // Call the onSubmit handler if provided
    if (onSubmit) {
      try {
        await onSubmit(email)
        setSubmitted(true)
        setEmail('')
        setError('')
        // Track conversion - fires only on successful submission
        trackWaitlistSubmit(source)
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      } finally {
        setIsLoading(false)
      }
    } else if (config.apiEndpoint) {
      // If API endpoint is configured, send to that endpoint
      try {
        // Use the endpoint as-is if it's a full URL, otherwise ensure it starts with /
        const endpoint = config.apiEndpoint.startsWith('http://') || config.apiEndpoint.startsWith('https://')
          ? config.apiEndpoint
          : config.apiEndpoint.startsWith('/')
          ? config.apiEndpoint
          : `/${config.apiEndpoint}`
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
        
        // Handle different error status codes
        if (!response.ok) {
          if (response.status === 405) {
            throw new Error('Method not allowed. Please check the API endpoint configuration.')
          } else if (response.status === 404) {
            throw new Error('API endpoint not found. Please verify the route is correct.')
          } else if (response.status >= 500) {
            throw new Error('Server error. Please try again later.')
          } else {
            // Try to get error message from response (Worker returns { error: string } for 400)
            let errorMessage = 'Failed to submit email'
            try {
              const errorData = await response.json()
              errorMessage = errorData.error || errorData.message || errorMessage
            } catch {
              // If response is not JSON, try to get text
              try {
                const text = await response.text()
                errorMessage = text || errorMessage
              } catch {
                errorMessage = `Failed to submit email (${response.status})`
              }
            }
            throw new Error(errorMessage)
          }
        }

        const data = await response.json()
        
        // Check for { ok: true } response (Cloudflare Worker format)
        if (data.ok === true) {
          setSubmitted(true)
          setEmail('')
          setError('')
          // Track conversion - fires only on successful submission
          trackWaitlistSubmit(source)
        } else {
          throw new Error('Unexpected response from server')
        }
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      } finally {
        setIsLoading(false)
      }
    } else {
      // Default behavior - just show success message (for development)
      setSubmitted(true)
      setEmail('')
      setError('')
      setIsLoading(false)
      // Track conversion - fires only on successful submission
      trackWaitlistSubmit(source)
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
          disabled={isLoading}
          className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-normal hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : (config.buttonText || "Join Waitlist")}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </form>
  )
}

export default EmailSignup
