'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Gift, CreditCard, Check, Copy } from 'lucide-react'

export default function GiftSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [copied, setCopied] = useState(false)

  const suggestedAmounts = [50, 100, 200, 500, 1000]

  // Bank account details (replace with actual details)
  const bankDetails = {
    accountName: 'Fagbamila Bankole James',
    accountNumber: '2004860350',
    bankName: 'Globus',
    routingNumber: '987654321',
  }

 
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePayment = () => {
    const amount = selectedAmount || parseFloat(customAmount)
    if (!amount || amount <= 0) return

    // Here you would integrate with a payment gateway like Stripe, PayPal, or Paystack
    alert(`Payment integration would process $${amount} here. Connect to Stripe, PayPal, or Paystack.`)
  }

  return (
    <section id="gift" className="py-24 px-4 bg-deep-black text-soft-white">
      <div className="max-w-4xl mx-auto">
       
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Gift className="w-16 h-16 mx-auto mb-6 opacity-70" />
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Send Your Love
          </h2>
          <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, 
            we would be grateful for contributions toward our future together.
          </p>
        </motion.div> */}

        
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal p-8 md:p-12 rounded-sm mb-12"
        >
          <h3 className="font-display text-3xl mb-8 text-center">Choose Your Gift Amount</h3>

        
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {suggestedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount('')
                }}
                className={`p-4 rounded-sm font-sans font-medium transition-all ${
                  selectedAmount === amount
                    ? 'bg-soft-white text-deep-black scale-105'
                    : 'bg-deep-black hover:bg-soft-white hover:text-deep-black'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block font-sans text-sm mb-2 opacity-70">
              Or Enter Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                placeholder="0.00"
                className="w-full pl-12 pr-4 py-4 bg-deep-black text-soft-white rounded-sm font-sans text-xl border-2 border-transparent focus:border-soft-white outline-none transition-colors"
              />
            </div>
          </div>

        
          <button
            onClick={handlePayment}
            disabled={!selectedAmount && !customAmount}
            className="w-full py-4 bg-soft-white text-deep-black rounded-sm font-sans font-medium text-lg hover:bg-pearl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 btn-primary"
          >
            <CreditCard size={20} />
            Send Gift with Card
          </button>

          <p className="text-center font-sans text-sm mt-4 opacity-50">
            Secure payment powered by Stripe
          </p>
        </motion.div> */}

        {/* Bank Transfer Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-charcoal p-8 md:p-12 rounded-sm"
        >
          <h3 className="font-display text-3xl mb-6 text-center">Bank Transfer</h3>
          <p className="font-sans text-center mb-8 opacity-70">
            Prefer to send a bank transfer? Use the details below:
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex justify-between items-center p-4 bg-deep-black rounded-sm">
              <div>
                <p className="font-sans text-sm opacity-70 mb-1">Account Name</p>
                <p className="font-sans font-medium">{bankDetails.accountName}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountName)}
                className="p-2 hover:bg-soft-white/10 rounded transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-deep-black rounded-sm">
              <div>
                <p className="font-sans text-sm opacity-70 mb-1">Account Number</p>
                <p className="font-sans font-medium">{bankDetails.accountNumber}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountNumber)}
                className="p-2 hover:bg-soft-white/10 rounded transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-deep-black rounded-sm">
              <div>
                <p className="font-sans text-sm opacity-70 mb-1">Bank Name</p>
                <p className="font-sans font-medium">{bankDetails.bankName}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.bankName)}
                className="p-2 hover:bg-soft-white/10 rounded transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* <div className="flex justify-between items-center p-4 bg-deep-black rounded-sm">
              <div>
                <p className="font-sans text-sm opacity-70 mb-1">Routing Number</p>
                <p className="font-sans font-medium">{bankDetails.routingNumber}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.routingNumber)}
                className="p-2 hover:bg-soft-white/10 rounded transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div> */}
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Heart className="w-12 h-12 mx-auto mb-4 fill-soft-white/20 text-soft-white/20 animate-pulse-slow" />
          <p className="font-elegant text-2xl italic opacity-70">
            Thank you for celebrating with us and for your generous gift
          </p>
        </motion.div>
      </div>
    </section>
  )
}
