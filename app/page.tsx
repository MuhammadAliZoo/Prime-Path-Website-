"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "../public/images/components/ui/button"
import { Input } from "../public/images/components/ui/input"
import { Textarea } from "../public/images/components/ui/textarea"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Globe,
  Recycle,
  Lightbulb,
  Handshake,
  Rocket,
  FlaskConical,
  Heart,
  Zap,
  Flame,
  Instagram,
  Facebook,
  Twitter,
  Download,
  Target,
  Award,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react"
import { db } from "./firebaseConfig"
import { collection, addDoc, Timestamp } from "firebase/firestore"

export default function PrimePathExport() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  // Contact form state
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [product, setProduct] = useState("")
  const [quantity, setQuantity] = useState("")
  const [message, setMessage] = useState("")
  const [contactMethod, setContactMethod] = useState("")
  const [loading, setLoading] = useState(false)
  const [countryCode, setCountryCode] = useState("+234")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedCertificate === "dropdown") {
        const target = event.target as Element
        if (!target.closest(".relative")) {
          setSelectedCertificate(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedCertificate])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const products = [
    {
      name: "Hardwood Charcoal",
      image: "/images/hardwood-charcoal.png",
      description: "Sustainable hardwood charcoal. Long-lasting burn, low ash, ideal for BBQ and industrial use.",
    },
    {
      name: "Mangrove Charcoal",
      image: "/images/mangrove-charcoal.png",
      description: "High-carbon charcoal with excellent burning properties. Perfect for metallurgy and filtration.",
    },
    {
      name: "Dried Hibiscus Flower (Zobo)",
      image: "/images/hibiscus-flower.png",
      description: "Sun-dried petals for tea, cosmetics, health and refreshing beverages in general. Vibrant and chemical-free.",
    },
    {
      name: "Dried Chilli Pepper",
      image: "/images/dried-chilli.png",
      description: "Heat-packed Nigerian chili with authentic flavor. Available in different grades.",
    },
    {
      name: "Soya Beans",
      image: "/images/soya-beans.png",
      description: "High-protein, Non-GMO soybeans. Great for tofu, oil extraction and processing.",
    },
    {
      name: "Ginger",
      image: "/images/ginger.png",
      description: "Aromatic, potent Nigerian ginger. Popular for food ,beverages, pharma, and cosmetics.",
    },
  ]

  const founders = [
    { name: "Hassan Malah", title: "CEO, Director" },
    { name: "Muhammad Zoaka", title: "COO, Director" },
    { name: "Aliyu Bamalli", title: "CBDO, Director" },
  ]

  const whyChooseUs = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Zero Legacy Baggage",
      description: "No outdated practices—more innovation",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Quality Control",
      description: "Exceptional quality and attention to detail",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "You're Not Just Another Account",
      description: "We value long-term relationships",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Decisions and Reliability",
      description: "Swift, dependable execution",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Hungry for Your Success",
      description: "Your satisfaction is our best marketing",
    },
  ]

  const certificates = [
    {
      id: "nepc",
      name: "NEPC Exporter Registration Certificate",
      previewImage: "/images/certificate-preview-nepc.png",
      pdfUrl: "/certificates/nepc-certificate.pdf",
    },
    {
      id: "cac",
      name: "CAC Certificate of Incorporation",
      previewImage: "/images/certificate-preview-cac.png",
      pdfUrl: "/certificates/cac-certificate.pdf",
    },
  ]

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Add this handler for the contact form
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        name,
        company,
        country,
        email,
        phone: countryCode + phone,
        product,
        quantity,
        message,
        contactMethod,
        createdAt: Timestamp.now(),
      })
      alert("Message sent successfully!")
      setName("")
      setCompany("")
      setCountry("")
      setEmail("")
      setPhone("")
      setProduct("")
      setQuantity("")
      setMessage("")
      setContactMethod("")
    } catch (error: any) {
      alert("Error sending message: " + error.message)
    }
    setLoading(false)
  }

  // List of all countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ]

  // List of all country codes with flags
  const countryCodes = [
    { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
    { code: "+355", name: "Albania", flag: "🇦🇱" },
    { code: "+213", name: "Algeria", flag: "🇩🇿" },
    { code: "+1-684", name: "American Samoa", flag: "🇦🇸" },
    { code: "+376", name: "Andorra", flag: "🇦🇩" },
    { code: "+244", name: "Angola", flag: "🇦🇴" },
    { code: "+1-264", name: "Anguilla", flag: "🇦🇮" },
    { code: "+672", name: "Antarctica", flag: "🇦🇶" },
    { code: "+1-268", name: "Antigua and Barbuda", flag: "🇦🇬" },
    { code: "+54", name: "Argentina", flag: "🇦🇷" },
    { code: "+374", name: "Armenia", flag: "🇦🇲" },
    { code: "+297", name: "Aruba", flag: "🇦🇼" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+43", name: "Austria", flag: "🇦🇹" },
    { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
    { code: "+1-242", name: "Bahamas", flag: "🇧🇸" },
    { code: "+973", name: "Bahrain", flag: "🇧🇭" },
    { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
    { code: "+1-246", name: "Barbados", flag: "🇧🇧" },
    { code: "+375", name: "Belarus", flag: "🇧🇾" },
    { code: "+32", name: "Belgium", flag: "🇧🇪" },
    { code: "+501", name: "Belize", flag: "🇧🇿" },
    { code: "+229", name: "Benin", flag: "🇧🇯" },
    { code: "+1-441", name: "Bermuda", flag: "🇧🇲" },
    { code: "+975", name: "Bhutan", flag: "🇧🇹" },
    { code: "+591", name: "Bolivia", flag: "🇧🇴" },
    { code: "+387", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { code: "+267", name: "Botswana", flag: "🇧🇼" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+246", name: "British Indian Ocean Territory", flag: "🇮🇴" },
    { code: "+1-284", name: "British Virgin Islands", flag: "🇻🇬" },
    { code: "+673", name: "Brunei", flag: "🇧🇳" },
    { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
    { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { code: "+257", name: "Burundi", flag: "🇧🇮" },
    { code: "+855", name: "Cambodia", flag: "🇰🇭" },
    { code: "+237", name: "Cameroon", flag: "🇨🇲" },
    { code: "+1", name: "Canada", flag: "🇨🇦" },
    { code: "+238", name: "Cape Verde", flag: "🇨🇻" },
    { code: "+1-345", name: "Cayman Islands", flag: "🇰🇾" },
    { code: "+236", name: "Central African Republic", flag: "🇨🇫" },
    { code: "+235", name: "Chad", flag: "🇹🇩" },
    { code: "+56", name: "Chile", flag: "🇨🇱" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+61", name: "Christmas Island", flag: "🇨🇽" },
    { code: "+61", name: "Cocos Islands", flag: "🇨🇨" },
    { code: "+57", name: "Colombia", flag: "🇨🇴" },
    { code: "+269", name: "Comoros", flag: "🇰🇲" },
    { code: "+682", name: "Cook Islands", flag: "🇨🇰" },
    { code: "+506", name: "Costa Rica", flag: "🇨🇷" },
    { code: "+385", name: "Croatia", flag: "🇭🇷" },
    { code: "+53", name: "Cuba", flag: "🇨🇺" },
    { code: "+599", name: "Curacao", flag: "🇨🇼" },
    { code: "+357", name: "Cyprus", flag: "🇨🇾" },
    { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
    { code: "+243", name: "Democratic Republic of the Congo", flag: "🇨🇩" },
    { code: "+45", name: "Denmark", flag: "🇩🇰" },
    { code: "+253", name: "Djibouti", flag: "🇩🇯" },
    { code: "+1-767", name: "Dominica", flag: "🇩🇲" },
    { code: "+1-809", name: "Dominican Republic", flag: "🇩🇴" },
    { code: "+670", name: "East Timor", flag: "🇹🇱" },
    { code: "+593", name: "Ecuador", flag: "🇪🇨" },
    { code: "+20", name: "Egypt", flag: "🇪🇬" },
    { code: "+503", name: "El Salvador", flag: "🇸🇻" },
    { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
    { code: "+291", name: "Eritrea", flag: "🇪🇷" },
    { code: "+372", name: "Estonia", flag: "🇪🇪" },
    { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
    { code: "+500", name: "Falkland Islands", flag: "🇫🇰" },
    { code: "+298", name: "Faroe Islands", flag: "🇫🇴" },
    { code: "+679", name: "Fiji", flag: "🇫🇯" },
    { code: "+358", name: "Finland", flag: "🇫🇮" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+594", name: "French Guiana", flag: "🇬🇾" },
    { code: "+689", name: "French Polynesia", flag: "🇵🇫" },
    { code: "+241", name: "Gabon", flag: "🇬🇦" },
    { code: "+220", name: "Gambia", flag: "🇬🇲" },
    { code: "+995", name: "Georgia", flag: "🇬🇪" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+233", name: "Ghana", flag: "🇬🇭" },
    { code: "+350", name: "Gibraltar", flag: "🇬🇮" },
    { code: "+30", name: "Greece", flag: "🇬🇷" },
    { code: "+299", name: "Greenland", flag: "🇬🇱" },
    { code: "+1-473", name: "Grenada", flag: "🇬🇩" },
    { code: "+590", name: "Guadeloupe", flag: "🇬🇵" },
    { code: "+1-671", name: "Guam", flag: "🇬🇼" },
    { code: "+502", name: "Guatemala", flag: "🇬🇹" },
    { code: "+224", name: "Guinea", flag: "🇬🇳" },
    { code: "+245", name: "Guinea-Bissau", flag: "🇬🇼" },
    { code: "+592", name: "Guyana", flag: "🇬🇾" },
    { code: "+509", name: "Haiti", flag: "🇭🇹" },
    { code: "+504", name: "Honduras", flag: "🇭🇳" },
    { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
    { code: "+36", name: "Hungary", flag: "🇭🇺" },
    { code: "+354", name: "Iceland", flag: "🇮🇸" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+62", name: "Indonesia", flag: "🇮🇩" },
    { code: "+98", name: "Iran", flag: "🇮🇷" },
    { code: "+964", name: "Iraq", flag: "🇮🇶" },
    { code: "+353", name: "Ireland", flag: "🇮🇪" },
    { code: "+972", name: "Israel", flag: "🇮🇱" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+225", name: "Ivory Coast", flag: "🇨🇮" },
    { code: "+1-876", name: "Jamaica", flag: "🇯🇲" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+962", name: "Jordan", flag: "🇯🇴" },
    { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+686", name: "Kiribati", flag: "🇰🇮" },
    { code: "+383", name: "Kosovo", flag: "🇽🇰" },
    { code: "+965", name: "Kuwait", flag: "🇰🇼" },
    { code: "+996", name: "Kyrgyzstan", flag: "🇰🇾" },
    { code: "+856", name: "Laos", flag: "🇱🇦" },
    { code: "+371", name: "Latvia", flag: "🇱🇻" },
    { code: "+961", name: "Lebanon", flag: "🇱🇧" },
    { code: "+266", name: "Lesotho", flag: "🇱🇸" },
    { code: "+231", name: "Liberia", flag: "🇱🇷" },
    { code: "+218", name: "Libya", flag: "🇱🇾" },
    { code: "+423", name: "Liechtenstein", flag: "🇱🇮" },
    { code: "+370", name: "Lithuania", flag: "🇱🇹" },
    { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
    { code: "+853", name: "Macau", flag: "🇲🇴" },
    { code: "+389", name: "Macedonia", flag: "🇲🇰" },
    { code: "+261", name: "Madagascar", flag: "🇲🇬" },
    { code: "+265", name: "Malawi", flag: "🇲🇼" },
    { code: "+60", name: "Malaysia", flag: "🇲🇾" },
    { code: "+960", name: "Maldives", flag: "🇲🇻" },
    { code: "+223", name: "Mali", flag: "🇲🇱" },
    { code: "+356", name: "Malta", flag: "🇲🇹" },
    { code: "+692", name: "Marshall Islands", flag: "🇲🇭" },
    { code: "+596", name: "Martinique", flag: "🇲🇶" },
    { code: "+222", name: "Mauritania", flag: "🇲🇷" },
    { code: "+230", name: "Mauritius", flag: "🇲🇺" },
    { code: "+262", name: "Mayotte", flag: "🇾🇹" },
    { code: "+52", name: "Mexico", flag: "🇲🇽" },
    { code: "+691", name: "Micronesia", flag: "🇫🇲" },
    { code: "+373", name: "Moldova", flag: "🇲🇩" },
    { code: "+377", name: "Monaco", flag: "🇲🇨" },
    { code: "+976", name: "Mongolia", flag: "🇲🇳" },
    { code: "+382", name: "Montenegro", flag: "🇲🇪" },
    { code: "+1-664", name: "Montserrat", flag: "🇲🇸" },
    { code: "+212", name: "Morocco", flag: "🇲🇷" },
    { code: "+258", name: "Mozambique", flag: "🇲🇿" },
    { code: "+95", name: "Myanmar", flag: "🇲🇲" },
    { code: "+264", name: "Namibia", flag: "🇳🇦" },
    { code: "+674", name: "Nauru", flag: "🇳🇷" },
    { code: "+977", name: "Nepal", flag: "🇳🇵" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+599", name: "Netherlands Antilles", flag: "🇳🇱" },
    { code: "+687", name: "New Caledonia", flag: "🇳🇨" },
    { code: "+64", name: "New Zealand", flag: "🇳🇿" },
    { code: "+505", name: "Nicaragua", flag: "🇳🇮" },
    { code: "+227", name: "Niger", flag: "🇳🇪" },
    { code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { code: "+683", name: "Niue", flag: "🇳🇺" },
    { code: "+672", name: "Norfolk Island", flag: "🇳🇫" },
    { code: "+850", name: "North Korea", flag: "🇰🇵" },
    { code: "+1-670", name: "Northern Mariana Islands", flag: "🇲🇵" },
    { code: "+47", name: "Norway", flag: "🇳🇴" },
    { code: "+968", name: "Oman", flag: "🇴🇲" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { code: "+680", name: "Palau", flag: "🇵🇼" },
    { code: "+970", name: "Palestine", flag: "🇵🇸" },
    { code: "+507", name: "Panama", flag: "🇵🇳" },
    { code: "+675", name: "Papua New Guinea", flag: "🇵🇬" },
    { code: "+595", name: "Paraguay", flag: "🇵🇾" },
    { code: "+51", name: "Peru", flag: "🇵🇪" },
    { code: "+63", name: "Philippines", flag: "🇵🇭" },
    { code: "+48", name: "Poland", flag: "🇵🇱" },
    { code: "+351", name: "Portugal", flag: "🇵🇹" },
    { code: "+1-787", name: "Puerto Rico", flag: "🇵🇷" },
    { code: "+974", name: "Qatar", flag: "🇶🇦" },
    { code: "+242", name: "Republic of the Congo", flag: "🇨🇬" },
    { code: "+262", name: "Reunion", flag: "🇷🇪" },
    { code: "+40", name: "Romania", flag: "🇷🇴" },
    { code: "+7", name: "Russia", flag: "🇷🇺" },
    { code: "+250", name: "Rwanda", flag: "🇷🇼" },
    { code: "+590", name: "Saint Barthelemy", flag: "🇧🇱" },
    { code: "+290", name: "Saint Helena", flag: "🇱🇸" },
    { code: "+1-869", name: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-758", name: "Saint Lucia", flag: "🇱🇨" },
    { code: "+590", name: "Saint Martin", flag: "🇲🇶" },
    { code: "+508", name: "Saint Pierre and Miquelon", flag: "🇵🇲" },
    { code: "+1-784", name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+685", name: "Samoa", flag: "🇼🇸" },
    { code: "+378", name: "San Marino", flag: "🇸🇲" },
    { code: "+239", name: "Sao Tome and Principe", flag: "🇸🇹" },
    { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+221", name: "Senegal", flag: "🇸🇳" },
    { code: "+381", name: "Serbia", flag: "🇷🇸" },
    { code: "+248", name: "Seychelles", flag: "🇸🇨" },
    { code: "+232", name: "Sierra Leone", flag: "🇸🇱" },
    { code: "+65", name: "Singapore", flag: "🇸🇬" },
    { code: "+1-721", name: "Sint Maarten", flag: "🇸🇽" },
    { code: "+421", name: "Slovakia", flag: "🇸🇰" },
    { code: "+386", name: "Slovenia", flag: "🇸🇮" },
    { code: "+677", name: "Solomon Islands", flag: "🇼🇸" },
    { code: "+252", name: "Somalia", flag: "🇸🇴" },
    { code: "+27", name: "South Africa", flag: "🇿🇦" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+211", name: "South Sudan", flag: "🇸🇸" },
    { code: "+34", name: "Spain", flag: "🇪🇸" },
    { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
    { code: "+249", name: "Sudan", flag: "🇸🇩" },
    { code: "+597", name: "Suriname", flag: "🇸🇷" },
    { code: "+47", name: "Svalbard and Jan Mayen", flag: "🇳🇴" },
    { code: "+268", name: "Swaziland", flag: "🇱🇸" },
    { code: "+46", name: "Sweden", flag: "🇸🇪" },
    { code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { code: "+963", name: "Syria", flag: "🇸🇾" },
    { code: "+886", name: "Taiwan", flag: "🇹🇼" },
    { code: "+992", name: "Tajikistan", flag: "🇹🇯" },
    { code: "+255", name: "Tanzania", flag: "🇹🇿" },
    { code: "+66", name: "Thailand", flag: "🇹🇭" },
    { code: "+228", name: "Togo", flag: "🇹🇬" },
    { code: "+690", name: "Tokelau", flag: "🇹🇰" },
    { code: "+676", name: "Tonga", flag: "🇹🇴" },
    { code: "+1-868", name: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+216", name: "Tunisia", flag: "🇹🇳" },
    { code: "+90", name: "Turkey", flag: "🇹🇷" },
    { code: "+993", name: "Turkmenistan", flag: "🇹🇲" },
    { code: "+1-649", name: "Turks and Caicos Islands", flag: "🇹🇨" },
    { code: "+688", name: "Tuvalu", flag: "🇹🇻" },
    { code: "+256", name: "Uganda", flag: "🇺🇬" },
    { code: "+380", name: "Ukraine", flag: "🇺🇦" },
    { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+598", name: "Uruguay", flag: "🇺🇾" },
    { code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
    { code: "+678", name: "Vanuatu", flag: "🇻🇺" },
    { code: "+58", name: "Venezuela", flag: "🇻🇪" },
    { code: "+84", name: "Vietnam", flag: "🇻🇳" },
    { code: "+1-284", name: "Virgin Islands, British", flag: "🇻🇬" },
    { code: "+1-340", name: "Virgin Islands, U.S.", flag: "🇻🇮" },
    { code: "+681", name: "Wallis and Futuna", flag: "🇼🇫" },
    { code: "+212", name: "Western Sahara", flag: "🇪🇭" },
    { code: "+967", name: "Yemen", flag: "🇾🇪" },
    { code: "+260", name: "Zambia", flag: "🇿🇲" },
    { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden relative">
      {/* Animated SVG Bubble Background */}
      <svg className="bubble-bg" width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="bubble" cx="200" cy="800" r="60" fill="#60a5fa" />
        <circle className="bubble" cx="600" cy="900" r="40" fill="#a5b4fc" />
        <circle className="bubble" cx="1000" cy="850" r="70" fill="#38bdf8" />
        <circle className="bubble" cx="300" cy="950" r="30" fill="#818cf8" />
        <circle className="bubble" cx="1200" cy="950" r="50" fill="#7dd3fc" />
        <circle className="bubble" cx="800" cy="950" r="35" fill="#bae6fd" />
      </svg>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#4A6BAF] border-b border-slate-300/20 shadow-[0_2px_12px_0_rgba(44,97,166,0.07)] backdrop-blur-md ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 relative" style={{minHeight: '4rem'}}>
          <div className="flex items-center h-16">
            <Image
              src="/images/prime-path-logo.png"
              alt="Prime Path Export"
              width={380}
              height={140}
              className="h-28 w-auto brightness-200 contrast-150"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-16 space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="hover:text-blue-400 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("why-us")} className="hover:text-blue-400 transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection("certifications")} className="hover:text-blue-400 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 ml-auto">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-blue-400"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left py-2 hover:text-blue-400"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block w-full text-left py-2 hover:text-blue-400"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="block w-full text-left py-2 hover:text-blue-400"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-blue-400"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/videos/cargo-ship.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            FROM NATURE TO YOUR HANDS
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-blue-300 drop-shadow-md leading-snug">
            EXCELLENCE IN EVERY SHIPMENT!
          </h2>
          <div className="text-base xs:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200 flex flex-wrap items-center justify-center gap-2 sm:space-x-4 drop-shadow-md">
            <span className="bg-slate-900/30 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">EFFICIENT</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="bg-slate-900/30 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">RELIABLE</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="bg-slate-900/30 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">SOLUTIONS</span>
          </div>
          <p className="text-base xs:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl sm:max-w-4xl mx-auto text-slate-100 leading-relaxed drop-shadow-md bg-slate-900/20 backdrop-blur-sm rounded-lg p-4 sm:p-6">
            Premium Nigerian Exports to Global Markets. Connecting Nigeria's finest products to international buyers worldwide. From source to your doorstep, we deliver quality Nigerian goods with uncompromising reliability and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-2xl mx-auto">
            <Button
              onClick={() => scrollToSection("products")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Our Products
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-900/20 shadow-2xl"
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Rooted in Excellence, Growing Global Trust
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-12 lg:grid-cols-2 mb-10 sm:mb-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">OUR MISSION</h3>
              </div>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                To bless every corner of the globe with the fruits of nature that Nigeria has to provide of the highest quality, while fostering sustainable trade that benefits local suppliers, communities, and international partners.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">OUR GOALS</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center bg-white/5 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base">Quality Assurance</span>
                </div>
                <div className="flex items-center bg-white/5 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Globe className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base">Global Reach</span>
                </div>
                <div className="flex items-center bg-white/5 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Leaf className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base">Sustainable Trading</span>
                </div>
                <div className="flex items-center bg-white/5 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base">Innovation and Leadership</span>
                </div>
                <div className="flex items-center bg-white/5 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base">Partnership Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-3xl font-semibold mb-6 sm:mb-8 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-blue-400 mr-3" />
              MEET THE FOUNDERS
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 justify-center">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-lg p-4 sm:p-6 text-center hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-lg sm:text-2xl font-bold">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{founder.name}</h4>
                <p className="text-blue-400 text-sm sm:text-base">{founder.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-10 sm:py-20 bg-slate-900/50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Your Strategic Partner for Export
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-lg p-4 sm:p-8 text-center hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-blue-400 mb-2 sm:mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              OUR PRODUCTS
            </h2>
          </div>

          <div className="overflow-x-auto pb-2 sm:pb-4">
            <div className="flex space-x-3 sm:space-x-6 min-w-max">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-lg p-4 sm:p-6 w-64 sm:w-80 flex-shrink-0 shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 group bg-white/5 p-2 sm:p-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={220}
                      height={220}
                      className="w-full h-32 sm:h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Make Enquiries
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Certification Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/nepc-logo.png"
                  alt="NEPC Certification"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">NEPC</h3>
              <p className="text-sm text-slate-400 text-center">Export Certification</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/halal-logo.png"
                  alt="Halal Certification"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">Halal</h3>
              <p className="text-sm text-slate-400 text-center">Product Certification</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/naccima-logo.png"
                  alt="NACCIMA Membership"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">NACCIMA</h3>
              <p className="text-sm text-slate-400 text-center">Chamber Membership</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/cac-logo.png"
                  alt="CAC Registration"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">CAC</h3>
              <p className="text-sm text-slate-400 text-center">Corporate Registration</p>
            </div>
          </div>

          {/* Download Certificates Section */}
          <div className="text-center">
            <div className="relative inline-block">
              <Button
                onClick={() => setSelectedCertificate(selectedCertificate ? null : "dropdown")}
                className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
              >
                <Download className="w-5 h-5 mb-1" />
                <span>Download Certificates</span>
              </Button>

              {/* Dropdown Menu */}
              {selectedCertificate === "dropdown" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4 text-center">Select Certificate to Download</h3>
                    <div className="space-y-3">
                      {certificates.map((cert) => (
                        <button
                          key={cert.id}
                          onClick={() => {
                            handleDownload(cert.pdfUrl, `${cert.id}-certificate.pdf`)
                            setSelectedCertificate(null)
                          }}
                          className="w-full flex items-center justify-between p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
                        >
                          <div>
                            <div className="font-medium">{cert.name}</div>
                            <div className="text-sm text-slate-400">PDF Document</div>
                          </div>
                          <Download className="w-4 h-4 text-blue-400" />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="w-full mt-4 p-2 text-slate-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Certificate Modal for Viewing */}
          {selectedCertificate && selectedCertificate !== "dropdown" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                  <h2 className="text-xl font-semibold text-white">
                    {certificates.find((c) => c.id === selectedCertificate)?.name || ''}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCertificate(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src={certificates.find((c) => c.id === selectedCertificate)?.previewImage || "/placeholder.svg"}
                      alt={certificates.find((c) => c.id === selectedCertificate)?.name || ''}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-md mb-4"
                    />
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white transition-all duration-300"
                      onClick={() => {
                        const cert = certificates.find((c) => c.id === selectedCertificate)
                        if (cert) {
                          handleDownload(cert.pdfUrl, `${cert.id}-certificate.pdf`)
                        }
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="text-center text-slate-300 max-w-4xl mx-auto leading-relaxed mt-12">
            This section provides information about our certifications and export compliance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-20 bg-gradient-to-br from-[#1a2240] via-[#232f5c] to-[#2C3A64] relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CONTACT US
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Contact Form */}
            <div className="glassmorphism-card border-2 border-blue-500/40 shadow-xl rounded-3xl p-4 sm:p-10 flex flex-col justify-center">
              <form className="space-y-6 sm:space-y-8" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Full Name *</label>
                    <Input value={name} onChange={e => setName(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white rounded-xl" required />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Company Name</label>
                    <Input value={company} onChange={e => setCompany(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white rounded-xl" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Country</label>
                    <select value={country} onChange={e => setCountry(e.target.value)} className="w-full bg-slate-700/40 border border-blue-500/30 text-white rounded-xl px-3 py-2 appearance-none text-xs sm:text-base focus:outline-none">
                      <option value="">Select a Country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email Address *</label>
                    <Input type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white rounded-xl" required />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Phone Number</label>
                    <div className="flex">
                      <select value={countryCode} onChange={e => setCountryCode(e.target.value)} className="bg-slate-700/40 border border-blue-500/30 text-white rounded-l-xl px-2 py-2 focus:outline-none appearance-none text-xs sm:text-base">
                        {countryCodes.map((c) => (
                          <option key={c.code + c.name} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <Input value={phone} onChange={e => setPhone(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white rounded-r-xl flex-1" placeholder="Phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Product of Interest</label>
                    <select value={product} onChange={e => setProduct(e.target.value)} className="w-full bg-slate-700/40 border border-blue-500/30 text-white rounded-xl px-3 py-2 appearance-none text-xs sm:text-base focus:outline-none">
                      <option value="">Select a Product</option>
                      {products.map((product) => (
                        <option key={product.name} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Order Quantity</label>
                  <Input value={quantity} onChange={e => setQuantity(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white rounded-xl" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Message *</label>
                  <Textarea value={message} onChange={e => setMessage(e.target.value)} className="bg-slate-700/40 border-blue-500/30 text-white h-24 sm:h-32 rounded-xl" required />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Preferred Contact Method</label>
                  <select value={contactMethod} onChange={e => setContactMethod(e.target.value)} className="w-full bg-slate-700/40 border border-blue-500/30 text-white rounded-xl px-3 py-2 appearance-none text-xs sm:text-base focus:outline-none">
                    <option value="">Select Contact Method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
              <div className="glassmorphism-card border-2 border-blue-400/40 shadow-xl rounded-3xl p-4 sm:p-10">
                <h3 className="text-base sm:text-xl font-semibold mb-4 sm:mb-6 text-blue-200">BUSINESS HOURS</h3>
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <span className="text-sm sm:text-lg">Mon–Fri: 8am–7pm GMT</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <span className="text-sm sm:text-lg">Sat 9am–3pm GMT</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    <span className="text-sm sm:text-lg">24/7 WhatsApp Support</span>
                  </div>
                </div>
              </div>
              <div className="glassmorphism-card border-2 border-blue-400/40 shadow-xl rounded-3xl p-4 sm:p-10">
                <h3 className="text-base sm:text-xl font-semibold mb-4 sm:mb-6 text-blue-200">CONTACT INFORMATION</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    <span className="text-sm sm:text-lg">+234 810 040 4900</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    <a href="https://wa.me/2349126629289" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-80 transition-opacity text-sm sm:text-lg">+234 912 662 9289 (WhatsApp)</a>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    <a href="mailto:primepathexport@gmail.com" className="underline text-white hover:opacity-80 transition-opacity text-sm sm:text-lg">primepathexport@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mt-1" />
                    <a href="https://maps.app.goo.gl/xybrjRG6DwBifHQ59?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-80 transition-opacity text-sm sm:text-lg">698, PLOT 698, CAD ZONE, AMAC, ABUJA, FCT, Nigeria</a>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={() => window.open('https://wa.me/2349126629289', '_blank', 'noopener,noreferrer')}
              >
                <MessageCircle className="w-5 h-5 mb-1" />
                <span>WhatsApp Us Now</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A6BAF] py-16 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Image
                  src="/images/prime-path-logo.png"
                  alt="Prime Path Export"
                  width={380}
                  height={140}
                  className="h-28 w-auto brightness-200 contrast-150"
                />
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Connecting Nigeria's finest products to international buyers worldwide.
              </p>
              <p className="text-slate-400 text-sm mb-4">
                We are committed to delivering high-quality, sustainable products that meet the needs of our customers and contribute to a healthier environment.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                <MessageCircle className="w-5 h-5 text-slate-400 hover:text-green-400 cursor-pointer transition-colors duration-300" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("about")} className="block text-slate-300 hover:text-white">
                  About Us
                </button>
                <button onClick={() => scrollToSection("products")} className="block text-slate-300 hover:text-white">
                  Our Products
                </button>
                <button onClick={() => scrollToSection("why-us")} className="block text-slate-300 hover:text-white">
                  Why Choose Us
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="block text-slate-300 hover:text-white"
                >
                  Certifications
                </button>
                <button onClick={() => scrollToSection("contact")} className="block text-slate-300 hover:text-white">
                  Contact
                </button>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">OUR PRODUCTS</h4>
              <div className="space-y-2">
                {products.slice(0, 6).map((product) => (
                  <div key={product.name} className="text-slate-300 hover:text-white cursor-pointer text-sm">
                    {product.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Summary */}
            <div>
              <h4 className="text-lg font-semibold mb-4">CONTACT INFO</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:primepathexport@gmail.com" className="underline text-white hover:opacity-80 transition-opacity">primepathexport@gmail.com</a>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-2" />
                  +234 810 040 4900
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <a href="https://maps.app.goo.gl/xybrjRG6DwBifHQ59?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-80 transition-opacity text-sm sm:text-lg">Abuja, FCT, Nigeria</a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div className="border-t border-slate-700 pt-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="text-sm text-slate-400">
                <p>CAC Registration</p>
                <p>RC: 8113816</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <button className="hover:text-white mr-4">Privacy Policy</button>
                <button className="hover:text-white">Terms of Service</button>
              </div>
            </div>
            <div className="text-center text-slate-400 text-sm">
              Copyright © 2025 Prime Path Export. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
