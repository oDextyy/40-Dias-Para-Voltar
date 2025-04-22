"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Linkedin, Search, Upload, CheckCircle, AlertTriangle } from "lucide-react"

export function ProfileAssessment({ onComplete }) {
  const [assessmentMethod, setAssessmentMethod] = useState("manual")
  const [profileUrl, setProfileUrl] = useState("")
  const [isAssessing, setIsAssessing] = useState(false)
  const [formData, setFormData] = useState({
    connections: 50,
    posts: 0,
    completeness: 50,
    experience: "",
    skills: "",
    headline: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSliderChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value[0],
    })
  }

  const handleAssessment = () => {
    setIsAssessing(true)

    // Simulate assessment process
    setTimeout(() => {
      setIsAssessing(false)

      // Generate assessment results
      const profileData = {
        ...formData,
        score: Math.floor(Math.random() * 30) + 40, // Random score between 40-70
        weaknesses: [
          "Profile visibility is limited",
          "Headline lacks optimization",
          "Connection network is underdeveloped",
          "Content engagement is minimal",
          "Skills section needs enhancement",
        ],
        strengths: ["Basic profile structure is in place", "Some professional experience listed"],
        eligibilityScore: Math.floor(Math.random() * 20) + 75, // Random score between 75-95
      }

      onComplete(profileData)
    }, 3000)
  }

  return (
    <Card className="max-w-3xl mx-auto bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Linkedin className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">LinkedIn Premium Eligibility Check</CardTitle>
        </div>
        <CardDescription className="text-blue-100">
          Let's assess your LinkedIn profile to determine your eligibility for permanent LinkedIn Premium access
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex gap-4 mb-6">
            <Button
              variant={assessmentMethod === "url" ? "default" : "outline"}
              onClick={() => setAssessmentMethod("url")}
              className="flex-1"
            >
              <Search className="mr-2 h-4 w-4" />
              Analyze by URL
            </Button>
            <Button
              variant={assessmentMethod === "manual" ? "default" : "outline"}
              onClick={() => setAssessmentMethod("manual")}
              className="flex-1"
            >
              <Upload className="mr-2 h-4 w-4" />
              Manual Assessment
            </Button>
          </div>

          {assessmentMethod === "url" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profileUrl">Your LinkedIn Profile URL</Label>
                <Input
                  id="profileUrl"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    For privacy and security reasons, we recommend using the manual assessment option. URL analysis
                    requires granting profile access permissions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {assessmentMethod === "manual" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="headline">Your LinkedIn Headline</Label>
                <Input
                  id="headline"
                  name="headline"
                  placeholder="e.g., Senior Software Engineer at Company"
                  value={formData.headline}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Number of Connections</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    defaultValue={[formData.connections]}
                    max={500}
                    step={10}
                    onValueChange={(value) => handleSliderChange("connections", value)}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{formData.connections}+</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Profile Completeness</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    defaultValue={[formData.completeness]}
                    max={100}
                    step={5}
                    onValueChange={(value) => handleSliderChange("completeness", value)}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{formData.completeness}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Monthly Posts/Activity</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    defaultValue={[formData.posts]}
                    max={20}
                    step={1}
                    onValueChange={(value) => handleSliderChange("posts", value)}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{formData.posts}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Brief Description of Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="Briefly describe your work experience..."
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills (comma separated)</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  placeholder="e.g., Project Management, Leadership, Marketing..."
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">Your data is used only for assessment purposes</div>
        <Button
          onClick={handleAssessment}
          disabled={isAssessing}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {isAssessing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2"
              >
                <Search className="h-4 w-4" />
              </motion.div>
              Analyzing...
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Check Eligibility
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
