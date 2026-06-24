import { useState } from 'react';

export default function PrestigeStrideMembership() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSubscription, setActiveSubscription] = useState(null);
  const [waitlistMessage, setWaitlistMessage] = useState('');
  const plans = [
    {
      name: 'STRIDE BASIC',
      subtitle: 'Elegant Entry Access',
      description:
        'For gentlemen beginning their luxury journey with Prestige Stride.',
      price: 'FREE',
      features: [
        'Early product notifications',
        'Fashion tips newsletter',
        'Birthday discounts',
        'Access to style journal',
        'Reward points system',
      ],
      button: 'Join Basic',
      style: 'basic',
    },
    {
      name: 'EXECUTIVE CIRCLE™',
      subtitle: 'Premium Society Membership',
      description:
        'Reserved for ambitious executives who desire exclusivity, prestige, and priority access.',
      price: '₦8,000/MONTH',
      features: [
        '10–15% luxury discounts',
        'Early access to limited drops',
        'Members-only collections',
        'Priority nationwide delivery',
        'VIP WhatsApp community',
        'Free yearly polishing kit',
        'Luxury leather care guide',
        'Birthday gifts',
      ],
      button: 'Enter Executive Circle',
      style: 'executive',
    },
    {
      name: 'CHAIRMAN BLACK™',
      subtitle: 'Ultra Elite Membership',
      description:
        'An ultra-exclusive luxury experience crafted for leaders, founders, and high-value gentlemen.',
      price: 'LIMITED ACCESS',
      badge: 'ONLY 100 MEMBERS NATIONWIDE',
      features: [
        'Custom handcrafted shoe yearly',
        'Private collection access',
        'Luxury concierge support',
        'Signature engraving',
        'Personal style advisor',
        'Exclusive luxury events',
        'VIP packaging experience',
        'Business networking access',
      ],
      button: 'Request Invitation',
      style: 'chairman',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F1E8] overflow-hidden relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C8A96B]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-3xl rounded-full" />

      {/* Hero Section */}
      <section className="relative px-6 md:px-14 pt-10 pb-20 border-b border-white/5">
        {/* Top Navigation */}
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-20">
          <div>
            <h2 className="text-2xl font-serif tracking-wide text-[#F5F1E8]">
              PRESTIGE STRIDE
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  alert('Please subscribe to a Prestige Stride membership plan to access your luxury member dashboard.');
                }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white/10"
              >
                Log In
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-[#C8A96B]/20 bg-[#C8A96B]/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  {activeSubscription}
                </div>

                <button
                  onClick={() => {
                    window.location.href = '/membership/dashboard';
                  }}
                  className="rounded-full bg-[#C8A96B] px-6 py-3 text-xs uppercase tracking-[0.25em] text-black transition hover:shadow-[0_0_20px_rgba(200,169,107,0.35)]"
                >
                  Enter Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <p className="tracking-[0.4em] uppercase text-[#C8A96B] text-xs md:text-sm mb-5">
            Prestige Stride Society™
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight max-w-5xl mx-auto">
            Membership Designed For Gentlemen Of Prestige
          </h1>

          <p className="mt-8 text-[#d9d1c2]/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Prestige Stride Society™ is a private luxury experience designed
            for modern gentlemen who value craftsmanship, exclusivity,
            executive elegance, and timeless prestige.
          </p>

          {/* Hero Showcase */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl h-[520px] group">
              <img
                src="/shoe26.jpg"
alt="shoe"
                className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="tracking-[0.35em] uppercase text-[#C8A96B] text-xs mb-4">
                  Executive Collection
                </p>

                <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-md">
                  Crafted For Men Of Prestige
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#C8A96B]/20 bg-[#C8A96B]/10 p-8 backdrop-blur-xl">
                <p className="tracking-[0.35em] uppercase text-[#D4AF37] text-xs mb-4">
                  Founding Member Access
                </p>

                <h3 className="text-3xl font-serif mb-5">
                  Join The Prestige Waitlist
                </h3>

                <p className="text-[#d9d1c2]/75 leading-relaxed mb-8">
                  Get early access to limited drops, founding member benefits,
                  private release announcements, and luxury society invitations.
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-[#C8A96B]/50"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-[#C8A96B]/50"
                  />

                  <button
                    onClick={() => {
                      alert('Welcome to the Prestige Stride founding members waitlist.');
                    }}
                    className="w-full rounded-full bg-[#C8A96B] px-8 py-4 text-sm uppercase tracking-[0.25em] text-black transition hover:shadow-[0_0_30px_rgba(200,169,107,0.4)]"
                  >
                    Reserve Membership Access
                  </button>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl flex items-center justify-between gap-6">
                <div>
                  <p className="tracking-[0.3em] uppercase text-[#C8A96B] text-xs mb-4">
                    Concierge Ordering
                  </p>

                  <h3 className="text-2xl font-serif mb-3">
                    Order Directly On WhatsApp
                  </h3>

                  <p className="text-[#d9d1c2]/70 leading-relaxed text-sm max-w-md">
                    Speak directly with our luxury concierge team for sizing,
                    private orders, drop reservations, and premium delivery.
                  </p>
                </div>

                <button
                  onClick={() => {
                    window.open('https://wa.me/2348000000000', '_blank');
                  }}
                  className="shrink-0 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#25D366] transition hover:bg-[#25D366] hover:text-black"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="relative px-6 md:px-14 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] transition-all duration-700 hover:-translate-y-3 ${
                plan.style === 'executive'
                  ? 'border border-[#C8A96B]/50 bg-gradient-to-b from-[#1a1a1a] to-[#090909] shadow-[0_0_50px_rgba(200,169,107,0.18)]'
                  : plan.style === 'chairman'
                  ? 'border border-[#D4AF37]/20 bg-white/5 backdrop-blur-2xl'
                  : 'border border-white/10 bg-white/[0.03] backdrop-blur-xl'
              }`}
            >
              {/* Spotlight Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.18),transparent_55%)]" />

              {/* Gold Shine */}
              <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[900%] transition duration-[2200ms]" />

              <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-[10px] tracking-[0.25em] text-[#D4AF37]">
                    {plan.badge}
                  </div>
                )}

                {/* Premium Badge */}
                {plan.style === 'executive' && (
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[#D4AF37] tracking-[0.3em] text-xs uppercase">
                      Premium Access
                    </span>
                  </div>
                )}

                <p className="text-[#C8A96B] tracking-[0.35em] text-xs uppercase mb-4">
                  {plan.subtitle}
                </p>

                <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                  {plan.name}
                </h2>

                <div className="mb-8">
                  <h3
                    className={`text-3xl font-light ${
                      plan.style !== 'basic'
                        ? 'text-[#D4AF37]'
                        : 'text-[#F5F1E8]'
                    }`}
                  >
                    {plan.price}
                  </h3>
                </div>

                <p className="text-[#d9d1c2]/75 leading-relaxed mb-10 text-sm md:text-base">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-lg transition duration-500 group-hover:border-[#C8A96B]/15"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.8)]" />
                      <p className="text-[#F5F1E8]/85 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);

                    if (plan.style === 'basic') {
                      setIsLoggedIn(true);
                      setActiveSubscription('STRIDE BASIC');
                      alert('Welcome to Prestige Stride Society™. Your STRIDE BASIC membership has been activated.');
                    }

                    if (plan.style === 'executive') {
                      setIsLoggedIn(true);
                      setActiveSubscription('EXECUTIVE CIRCLE™');
                      window.location.href = '/membership/executive-checkout';
                    }

                    if (plan.style === 'chairman') {
                      setIsLoggedIn(true);
                      setActiveSubscription('CHAIRMAN BLACK™');
                      setWaitlistMessage('Your Chairman Black™ invitation request has been received. Our concierge team will contact you shortly.');
                    }
                  }}
                  className={`relative overflow-hidden rounded-full px-8 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-500 ${
                    plan.style === 'basic'
                      ? 'border border-white/10 bg-white/5 hover:bg-white/10'
                      : 'bg-[#C8A96B] text-black hover:shadow-[0_0_30px_rgba(200,169,107,0.4)]'
                  }`}
                >
                  <span className="relative z-10">{plan.button}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 md:px-14 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="tracking-[0.35em] uppercase text-[#C8A96B] text-xs mb-4">
              Membership Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mx-auto leading-tight">
              Designed To Feel Like A Private Luxury Club
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Priority Access',
              'Luxury Packaging',
              'Executive Styling',
              'Private Society Events',
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96B]/40"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.15),transparent_60%)]" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A96B]/20 bg-[#C8A96B]/10 text-[#D4AF37] shadow-[0_0_30px_rgba(200,169,107,0.15)]">
                    ✦
                  </div>

                  <h3 className="text-2xl font-serif mb-4">{item}</h3>

                  <p className="text-[#d9d1c2]/70 leading-relaxed text-sm">
                    Experience luxury craftsmanship, exclusive access, and
                    prestige-driven benefits tailored for gentlemen of status.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Membership Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
          <div className="w-full max-w-2xl rounded-[32px] border border-[#C8A96B]/20 bg-[#0A0A0A]/95 p-10 shadow-[0_0_60px_rgba(200,169,107,0.18)]">
            <p className="text-[#C8A96B] uppercase tracking-[0.35em] text-xs mb-5">
              Prestige Stride Society™
            </p>

            <h2 className="text-4xl font-serif mb-6">
              {selectedPlan}
            </h2>

            <p className="text-[#d9d1c2]/75 leading-relaxed mb-10">
              You are about to enter a premium membership experience crafted for gentlemen who appreciate prestige, luxury craftsmanship, and executive exclusivity.
            </p>

            {waitlistMessage && (
              <div className="mb-8 rounded-2xl border border-[#C8A96B]/20 bg-[#C8A96B]/10 p-5 text-[#F5F1E8] leading-relaxed">
                {waitlistMessage}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedPlan(null)}
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white/10"
              >
                Close
              </button>

              <button
                onClick={() => {
                  if (selectedPlan === 'EXECUTIVE CIRCLE™') {
                    window.location.href = '/checkout';
                  }

                  if (selectedPlan === 'CHAIRMAN BLACK™') {
                    window.location.href = '/chairman-black-application';
                  }
                }}
                className="rounded-full bg-[#C8A96B] px-8 py-4 text-sm uppercase tracking-[0.25em] text-black transition hover:shadow-[0_0_30px_rgba(200,169,107,0.4)]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
