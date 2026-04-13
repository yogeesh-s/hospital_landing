import { 
  Heart, Brain, Bone, Baby, Droplets, Eye, 
  Scan, FlaskConical, Dna, Radiation, Waves,
  Stethoscope, Syringe, Clipboard
} from "lucide-react"

export const departmentsData = [
  { 
    title: "General Medicine", 
    icon: Stethoscope, 
    description: "Expert diagnosis and effective treatment for fevers, infections, and all common health concerns.", 
    image: "/assets/images/sections/about-lobby.webp",
    services: ["Fever Treatment", "Health Checkups", "Lifestyle Diseases"],
    className: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Cardiology", 
    icon: Heart, 
    description: "Advanced heart care and monitoring to keep your heart healthy and strong.", 
    image: "/assets/images/departments/cardiology.jpeg",
    services: ["Heart Monitoring", "ECG", "Cardiac Care"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Pediatrics", 
    icon: Baby, 
    description: "Gentle and specialized care for your children, from newborn to teenagers.", 
    image: "/assets/images/departments/pediatrics.jpeg",
    services: ["Child Vaccination", "Newborn Care", "Growth Monitoring"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Orthopedics", 
    icon: Bone, 
    description: "Expert treatment for bone fractures, joint pains, and all types of sports injuries.", 
    image: "/assets/images/departments/orthopedics.jpeg",
    services: ["Joint Pain", "Fracture Care", "Physiotherapy"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Maternity", 
    icon: Droplets, 
    description: "Safe and comfortable birthing experiences for mothers in a caring environment.", 
    image: "/assets/images/sections/about-lobby.webp",
    services: ["Painless Delivery", "Prenatal Care", "Postnatal Support"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "General Surgery", 
    icon: Syringe, 
    description: "Safe and minimally invasive surgeries for faster recovery and minimal scarring.", 
    image: "/assets/images/gallery/operating-room.jpeg",
    services: ["Laparoscopy", "Minor Surgeries", "Trauma Care"],
    className: "md:col-span-2 md:row-span-1" 
  },
]

export const labServicesData = [
  {
    title: "Advanced CT & X-Ray",
    icon: Scan,
    description: "Low-radiation imaging systems for quick and accurate internal diagnosis.",
    image: "/assets/images/sections/diagnostics-lab.avif",
    features: ["Instant Reports", "Low Radiation", "24/7 Availability"]
  },
  {
    title: "Modern Ultrasound",
    icon: Waves,
    description: "Real-time imaging for maternity and internal health checks.",
    image: "/assets/images/gallery/operating-room.jpeg",
    features: ["Crystal Clear", "Safe for Mothers", "Expert Radiologists"]
  },
  {
    title: "Automated Lab",
    icon: Droplets,
    description: "NABL certified laboratory ensuring zero-error and quick results.",
    image: "/assets/images/sections/about-lobby.webp",
    features: ["Home Collection", "Same-day Results", "Digital Reports"]
  },
  {
    title: "Emergency Diagnostics",
    icon: FlaskConical,
    description: "Immediate diagnostic support for trauma and emergency cases.",
    image: "/assets/images/departments/cardiology.jpeg",
    features: ["Prioritized Reports", "Trauma Ready", "Expert Review"]
  },
  {
    title: "Family Screening",
    icon: Clipboard,
    description: "Comprehensive health checkups for every member of your family.",
    image: "/assets/images/departments/neurology.jpeg",
    features: ["Diabetes Check", "Blood Pressure", "Basic Wellness"]
  },
  {
    title: "Digital Records",
    icon: Radiation,
    description: "Secure and instant access to all your medical reports digitally.",
    image: "/assets/images/gallery/patient-room.jpeg",
    features: ["Paperless", "Easy Sharing", "Lifetime Access"]
  }
]

export const healthPackages = [
  {
    title: "Elite Master Checkup",
    price: "₹4,999",
    description: "Comprehensive health screening for a complete physical assessment.",
    features: ["Full Blood Profile", "X-Ray Chest", "ECG", "Doctor Consultation"],
    image: "/assets/images/sections/about-lobby.webp",
    popular: true
  },
  {
    title: "Cardiac Health Shield",
    price: "₹2,999",
    description: "Essential heart health evaluation designed for early detection.",
    features: ["Lipid Profile", "ECG", "Sugar Check", "Heart Specialist Consult"],
    image: "/assets/images/departments/cardiology.jpeg",
    popular: false
  },
  {
    title: "Family Wellness Plan",
    price: "₹1,999",
    description: "Basic health screening for routine family wellness monitoring.",
    features: ["Blood Sugar", "HB Count", "Basic Vitals", "General Consult"],
    image: "/assets/images/departments/pediatrics.jpeg",
    popular: false
  }
]

export const insurancePartners = [
  { name: "HDFC ERGO", logo: "HDFC" },
  { name: "Star Health", logo: "Star" },
  { name: "ICICI Lombard", logo: "ICICI" },
  { name: "Niva Bupa", logo: "Bupa" },
  { name: "Bajaj Allianz", logo: "Bajaj" },
  { name: "Care Health", logo: "Care" },
  { name: "TATA AIG", logo: "TATA" },
  { name: "United India", logo: "United" }
]

export const specialists = [
  { 
    name: "Dr. Rajesh Kumar", 
    specialty: "Senior Consultant – General Medicine", 
    qualifications: "MD (Medicine)",
    experience: "15+ Years",
    metrics: { success: 99.6, satisfaction: 4.9 },
    skills: ["Accurate Diagnosis", "Chronic Care"],
    image: "/assets/images/specialists/doctor-1.jpeg" 
  },
  { 
    name: "Dr. Anitha Hegde", 
    specialty: "Specialist – Obstetrics & Gynaecology", 
    qualifications: "MD, DGO",
    experience: "12+ Years",
    metrics: { success: 99.8, satisfaction: 5.0 },
    skills: ["Painless Delivery", "Maternity Care"],
    image: "/assets/images/specialists/doctor-2.jpg" 
  },
  { 
    name: "Dr. Sandeep Murthy", 
    specialty: "Chief Surgeon – Orthopedics", 
    qualifications: "MS (Ortho)",
    experience: "14+ Years",
    metrics: { success: 99.2, satisfaction: 4.9 },
    skills: ["Joint Replacement", "Trauma Surgery"],
    image: "/assets/images/departments/orthopedics.jpeg" 
  }
]

export const testimonials = [
  {
    name: "Manjunath Swamy",
    story: "We rushed my father to Elite Hospital at 2 AM due to chest pain. The doctors were ready before we even reached. Their quick action and care saved his life. I am forever grateful.",
    department: "Shimoga",
    rating: 5,
    image: "/assets/images/departments/cardiology.jpeg"
  },
  {
    name: "Suma R.",
    story: "My daughter had a high fever that wouldn't go down. The pediatricians here are so patient and friendly. They didn't just give medicines; they made her feel safe. She recovered in 2 days.",
    department: "Sagar Road, Shimoga",
    rating: 5,
    image: "/assets/images/departments/pediatrics.jpeg"
  },
  {
    name: "Prakash J.",
    story: "I had my surgery here. The hospital is very clean and the staff is very disciplined. Most importantly, the final bill was exactly what they quoted—no hidden charges.",
    department: "Bhadravathi",
    rating: 5,
    image: "/assets/images/departments/orthopedics.jpeg"
  }
]

export const hospitalMilestones = [
  { year: "2014", title: "Our Inception", description: "Elite Hospital was established with a mission to bring quality healthcare to Shimoga." },
  { year: "2018", title: "Advanced ICU", description: "Launched our 24/7 dedicated trauma and intensive care unit with advanced life support." },
  { year: "2022", title: "Excellence Award", description: "Recognized as the most trusted multispeciality hospital in the Shimoga region." },
  { year: "2026", title: "Modern Diagnostics", description: "Upgraded to fully automated diagnostic systems for faster and error-free reports." }
]

export const hospitalEvents = [
  {
    title: "Free Health Screening Camp",
    date: "May 15, 2026",
    category: "Community Health",
    image: "/assets/images/gallery/operating-room.jpeg"
  },
  {
    title: "Maternity Wellness Workshop",
    date: "June 02, 2026",
    category: "Patient Education",
    image: "/assets/images/sections/about-lobby.webp"
  }
]

export const galleryImages = [
  "/assets/images/hero/hero-main.webp",
  "/assets/images/gallery/operating-room.jpeg",
  "/assets/images/gallery/patient-room.jpeg",
  "/assets/images/sections/about-lobby.webp",
  "/assets/images/sections/diagnostics-lab.avif",
  "/assets/images/departments/neurology.jpeg"
]
