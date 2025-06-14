"use client"

import React from "react"
import { useState } from "react"
import { Button } from "../../public/images/components/ui/button"
import Image from "next/image"
import { Download, X } from "lucide-react"

interface Certificate {
  id: string
  name: string
  previewImage: string
  pdfUrl: string
}

export default function CertificateViewer() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
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

  const handleOpenCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate)
  }

  const handleCloseCertificate = () => {
    setSelectedCertificate(null)
  }

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col items-center">
            <div
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer w-full"
              onClick={() => handleOpenCertificate(cert)}
            >
              <Image
                src={cert.previewImage || "/placeholder.svg"}
                alt={cert.name}
                width={400}
                height={300}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                onClick={() => handleOpenCertificate(cert)}
              >
                View {cert.id.toUpperCase()}
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white transition-all duration-300"
                onClick={() => handleDownload(cert.pdfUrl, `${cert.id}-certificate.pdf`)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-semibold text-white">{selectedCertificate.name}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseCertificate}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={selectedCertificate.previewImage || "/placeholder.svg"}
                  alt={selectedCertificate.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-md mb-4"
                />
                <Button
                  className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white transition-all duration-300"
                  onClick={() =>
                    handleDownload(selectedCertificate.pdfUrl, `${selectedCertificate.id}-certificate.pdf`)
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
