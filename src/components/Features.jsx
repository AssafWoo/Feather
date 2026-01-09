import { 
  Zap, 
  Target, 
  Lock, 
  MessageCircle,
  Sparkles,
  Shield,
  Clock,
  Heart
} from 'lucide-react'

const iconMap = {
  'zap': Zap,
  'target': Target,
  'lock': Lock,
  'message': MessageCircle,
  'sparkles': Sparkles,
  'shield': Shield,
  'clock': Clock,
  'heart': Heart,
}

const gradientColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-teal-500 to-blue-500',
  'from-rose-500 to-pink-500',
  'from-amber-500 to-orange-500',
]

const Features = ({ config }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            {config.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {config.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.items?.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || iconMap['sparkles']
            const gradient = gradientColors[index % gradientColors.length]
            
            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
