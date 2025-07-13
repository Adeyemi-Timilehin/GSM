import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Users, Cross, ExternalLink, ArrowRight, Star, Shield, Church, MessageCircle, UserPlus, Calendar, MapPin } from 'lucide-react'
import logoImage from './assets/logo.jpg'
import heroImage from './assets/hero-image.jpg'
import communityImage from './assets/community-image.jpg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/ItadtpoJ4ZL7XOUHNPCxML?mode=ac_c', '_blank')
  }

  const handleFillProfile = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScDxGUG5DOhb2aqtYFK-RAu7pjGSx3Uvsna2OQESVUOrR_1Gw/viewform?usp=header', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-red-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Godly Singles Mingle Logo" className="h-12 w-12 rounded-lg object-cover shadow-md" />
              <div>
                <h1 className="text-xl font-bold text-red-800">Godly Singles Mingle</h1>
                <p className="text-xs text-red-600">A Rendezvous with The Unctions</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={handleJoinWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Join WhatsApp
              </Button>
              <Button 
                onClick={handleFillProfile}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Fill Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-rose-600/10 to-pink-600/10"></div>
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <Heart className="h-6 w-6 text-red-400 opacity-60" />
          </div>
          <div className="absolute top-32 right-20 animate-pulse">
            <Heart className="h-4 w-4 text-pink-400 opacity-50" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-bounce delay-1000">
            <Heart className="h-5 w-5 text-rose-400 opacity-40" />
          </div>
          <div className="absolute top-40 right-1/3 animate-pulse delay-500">
            <Heart className="h-3 w-3 text-red-300 opacity-60" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600"> Godly </span>
                  Match
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Join our faith-centered community where Christian singles connect, grow, and build meaningful relationships founded on shared values and divine purpose.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-red-800 font-medium italic">
                    "A Rendezvous with The Unctions - Where hearts meet in faith and love flourishes in Christ."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleJoinWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
                <Button 
                  onClick={handleFillProfile}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Profile
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">150+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Community Support</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={logoImage} 
                  alt="Godly Singles Mingle Community" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
                <Heart className="h-8 w-8 text-red-500 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Cross className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Info Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Physical Meetings</h3>
            <p className="text-xl opacity-90">Join us for in-person fellowship and connection</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <CardTitle className="text-2xl">When</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">Every Second Sunday</p>
                <p className="text-lg">2-6pm NG Time</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <CardTitle className="text-2xl">Where</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">The Truth Arena</p>
                <p className="text-sm">(CAC Praise Chapel)</p>
                <p className="text-sm opacity-90">Line 5, Ogba Layout, Besides Perfumed Garden, Ikeja Garage, Ile-Ife, Osun State</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Godly Singles Mingle?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community is built on Christian values, providing a safe and nurturing environment for meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-red-50 to-rose-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Talk Show</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                  Engaging discussions and conversations to help you connect with like-minded believers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-rose-100 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-rose-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Personality Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                  Comprehensive personality assessments to help you understand yourself and find compatible matches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-red-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-pink-200 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Mindset Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                  Biblical guidance to align your mindset with God's purpose for relationships and marriage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-red-50 to-rose-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                  <Church className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Q&A Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                  Interactive sessions to address your questions about faith, relationships, and godly courtship.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 via-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Christian fellowship and community gathering" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                <Heart className="h-6 w-6 text-red-500 fill-current" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">Join Our Growing Community</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the joy of connecting with like-minded believers who are seeking meaningful relationships. 
                Our community provides a safe space for Christian singles to meet, share their faith journey, and 
                potentially find their life partner through divine guidance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">Prayer support and spiritual guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">Regular fellowship events and activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">Biblical relationship counseling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">Safe and moderated environment</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleJoinWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp
                </Button>
                <Button 
                  onClick={handleFillProfile}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Heart className="h-16 w-16 fill-current" />
          </div>
          <div className="absolute top-20 right-20">
            <Heart className="h-12 w-12 fill-current" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Heart className="h-20 w-20 fill-current" />
          </div>
          <div className="absolute bottom-10 right-1/3">
            <Heart className="h-14 w-14 fill-current" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl lg:text-5xl font-bold">Ready to Find Your Godly Match?</h3>
            <p className="text-xl opacity-90 leading-relaxed">
              Take the first step towards a meaningful relationship rooted in faith. 
              Join our community today and discover the blessing of godly companionship through divine connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleJoinWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Group
              </Button>
              <Button 
                onClick={handleFillProfile}
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Fill Your Profile
              </Button>
            </div>
            
            <p className="text-sm opacity-75 italic">
              "Delight yourself in the Lord, and he will give you the desires of your heart." - Psalm 37:4
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <img src={logoImage} alt="Godly Singles Mingle" className="h-10 w-10 rounded-lg object-cover" />
              <div>
                <span className="text-xl font-semibold">Godly Singles Mingle</span>
                <p className="text-sm text-gray-400">A Rendezvous with The Unctions</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building meaningful relationships through faith, fellowship, and divine guidance. 
              Join our community of Christian singles seeking godly companionship and eternal love.
            </p>
            <div className="flex justify-center space-x-6">
              <Button 
                onClick={handleJoinWhatsApp}
                variant="ghost"
                className="text-green-400 hover:text-green-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button 
                onClick={handleFillProfile}
                variant="ghost"
                className="text-red-400 hover:text-red-300"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Profile Form
              </Button>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                © 2025 Godly Singles Mingle. Built with love, faith, and divine inspiration.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

