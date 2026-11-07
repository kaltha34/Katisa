'use client';

import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { FiCalendar, FiClock, FiUsers, FiVideo } from 'react-icons/fi';
import { db } from '@/lib/firebase';
import Button from '@/components/ui/Button';

const EMAILJS_SERVICE = 'service_jnqvdcz';
const EMAILJS_OTP_TEMPLATE = 'template_l14v6m1';
const EMAILJS_CONFIRM_TEMPLATE = 'template_nq9ly35';
const EMAILJS_PUBLIC_KEY = 'AjK9HQim3RbpwOLW9';

export default function WebinarsClient() {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registrationCounts, setRegistrationCounts] = useState({});
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
  });
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pendingWebinar, setPendingWebinar] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    fetchWebinars();
    fetchRegistrationCounts();
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const fetchRegistrationCounts = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'webinar-registrations'));
      const counts = {};
      snapshot.forEach((docSnap) => {
        const webinarId = docSnap.data().webinarId;
        counts[webinarId] = (counts[webinarId] || 0) + 1;
      });
      setRegistrationCounts(counts);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  };

  const fetchWebinars = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'webinars'));
      const data = [];
      snapshot.forEach((docSnap) => data.push({ id: docSnap.id, ...docSnap.data() }));
      data.sort((a, b) => (b.date?.toMillis?.() || 0) - (a.date?.toMillis?.() || 0));
      setWebinars(data);
    } catch (error) {
      console.error('Error fetching webinars:', error);
    } finally {
      setLoading(false);
    }
  };

  const isWebinarLive = (webinar) => {
    if (!webinar.date?.toDate) return false;
    const start = webinar.date.toDate();
    const fiveMinutesBefore = new Date(start.getTime() - 5 * 60 * 1000);
    const threeHoursAfter = new Date(start.getTime() + 3 * 60 * 60 * 1000);
    return currentTime >= fiveMinutesBefore && currentTime <= threeHoursAfter;
  };

  const sendOtp = async () => {
    if (!registrationData.email) {
      alert('Please enter your email address');
      return;
    }
    setOtpSending(true);
    setOtpError('');
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_OTP_TEMPLATE,
        {
          to_email: registrationData.email,
          to_name: registrationData.name || 'User',
          otp_code: otp,
        },
        EMAILJS_PUBLIC_KEY
      );
      setShowOtpVerification(true);
      setTimeout(() => {
        setGeneratedOtp('');
        setOtpError('OTP expired. Please request a new one.');
      }, 5 * 60 * 1000);
    } catch (error) {
      console.error(error);
      setOtpError('Failed to send OTP. Please try again.');
    } finally {
      setOtpSending(false);
    }
  };

  const verifyOtp = () => {
    if (otpInput === generatedOtp) {
      setEmailVerified(true);
      setShowOtpVerification(false);
      setOtpError('');
    } else {
      setOtpError('Invalid OTP. Please check and try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!emailVerified) {
      alert('Please verify your email first.');
      return;
    }

    try {
      const existing = await getDocs(collection(db, 'webinar-registrations'));
      let duplicateType = '';
      existing.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.webinarId === selectedWebinar.id) {
          if (data.email.toLowerCase() === registrationData.email.toLowerCase()) duplicateType = 'email';
          else if (registrationData.phone && data.phone === registrationData.phone) duplicateType = 'phone';
        }
      });
      if (duplicateType) {
        alert(`This ${duplicateType} is already registered for this webinar.`);
        return;
      }

      const accessToken =
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

      await addDoc(collection(db, 'webinar-registrations'), {
        ...registrationData,
        webinarId: selectedWebinar.id,
        webinarTitle: selectedWebinar.title,
        accessToken,
        registeredAt: serverTimestamp(),
      });

      setRegistrationCounts((prev) => ({
        ...prev,
        [selectedWebinar.id]: (prev[selectedWebinar.id] || 0) + 1,
      }));

      try {
        await emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_CONFIRM_TEMPLATE,
          {
            to_email: registrationData.email,
            to_name: registrationData.name,
            webinar_title: selectedWebinar.title,
            webinar_date: selectedWebinar.date?.toDate
              ? selectedWebinar.date.toDate().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'TBD',
            webinar_time: selectedWebinar.date?.toDate
              ? selectedWebinar.date.toDate().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })
              : 'TBD',
            webinar_description: selectedWebinar.description,
            webinar_link: `${window.location.origin}/webinars`,
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error(emailError);
      }

      setRegistrationSuccess(true);
      setTimeout(() => {
        setShowRegistration(false);
        setRegistrationSuccess(false);
        setRegistrationData({ name: '', email: '', phone: '', university: '' });
        setEmailVerified(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyAndJoin = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'webinar-registrations'));
      let isRegistered = false;
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (
          data.webinarId === pendingWebinar.id &&
          data.email.toLowerCase() === emailInput.toLowerCase().trim()
        ) {
          isRegistered = true;
        }
      });
      if (isRegistered) {
        setShowEmailPrompt(false);
        window.open(`/webinar-room/${pendingWebinar.roomName}`, '_blank');
      } else {
        setEmailError('Email not registered for this webinar. Please register first.');
      }
    } catch (error) {
      console.error(error);
      setEmailError('Error verifying registration. Please try again.');
    }
  };

  const getQRCode = (webinarId) => {
    const url = `${window.location.origin}/webinars?id=${webinarId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  };

  return (
    <>
      <div className="container-site section-pad">
        <div className="mb-10 text-center">
          <h2 className="heading-display">Upcoming sessions</h2>
          <p className="body-muted mt-3">Free online sessions on AI, product, and building in public.</p>
        </div>

        {loading ? (
          <div className="py-16 text-center text-white/60">Loading webinars…</div>
        ) : webinars.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] py-16 text-center">
            <FiCalendar className="mx-auto mb-4 text-4xl text-gold" />
            <p className="text-lg font-semibold text-white">No webinars scheduled yet</p>
            <p className="mt-2 text-white/60">Check back soon for upcoming sessions.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {webinars.map((webinar) => {
              const count = registrationCounts[webinar.id] || 0;
              const full = count >= 20;
              const started = webinar.date?.toDate && new Date() >= webinar.date.toDate();
              return (
                <article key={webinar.id} className="card-surface">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{webinar.title}</h3>
                      <p className="mt-2 text-sm text-white/65">{webinar.description}</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={getQRCode(webinar.id)} alt="QR Code" className="h-16 w-16 rounded border border-white/15" />
                  </div>

                  <div className="mb-4 space-y-2 text-sm text-white/65">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-gold" />
                      {webinar.date?.toDate
                        ? webinar.date.toDate().toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : 'Date TBD'}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-gold" />
                      {webinar.date?.toDate
                        ? webinar.date.toDate().toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })
                        : 'Time TBD'}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-gold" />
                      {webinar.speaker || 'TBD'} · {20 - count} seats left
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      type="button"
                      className="flex-1"
                      disabled={full || started}
                      onClick={() => {
                        if (full || started) return;
                        setSelectedWebinar(webinar);
                        setShowRegistration(true);
                        setEmailVerified(false);
                        setOtpInput('');
                        setOtpError('');
                      }}
                    >
                      {full ? 'Session full' : started ? 'Registration closed' : 'Register now'}
                    </Button>
                    {isWebinarLive(webinar) && (
                      <button
                        type="button"
                        className="btn flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                        onClick={() => {
                          setPendingWebinar(webinar);
                          setShowEmailPrompt(true);
                          setEmailError('');
                          setEmailInput('');
                        }}
                      >
                        <FiVideo /> Join live
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {showRegistration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowRegistration(false)}>
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute right-4 top-4 text-white/50 hover:text-white" onClick={() => setShowRegistration(false)}>
              ✕
            </button>
            <h3 className="text-2xl font-bold text-white">Register for webinar</h3>
            <p className="mt-1 text-sm text-white/60">{selectedWebinar?.title}</p>

            {registrationSuccess ? (
              <div className="py-10 text-center">
                <p className="text-xl font-bold text-emerald-400">Registration successful</p>
                <p className="mt-2 text-white/60">Check your email for joining details.</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="mt-6 space-y-3">
                <input className="input-field" required placeholder="Full name *" value={registrationData.name} onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })} />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="input-field flex-1"
                    required
                    type="email"
                    placeholder="Email *"
                    value={registrationData.email}
                    onChange={(e) => {
                      setRegistrationData({ ...registrationData, email: e.target.value });
                      setEmailVerified(false);
                    }}
                  />
                  <button type="button" className={`btn-outline ${emailVerified ? '!border-emerald-400 !text-emerald-300' : ''}`} onClick={sendOtp} disabled={otpSending || emailVerified}>
                    {otpSending ? 'Sending…' : emailVerified ? 'Verified' : 'Verify email'}
                  </button>
                </div>
                <input className="input-field" type="tel" placeholder="Phone number" value={registrationData.phone} onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })} />
                <input className="input-field" placeholder="University / company" value={registrationData.university} onChange={(e) => setRegistrationData({ ...registrationData, university: e.target.value })} />
                <button type="submit" className="btn-gold w-full" disabled={!emailVerified}>
                  {emailVerified ? 'Complete registration' : 'Verify email first'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {showOtpVerification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowOtpVerification(false)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white">Verify your email</h3>
            <p className="mt-2 text-sm text-white/60">
              We sent a 6-digit code to <strong className="text-white">{registrationData.email}</strong>
            </p>
            <input
              className="input-field mt-4 text-center text-2xl tracking-[0.35em]"
              value={otpInput}
              maxLength={6}
              onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="000000"
            />
            {otpError && <p className="mt-2 text-sm text-red-400">{otpError}</p>}
            <div className="mt-4 flex gap-3">
              <button type="button" className="btn-outline flex-1" onClick={() => setShowOtpVerification(false)}>
                Cancel
              </button>
              <button type="button" className="btn-gold flex-1" onClick={verifyOtp} disabled={otpInput.length !== 6}>
                Verify code
              </button>
            </div>
            <button type="button" className="mt-4 w-full text-sm text-gold hover:text-white" onClick={sendOtp}>
              Resend code
            </button>
          </div>
        </div>
      )}

      {showEmailPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowEmailPrompt(false)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white">Verify registration</h3>
            <p className="mt-2 text-sm text-white/60">Enter the email you used to register.</p>
            <input className="input-field mt-4" type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="your@email.com" />
            {emailError && <p className="mt-2 text-sm text-red-400">{emailError}</p>}
            <div className="mt-4 flex gap-3">
              <button type="button" className="btn-outline flex-1" onClick={() => setShowEmailPrompt(false)}>
                Cancel
              </button>
              <button type="button" className="btn-gold flex-1" onClick={verifyAndJoin}>
                Join webinar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
