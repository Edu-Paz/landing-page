# OrganicReach Rewards - Frontend Application

This project is a **React-based frontend application** designed to showcase customer testimonials and explain how the OrganicReach Rewards system works. It includes a responsive carousel, dynamic transitions, and a clean, modern UI.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/organicreach-rewards.git
   ```
2. Navigate to the project directory:
   ```bash
   cd organicreach-rewards
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## 🛠️ Project Structure

```
src/
├── Assets/                  # Images and static files
├── Components/              # Reusable components
│   ├── config/              # Configuration files
│   │   └── formKeys.js      # Form field configurations
│   ├── Testimonial.jsx      # Testimonial carousel
│   └── Work.jsx             # Work process section
├── App.js                   # Main application component
├── index.js                 # Entry point
└── styles/                  # Global styles
```

---

## 🔧 Configuration

### 1. Create the `config` Folder
Inside the `Components` directory, create a `config` folder:
```bash
mkdir src/Components/config
```

### 2. Add `formKeys.js`
Create a `formKeys.js` file inside the `config` folder to manage form field configurations:
```javascript
// src/Components/config/formKeys.js

export const FORM_FIELDS = {
  name: {
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  email: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  message: {
    label: "Message",
    type: "textarea",
    placeholder: "Write your message here...",
    required: true,
  },
};
```

---

## 🎨 Features

### 1. **Testimonial Carousel**
- Displays customer testimonials in a responsive carousel.
- Supports smooth transitions (slide, fade, zoom, 3D flip).
- Navigation buttons dynamically disable at the start/end.

### 2. **Work Process Section**
- Explains the OrganicReach Rewards system in 3 steps.
- Each step includes an icon, title, and description.
- Fully responsive design.

### 3. **Dynamic Form Configuration**
- Centralized form field configurations in `formKeys.js`.
- Easily reusable across multiple components.

---

## 🖥️ Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🧩 Key Components

### 1. **Testimonial Component**
- **Props**: None
- **State**:
  - `currentIndex`: Tracks the active testimonial.
  - `visibleCards`: Dynamically adjusts based on screen size.
- **Features**:
  - Responsive carousel with touch and drag support.
  - Dynamic transition effects.

### 2. **Work Component**
- **Props**: None
- **State**: None
- **Features**:
  - Displays a 3-step process with icons and descriptions.
  - Centralized content management.

### 3. **Form Configuration**
- **Usage**:
  ```javascript
  import { FORM_FIELDS } from './config/formKeys';

  const formFields = Object.entries(FORM_FIELDS).map(([key, config]) => (
    <div key={key}>
      <label>{config.label}</label>
      {config.type === 'textarea' ? (
        <textarea placeholder={config.placeholder} required={config.required} />
      ) : (
        <input
          type={config.type}
          placeholder={config.placeholder}
          required={config.required}
        />
      )}
    </div>
  ));
  ```

---

## 🛠️ Customization

### 1. **Change Carousel Transitions**
Modify the `transitionType` state in `Testimonial.jsx`:
```javascript
const [transitionType, setTransitionType] = useState('slide'); // Options: slide, fade, zoom, flip
```

### 2. **Add More Testimonials**
Update the `testimonialsData` array in `Testimonial.jsx`:
```javascript
const testimonialsData = [
  {
    name: "New User",
    role: "New Role",
    text: "New testimonial text...",
    stars: 5,
    image: "path/to/image.png",
  },
  // Add more testimonials here
];
```

### 3. **Modify Form Fields**
Edit `formKeys.js` to add or remove fields:
```javascript
export const FORM_FIELDS = {
  // Add new fields here
  phone: {
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: false,
  },
};
```

---

## 🧪 Testing

Run the test suite:
```bash
npm test
```

---

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

Deploy the `build` folder to your hosting provider (e.g., Netlify, Vercel).

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/) for the star and arrow icons.
- [Create React App](https://create-react-app.dev/) for the project setup.

---

Enjoy building with OrganicReach Rewards! 🎉
