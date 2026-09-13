import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Send, AlertCircle, Loader2, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'theghostedwriter.27@gmail.com';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Inquiry for The Ghosted Writer from ${formState.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Primary backend service attempt via Web3Forms / FormSubmit AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Inquiry from ${formState.name}`
        })
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto link if backend requires initial manual email confirmation
        setStatus('error');
        setErrorMessage(data.message || 'Server requires direct mail client authorization.');
      }
    } catch (err) {
      console.error('Form delivery error:', err);
      setStatus('error');
      setErrorMessage('Network connection offline or blocked by browser extensions.');
    }
  };

  return (
    <footer id="contact" className="py-24 bg-charcoal-800 text-cream-100 border-t border-charcoal-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-charcoal-100/20">
          
          {/* Column 1: Wordmark & Direct Inquiry Form */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="/logo.jpg"
                  alt="The Ghosted Writer Logo"
                  className="w-10 h-10 rounded-full object-cover border border-cream-100/30 shrink-0"
                />
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-cream-100">
                  The Ghosted Writer
                </h3>
              </div>
              <p className="text-xs uppercase tracking-widest text-cream-300/60 font-medium">
                LinkedIn & Executive Ghostwriting
              </p>
              <p className="font-serif italic text-base text-cream-200/80 font-light mt-2">
                "You'll never see me. Just the words."
              </p>
            </div>

            {/* Form & Mailto Dual Delivery */}
            <div className="pt-4 space-y-4">
              <p className="text-xs uppercase tracking-widest text-ochre font-medium">
                Send a Direct Message
              </p>

              {status === 'success' ? (
                <div className="p-4 bg-forest/30 border border-forest/50 rounded-sm text-xs text-cream-100 space-y-2">
                  <div className="flex items-center space-x-2 text-forest-light font-semibold">
                    <Check className="w-4 h-4" />
                    <span>Message Dispatched Successfully</span>
                  </div>
                  <p className="text-cream-200/90 font-light">
                    Thank you! Your inquiry has been sent directly to <span className="underline">{email}</span>. You will receive a response within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs underline text-ochre hover:text-cream-100 pt-1 block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-charcoal-900/60 border border-charcoal-100/30 px-3.5 py-2 text-xs text-cream-100 rounded-sm focus:outline-none focus:border-ochre placeholder:text-cream-300/40"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-charcoal-900/60 border border-charcoal-100/30 px-3.5 py-2 text-xs text-cream-100 rounded-sm focus:outline-none focus:border-ochre placeholder:text-cream-300/40"
                    />
                  </div>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can I help turn your ideas into a memorable voice?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-charcoal-900/60 border border-charcoal-100/30 px-3.5 py-2 text-xs text-cream-100 rounded-sm focus:outline-none focus:border-ochre placeholder:text-cream-300/40 resize-none"
                  />

                  {status === 'error' && (
                    <div className="p-3 bg-charcoal-900 border border-ochre/40 rounded text-xs text-cream-200 space-y-2">
                      <div className="flex items-center space-x-2 text-ochre">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center space-x-1.5 bg-ochre text-charcoal-900 px-3 py-1.5 rounded font-semibold text-xs hover:bg-ochre-light transition-colors"
                      >
                        <span>Click to Open Mail Client Directly</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 pt-1">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-forest text-cream-100 px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-forest-light transition-all flex items-center space-x-2 disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getMailtoUrl()}
                      className="text-xs uppercase tracking-widest text-cream-200/70 hover:text-cream-100 underline decoration-cream-100/30 underline-offset-4"
                    >
                      Or open in Mail client
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Direct Contact Email details */}
          <div className="md:col-span-6 space-y-6 md:text-right">
            <p className="text-xs uppercase tracking-mega text-ochre font-medium">
              Direct Contact Details
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="font-serif text-xl sm:text-2xl text-cream-100 hover:text-ochre transition-colors block underline decoration-cream-100/30 underline-offset-4"
              >
                {email}
              </a>

              <div className="flex items-center md:justify-end space-x-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-cream-200/70 hover:text-cream-100 px-3 py-1.5 rounded border border-cream-100/20 hover:border-cream-100/40 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-forest-light" />
                      <span className="text-forest-light">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Inquiry%20for%20The%20Ghosted%20Writer`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-cream-200/70 hover:text-cream-100 px-3 py-1.5 rounded border border-cream-100/20 hover:border-cream-100/40 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Footer Credits — Tagline "Minimal • Editorial • Calm" removed entirely */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/40 space-y-4 sm:space-y-0 font-light">
          <p>© {new Date().getFullYear()} The Ghosted Writer. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
