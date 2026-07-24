// export const navBarData = [
//     {
//         id: 1,
//         pathName: "Home",
//         pathUrl: "/",
//     },
//     {
//         id: 2,
//         pathName: "Features",
//         pathUrl: "/features",
//     },
//     {
//         id: 3,
//         pathName: "About",
//         pathUrl: "/about",
//     },
//     {
//         id: 4,
//         pathName: "Contact",
//         pathUrl: "/contact",
//     },
   
    
// ]



// export const featuresData = [
//   {
//     id: 1,
//     icon: FaQrcode,
//     title: "QR Code Attendance",
//     description:
//       "Students scan a secure QR code to mark attendance in seconds.",
//   },
//   {
//     id: 2,
//     icon: FaMapMarkedAlt,
//     title: "GPS Verification",
//     description:
//       "Verify that students are physically present before attendance is recorded.",
//   },
//   {
//     id: 3,
//     icon: FaChartLine,
//     title: "Attendance Analytics",
//     description:
//       "Monitor attendance trends with beautiful visual reports.",
//   },
//   {
//     id: 4,
//     icon: FaFileDownload,
//     title: "Export Reports",
//     description:
//       "Download attendance reports in PDF and Excel formats.",
//   },
//   {
//     id: 5,
//     icon: FaUsers,
//     title: "User Management",
//     description:
//       "Manage students, lecturers and administrators easily.",
//   },
//   {
//     id: 6,
//     icon: FaShieldAlt,
//     title: "Secure Authentication",
//     description:
//       "Role-based access control keeps your data safe.",
//   },

//   {
//     id:7,
//     icon: FaBell,
//     title:"Notifications",
//     description:"Receive instant attendance alerts."
// },
// ];


import {
  FaQrcode,
  FaMapMarkerAlt,
  FaChartLine,
  FaFileDownload,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa";

export const navBarData = [
  {
    id: 1,
    pathName: "Home",
    pathUrl: "/",
  },
  {
    id: 2,
    pathName: "Features",
    pathUrl: "/features",
  },
  {
    id: 3,
    pathName: "About",
    pathUrl: "/about",
  },
  {
    id: 4,
    pathName: "Contact",
    pathUrl: "/contact",
  },
];

export const featuresData = [
  {
    id: 1,
    icon: FaQrcode,
    title: "QR Code Attendance",
    description:
      "Students scan a secure QR code to mark attendance in seconds.",
  },
  {
    id: 2,
    icon: FaMapMarkerAlt,
    title: "GPS Verification",
    description:
      "Verify that students are physically present before attendance is recorded.",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Attendance Analytics",
    description:
      "Monitor attendance trends with beautiful visual reports.",
  },
  {
    id: 4,
    icon: FaFileDownload,
    title: "Export Reports",
    description:
      "Download attendance reports in PDF and Excel formats.",
  },
  {
    id: 5,
    icon: FaUsers,
    title: "User Management",
    description:
      "Manage students, lecturers and administrators easily.",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "Secure Authentication",
    description:
      "Role-based access control keeps your data safe.",
  },
];


export const howItWorksData = [
  {
    id: 1,
    icon: FaQrcode,
    title: "Generate QR Code",
    description: "Lecturer generates a secure QR code for attendance.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Student Scans",
    description: "Students scan the QR code using AttendFlow.",
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: "GPS Verification",
    description: "Verify students are physically present.",
  },
  {
    id: 4,
    icon: FaChartBar,
    title: "Attendance Reports",
    description: "Reports and analytics are generated instantly.",
  },
];










export const testimonialData = [
  {
    id: 1,
    name: "Dr. Ibrahim Musa",
    role: "Lecturer",
    image: "https://i.pravatar.cc/150?img=12",
    comment:
      "AttendFlow has transformed the way attendance is managed in our faculty. It saves time and eliminates manual errors.",
    rating: 5,
  },

  {
    id: 2,
    name: "Sarah Johnson",
    role: "Student",
    image: "https://i.pravatar.cc/150?img=32",
    comment:
      "Scanning the QR code takes just a few seconds. It's fast, secure and convenient.",
    rating: 5,
  },

  {
    id: 3,
    name: "Mr. Adewale",
    role: "Administrator",
    image: "https://i.pravatar.cc/150?img=18",
    comment:
      "Generating attendance reports has become effortless. AttendFlow is exactly what our institution needed.",
    rating: 5,
  },
];


export const pricingData = [
  {
    id: 1,
    title: "Starter",
    price: "₦50,000",
    duration: "/month",
    popular: false,
    features: [
      "Up to 500 Students",
      "QR Attendance",
      "Attendance Reports",
      "Email Support",
    ],
  },

  {
    id: 2,
    title: "Professional",
    price: "₦120,000",
    duration: "/month",
    popular: true,
    features: [
      "Unlimited Students",
      "QR Attendance",
      "GPS Verification",
      "Analytics Dashboard",
      "PDF Export",
      "Admin Dashboard",
    ],
  },

  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    duration: "",
    popular: false,
    features: [
      "Unlimited Everything",
      "Multiple Campuses",
      "Dedicated Manager",
      "API Integration",
      "24/7 Support",
    ],
  },
];