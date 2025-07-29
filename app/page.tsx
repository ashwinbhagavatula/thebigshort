"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Link2,
  Copy,
  ExternalLink,
  BarChart3,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface ShortenedUrl {
  id: string
  originalUrl: string
  shortUrl: string
  clicks: number
  createdAt: string
}

export default function URLShortener() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([
    {
      id: "1",
      originalUrl: "https://www.example.com/very-long-url-that-needs-shortening",
      shortUrl: "https://tbg.sh/abc123",
      clicks: 1247,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      originalUrl: "https://github.com/user/repository-name",
      shortUrl: "https://tbg.sh/gh456",
      clicks: 892,
      createdAt: "2024-01-14",
    },
  ])

  const handleShorten = async () => {
    if (!url) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const newUrl: ShortenedUrl = {
        id: Date.now().toString(),
        originalUrl: url,
        shortUrl: `https://tbg.sh/${Math.random().toString(36).substr(2, 6)}`,
        clicks: 0,
        createdAt: new Date().toISOString().split("T")[0],
      }

      setShortenedUrls((prev) => [newUrl, ...prev])
      setUrl("")
      setIsLoading(false)

      toast({
        title: "URL Shortened Successfully!",
        description: "Your shortened URL is ready to use.",
      })
    }, 1000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard!",
      description: "The shortened URL has been copied.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 relative">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/2 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-800/50 bg-black/60 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-transparent to-red-950/10"></div>
        <div className="container mx-auto px-4 py-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-2xl border border-red-400/30 shadow-2xl shadow-red-500/25">
                  <Link2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent tracking-tight">
                  TheBigShort
                </h1>
                <p className="text-sm text-gray-400 font-light">Enterprise URL Shortener</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="border-red-500/40 text-red-400 bg-red-950/20 backdrop-blur-sm px-3 py-1"
              >
                <Zap className="w-4 h-4 mr-2" />
                Redis Powered
              </Badge>
              <Badge
                variant="outline"
                className="border-emerald-500/40 text-emerald-400 bg-emerald-950/20 backdrop-blur-sm px-3 py-1"
              >
                <Shield className="w-4 h-4 mr-2" />
                99.9% Uptime
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"></div>
            <h2 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent mb-6 tracking-tight">
              SHORTEN
              <br />
              <span className="text-5xl md:text-6xl bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                EVERYTHING
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Next-generation URL shortening platform built for scale. Powered by Redis caching, load-balanced
            infrastructure, and enterprise-grade analytics for maximum performance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl blur-xl group-hover:from-red-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-red-400" />
                  <span className="text-4xl font-bold text-white">40%</span>
                </div>
                <p className="text-gray-400 font-medium">Resource Optimization</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl blur-xl group-hover:from-red-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-red-400" />
                  <span className="text-4xl font-bold text-white">10M+</span>
                </div>
                <p className="text-gray-400 font-medium">URLs Shortened</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-2xl blur-xl group-hover:from-emerald-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-emerald-400" />
                  <span className="text-4xl font-bold text-white">{"<"}50ms</span>
                </div>
                <p className="text-gray-400 font-medium">Response Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* URL Shortener Form */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-3xl blur-xl group-hover:from-red-600/10 transition-all duration-500"></div>
            <div className="relative bg-gray-900/60 border border-gray-800/50 rounded-3xl backdrop-blur-xl hover:border-red-500/30 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-xl">
                    <Globe className="w-6 h-6 text-red-400" />
                  </div>
                  Shorten Your URL
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Transform long URLs into powerful, trackable short links
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="https://example.com/your-very-long-url-here"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="h-14 bg-black/40 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 text-lg rounded-xl"
                    />
                  </div>
                  <Button
                    onClick={handleShorten}
                    disabled={!url || isLoading}
                    className="h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 text-lg font-semibold rounded-xl shadow-lg shadow-red-500/25 border border-red-400/30 transition-all duration-300"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Link2 className="w-5 h-5" />
                        Shorten URL
                      </div>
                    )}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Shortened URLs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-red-500/20 rounded-xl">
              <BarChart3 className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Your Shortened URLs</h3>
          </div>

          <div className="space-y-6">
            {shortenedUrls.map((item) => (
              <Card key={item.id} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/60 border border-gray-800/50 rounded-2xl backdrop-blur-xl hover:border-red-500/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
                            <Link2 className="w-5 h-5 text-red-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-xl font-semibold text-red-400 tracking-wide">{item.shortUrl}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(item.shortUrl)}
                                className="text-gray-400 hover:text-red-400 hover:bg-red-950/30 p-2 rounded-lg transition-all duration-200"
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(item.shortUrl, "_blank")}
                                className="text-gray-400 hover:text-red-400 hover:bg-red-950/30 p-2 rounded-lg transition-all duration-200"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-gray-400 truncate text-lg">{item.originalUrl}</p>
                          </div>
                        </div>

                        <Separator className="bg-gray-800/50 mb-6" />

                        <div className="flex items-center gap-8">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
                            <span className="text-gray-300 font-semibold text-lg">
                              {item.clicks.toLocaleString()} clicks
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">Created {item.createdAt}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-emerald-500/40 text-emerald-400 bg-emerald-950/20 px-3 py-1"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Active
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto mt-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Enterprise Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl blur-xl group-hover:from-red-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-red-500/20 rounded-2xl w-fit mx-auto mb-6 border border-red-500/30">
                    <Zap className="w-8 h-8 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Redis Caching</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Lightning-fast response times with optimized Redis caching strategy for maximum performance
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-2xl blur-xl group-hover:from-emerald-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-emerald-500/20 rounded-2xl w-fit mx-auto mb-6 border border-emerald-500/30">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Load Balanced</h4>
                  <p className="text-gray-400 leading-relaxed">
                    NGINX load balancing ensures high availability and seamless scalability for enterprise workloads
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl blur-xl group-hover:from-purple-600/20 transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 border border-gray-800/50 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-purple-500/20 rounded-2xl w-fit mx-auto mb-6 border border-purple-500/30">
                    <BarChart3 className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">REST API</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Comprehensive REST API designed for seamless integration within microservices architecture
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
