"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Define the data structure
interface FooterData {
  logo: {
    src: string
    alt: string
  }
  description: string
  categories: {
    title: string
    links: {
      label: string
      href: string
    }[]
  }[]
  contact: {
    address: string
    phone: string
    email: string
  }
  social: {
    facebook: string
    twitter: string
    instagram: string
    youtube: string
    linkedin: string
  }
  quickLinks: {
    label: string
    href: string
  }[]
  copyright: string
}

export default function Footer({ data }: { data: FooterData }) {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Show success message or handle API call
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className=" border-t border-gray-200 font-bangla bg-background text-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src={data.logo.src || "/placeholder.svg"} alt={data.logo.alt} className="h-12 w-auto" />
            </Link>
            <p className=" text-sm">{data.description}</p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4 text-red-500">
              <a
                href={data.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <Facebook className="w-4 h-4 group-hover:text-white" />
              </a>
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <Twitter className="w-4 h-4  group-hover:text-white" />
              </a>
              <a
                href={data.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <Instagram className="w-4 h-4  group-hover:text-white" />
              </a>
              <a
                href={data.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <Youtube className="w-4 h-4  group-hover:text-white" />
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <Linkedin className="w-4 h-4  group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Categories - First Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold  after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1">
              {data.categories[0].title}
            </h3>
            <ul className="space-y-2">
              {data.categories[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className=" hover:text-red-500 transition-colors duration-300 text-sm inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories - Second Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold  after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1">
              {data.categories[1].title}
            </h3>
            <ul className="space-y-2">
              {data.categories[1].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className=" hover:text-red-500 transition-colors duration-300 text-sm inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold  after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1 mb-4">
                নিউজলেটার
              </h3>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল দিন"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <Button type="submit" className="bg-red-500 hover:bg-red-600  w-full">
                  সাবস্ক্রাইব করুন
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-lg font-semibold  after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1 mb-4">
                যোগাযোগ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className=" text-sm">{data.contact.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a href={`tel:${data.contact.phone}`} className=" hover:text-red-500 text-sm">
                    {data.contact.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a href={`mailto:${data.contact.email}`} className=" hover:text-red-500 text-sm">
                    {data.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm  mb-4 md:mb-0">{data.copyright}</div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {data.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm  hover:text-red-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-red-500  rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
