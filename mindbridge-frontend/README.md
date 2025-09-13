# MindBridge Frontend

A responsive and modular frontend for a digital mental health support system for students, built for the Smart India Hackathon 2025. This project uses a pure HTML, CSS, and JavaScript stack to ensure a lightweight and high-performance user experience.

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/mindbridge-frontend.git](https://github.com/your-username/mindbridge-frontend.git)
   cd mindbridge-frontend
   ```

2. **Run locally:**
   Simply open `html/home.html` in your web browser. No server is required.

## 📦 Module Overview

### **1. Home (`html/home.html`)**
- **Description:** The main landing page with a hero section, navigation, and core project information.
- **Key Features:** Responsive navigation bar, language selection, and UI for login/registration.

### **2. Chatbot (`html/chatbot.html`)**
- **Description:** An AI-powered chatbot interface for immediate support.
- **Key Features:** Multilingual support, sentiment detection, and an escalation button to connect with a human counselor.

### **3. Screening (`html/screening.html`)**
- **Description:** Forms for mental health self-assessments (PHQ-9 and GAD-7).
- **Key Features:** Real-time score calculation, a progress bar, and automated escalation logic based on scores.

### **4. Booking (`html/booking.html`)**
- **Description:** A system for students to book appointments with counselors.
- **Key Features:** Calendar picker, counselor selection, and an anonymous booking option.

### **5. Resource Hub (`html/resources.html`)**
- **Description:** A curated library of self-help content including videos, audio, and articles.
- **Key Features:** Filterable content cards and accessibility toggles for a better user experience.

### **6. Forum (`html/forum.html`)**
- **Description:** An anonymous peer-support forum for students to connect and share.
- **Key Features:** Threaded replies, emoji reactions, moderation flagging, and topic tags.

### **7. Dashboard (`html/dashboard.html`)**
- **Description:** An analytics dashboard for administrators to view key mental health trends.
- **Key Features:** Data visualizations using Chart.js, emotional risk heatmap, and role-based views.

## 🎨 Design & Tech Stack

- **HTML:** Semantic HTML5 for a well-structured document.
- **CSS:** Flexbox and Grid for responsive layouts, and CSS variables for theming.
- **JavaScript:** Vanilla JS for all dynamic functionality, including DOM manipulation, data fetching, and event handling.
- **Libraries:** Chart.js for data visualization on the dashboard.

## 📁 File Structure

```
mindbridge-frontend/
├── html/
│   ├── home.html
│   ├── chatbot.html
│   ├── screening.html
│   ├── booking.html
│   ├── resources.html
│   ├── forum.html
│   └── dashboard.html
├── css/
│   ├── styles.css
│   ├── chatbot.css
│   ├── screening.css
│   ├── booking.css
│   ├── resources.css
│   ├── forum.css
│   └── dashboard.css
├── js/
│   ├── main.js
│   ├── chatbot.js
│   ├── screening.js
│   ├── booking.js
│   ├── resources.js
│   ├── forum.js
│   └── dashboard.js
├── data/
│   ├── mock-screening.json
│   ├── mock-resources.json
│   └── mock-forum.json
├── assets/
│   ├── images/
│   ├── videos/
│   ├── audio/
│   └── docs/
└── README.md
```

## 🌟 Key Features

### **Accessibility**
- Text-to-speech functionality
- Font size adjustment
- Keyboard navigation support
- Screen reader friendly

### **Multilingual Support**
- English, Hindi, and Gujarati language options
- Easy language switching interface

### **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface

### **Mental Health Focus**
- Evidence-based screening tools (PHQ-9, GAD-7)
- Anonymous peer support forum
- Professional counselor booking system
- Curated self-help resources

## 🔧 Development

### **Adding New Features**
1. Create HTML file in `html/` directory
2. Add corresponding CSS in `css/` directory
3. Implement JavaScript functionality in `js/` directory
4. Update navigation in all HTML files

### **Styling Guidelines**
- Use CSS variables defined in `styles.css`
- Follow mobile-first responsive design
- Maintain consistent color scheme and typography
- Ensure accessibility compliance

### **JavaScript Best Practices**
- Use vanilla JavaScript for better performance
- Implement proper error handling
- Follow modular approach for maintainability
- Add comments for complex functionality

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is built for the Smart India Hackathon 2025. All rights reserved.

## 🆘 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for student mental health and well-being.**