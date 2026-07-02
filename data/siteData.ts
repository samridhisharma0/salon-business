export const siteConfig = {
  name: "SalonHQ",
  tagline: "Where Art Meets Precision",
  description: "Premium hair salon in the heart of New York City. Expert stylists, luxury treatments, and exceptional results.",
  address: "87 Walker St #6A, New York, NY 10013",
  phone: "+1 646-870-9252",
  email: "hello@salonhq.com",
  hours: "Mon-Sat: 10am - 8pm",
  rating: 4.9,
  reviews: 85,
  mapUrl: "https://maps.google.com/?q=87+Walker+St+%236A+New+York+NY+10013",
  social: {
    instagram: "https://instagram.com/salonhq",
    facebook: "https://facebook.com/salonhq",
    twitter: "https://twitter.com/salonhq",
    tiktok: "https://tiktok.com/@salonhq",
    pinterest: "https://pinterest.com/salonhq",
  },
};

export const services = [
  {
    id: 1,
    title: "Hair Coloring",
    description: "From balayage to bold fashion colors, our colorists create bespoke hues that complement your unique style.",
    price: "From $185",
    duration: "2-4 hrs",
    icon: "palette",
    features: ["Balayage & Ombré", "Full Color", "Highlights & Lowlights", "Toner & Gloss"],
  },
  {
    id: 2,
    title: "Haircut & Styling",
    description: "Precision cuts tailored to your face shape, lifestyle, and hair texture by our master stylists.",
    price: "From $95",
    duration: "1-2 hrs",
    icon: "scissors",
    features: ["Women's Cut", "Men's Cut", "Blowout Styling", "Formal Styling"],
  },
  {
    id: 3,
    title: "Hair Treatments",
    description: "Restorative treatments that rejuvenate your hair from root to tip using premium products.",
    price: "From $65",
    duration: "30-60 min",
    icon: "sparkles",
    features: ["Keratin Treatment", "Deep Conditioning", "Scalp Therapy", "Olaplex Treatment"],
  },
  {
    id: 4,
    title: "Perm & Texture",
    description: "Modern perming techniques that create beautiful, natural-looking waves and curls.",
    price: "From $250",
    duration: "2-3 hrs",
    icon: "waves",
    features: ["Digital Perm", "Cold Perm", "Root Perm", "Volume Perm"],
  },
  {
    id: 5,
    title: "Bridal & Events",
    description: "Comprehensive wedding and event hair services including trials, on-site styling, and more.",
    price: "From $350",
    duration: "By appointment",
    icon: "heart",
    features: ["Bridal Trials", "Wedding Day", "Bridal Party", "Special Events"],
  },
  {
    id: 6,
    title: "Extensions",
    description: "Premium hair extensions for length, volume, and dimension using only the finest quality hair.",
    price: "From $500",
    duration: "2-4 hrs",
    icon: "star",
    features: ["Tape-in Extensions", "Keratin Bond", "Clip-in Extensions", "Custom Color Match"],
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Steve Chen",
    role: "Master Stylist & Founder",
    bio: "With over 15 years of experience, Steve has trained in Paris, Tokyo, and New York. His precision cutting and artistic vision have made him one of the most sought-after stylists in the city.",
    image: "/team/steve.jpg",
    specialties: ["Precision Cuts", "Color", "Editorial Styling"],
    rating: 5.0,
  },
  {
    id: 2,
    name: "Poh Yee",
    role: "Senior Colorist",
    bio: "Specializing in perms and color transformations, Poh Yee's meticulous attention to detail and patient approach has earned her a devoted following.",
    image: "/team/poh-yee.jpg",
    specialties: ["Perms", "Balayage", "Color Correction"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "Maria Santos",
    role: "Senior Stylist",
    bio: "Maria brings a fresh perspective to every cut and style. Her background in fine arts influences her creative approach to hair design.",
    image: "/team/maria.jpg",
    specialties: ["Creative Cuts", "Blowouts", "Bridal"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Texture Specialist",
    bio: "James is our go-to expert for all things texture — from keratin treatments to transformative perms that look completely natural.",
    image: "/team/james.jpg",
    specialties: ["Keratin", "Perms", "Texture Services"],
    rating: 4.9,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    text: "My color came out better than I imagined. They knew exactly what to do with my hair. Worked quick and efficiently and created a custom toner for my hair.",
    rating: 5,
    service: "Hair Coloring",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Daniel Park",
    text: "I highly recommend this place if you're getting a perm. Ask for Poh Yee. She did an amazing job and the perm looks AMAZING! Very patient and made sure I got what I wanted.",
    rating: 5,
    service: "Perm & Texture",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Olivia Thompson",
    text: "The staff were all so warm, courteous, and professional. Steve was exceptional in making sure my hair was just how I wanted it. He gave great insight on what would work best.",
    rating: 5,
    service: "Haircut & Styling",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    text: "Best haircut I've had in years. The attention to detail is incredible and the atmosphere is so relaxing. Already booked my next appointment.",
    rating: 5,
    service: "Haircut & Styling",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Emma Chen",
    text: "I've been coming to SalonHQ for over a year now and I've never left disappointed. The consistency is remarkable and everyone is so talented.",
    rating: 5,
    service: "Multiple Services",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Ryan O'Brien",
    text: "The balayage I got here is the best I've ever had. The color is so dimensional and natural-looking. Worth every penny.",
    rating: 5,
    service: "Hair Coloring",
    date: "3 weeks ago",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Essential",
    price: 95,
    description: "Perfect for maintenance and quick transformations.",
    features: [
      "Precision Haircut",
      "Blowout Style",
      "Shampoo & Condition",
      "Style Consultation",
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: "Signature",
    price: 245,
    description: "Our most popular package for complete hair care.",
    features: [
      "Everything in Essential",
      "Full Color or Balayage",
      "Deep Conditioning Treatment",
      "Premium Styling",
      "Follow-up Adjustment",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: 3,
    name: "Luxury",
    price: 450,
    description: "The ultimate salon experience with premium services.",
    features: [
      "Everything in Signature",
      "Keratin or Olaplex Treatment",
      "Scalp Massage Therapy",
      "Wine & Refreshments",
      "Priority Booking",
      "Complimentary Products",
    ],
    highlighted: false,
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Consultation",
    description: "We begin with a detailed conversation about your hair goals, lifestyle, and vision. This is where we create your personalized plan.",
    icon: "message-circle",
  },
  {
    id: 2,
    title: "Preparation",
    description: "Our expert stylists prepare your hair using premium products tailored to your hair type and desired outcome.",
    icon: "prep",
  },
  {
    id: 3,
    title: "The Transformation",
    description: "Using advanced techniques and precision tools, we bring your vision to life with meticulous attention to every detail.",
    icon: "sparkles",
  },
  {
    id: 4,
    title: "The Reveal",
    description: "The moment of truth. We style your hair to perfection and reveal your new look. We don't stop until you're thrilled.",
    icon: "eye",
  },
  {
    id: 5,
    title: "Aftercare",
    description: "We provide personalized aftercare instructions and product recommendations to keep your hair looking salon-fresh longer.",
    icon: "heart",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I book an appointment?",
    answer: "You can book online through our website, call us at +1 646-870-9252, or visit us in person. We recommend booking at least a week in advance for weekend appointments.",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for cancellations and rescheduling. Late cancellations or no-shows may incur a 50% service fee.",
  },
  {
    id: 3,
    question: "Do you offer consultations before services?",
    answer: "Absolutely! We offer complimentary consultations for all services. This ensures you and your stylist are aligned on the vision before we begin.",
  },
  {
    id: 4,
    question: "What products do you use?",
    answer: "We use only premium, professional-grade products from brands like Oribe, Kerastase, Olaplex, and our own custom SalonHQ line.",
  },
  {
    id: 5,
    question: "How long does color service take?",
    answer: "Color services typically range from 2-4 hours depending on the complexity. We'll give you a precise time estimate during your consultation.",
  },
  {
    id: 6,
    question: "Do you offer bridal party packages?",
    answer: "Yes! We offer comprehensive bridal packages including trials, day-of styling for the bride and bridal party, and on-site services. Contact us for a custom quote.",
  },
  {
    id: 7,
    question: "What if I don't like my haircut?",
    answer: "Your satisfaction is our priority. If you're not happy with your cut, let us know within 7 days and we'll schedule a complimentary adjustment.",
  },
  {
    id: 8,
    question: "Do you accept walk-ins?",
    answer: "We welcome walk-ins based on availability, but we strongly recommend booking in advance to secure your preferred time slot.",
  },
];

export const galleryImages = [
  { id: 1, src: "/gallery/1.jpg", alt: "Balayage transformation", category: "Color" },
  { id: 2, src: "/gallery/2.jpg", alt: "Precision haircut", category: "Cut" },
  { id: 3, src: "/gallery/3.jpg", alt: "Bridal updo", category: "Styling" },
  { id: 4, src: "/gallery/4.jpg", alt: "Perm results", category: "Texture" },
  { id: 5, src: "/gallery/5.jpg", alt: "Blowout styling", category: "Styling" },
  { id: 6, src: "/gallery/6.jpg", alt: "Color correction", category: "Color" },
  { id: 7, src: "/gallery/7.jpg", alt: "Editorial shoot", category: "Editorial" },
  { id: 8, src: "/gallery/8.jpg", alt: "Hair extensions", category: "Extensions" },
];

export const stats = [
  { id: 1, value: 15, suffix: "+", label: "Years of Excellence" },
  { id: 2, value: 50, suffix: "K+", label: "Happy Clients" },
  { id: 3, value: 4.9, suffix: "", label: "Google Rating" },
  { id: 4, value: 12, suffix: "K+", label: "Styles Created" },
];
