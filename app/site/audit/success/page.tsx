import Link from 'next/link';

export default function AuditSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-xl shadow-lg">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <svg 
              className="h-12 w-12 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Audit Scheduled!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for booking a 15-minute technical audit. You should receive a confirmation email from Calendly with the meeting details shortly.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Return to Homepage
          </Link>
          <p className="text-sm text-gray-500">
            Need to reschedule? Check your confirmation email for a direct link.
          </p>
        </div>
      </div>
    </div>
  );
}