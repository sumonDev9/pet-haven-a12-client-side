# 🐾 Pet Haven - Pet Adoption Platform

Welcome to **Pet Haven**! 🌟 Pet Haven is a compassionate **pet adoption platform** that connects loving families with pets in need of forever homes. Whether you're looking to adopt a furry companion 🐶🐱 or contribute to a pet’s journey through donations, Pet Haven ensures an engaging and heartwarming experience. 💖

Our mission is clear: **Provide a safe space for every pet** and **support their well-being** through generous donations and community support. Explore the platform, find your next best friend, and make a difference today! 🌍💕

## 📚 Project Overview
**Pet Haven** is a **MERN stack** (MongoDB, Express, React, Node.js) powered pet adoption platform that facilitates **adopting pets**, **creating donation campaigns**, and displaying detailed pet information. It’s a full-fledged web application that works seamlessly across devices (mobile-first design) to provide an intuitive and responsive experience.

### Key Features:
- 🐕 **Pet Listings**: Explore a collection of pets available for adoption.
- 🧑‍⚕️ **Detailed Pet Information**: View in-depth details about each pet, including breed, age, and their special needs.
- 💖 **Donation Campaigns**: Support pets through donations for their care, food, and medical expenses.
- 👤 **Authentication**: Users can sign in via email/password or social logins (Google, Facebook, GitHub).
- 🛠️ **Admin Dashboard**: Admins can manage pets, users, and campaigns.
- 🖼️ **Image Upload**: Upload and serve pet images through **imgbb**.
- 🔄 **Infinite Scrolling**: Automatically load more pets and campaigns as you scroll.
- 🌙 **Dark/Light Mode**: Choose the theme based on your preference.
- 💬 **Notifications**: Real-time notifications powered by **React-Notistack**.
- 💳 **Payment Gateway**: Integrated **Stripe** payment system for secure donations.
- 🖋️ **Rich Text Editor**: **React-Quill** is used for rich text formatting in donation campaign descriptions.

## 🚀 Live Demo
Check out the live version of the platform:  
🌐 **Pet Haven Live**
- https://pet-adoption-aeb39.firebaseapp.com

## 🔑 Key Features in Detail

### 🐾 **Pet Adoption**
- **Pet Listings**:  
  The pet listing section displays all available pets for adoption. You can filter the list by categories such as **pet type**, **breed**, **location**, and **age**.
  
- **Pet Details**:  
  When you click on a pet’s card, you’ll be directed to a page with more information about the pet, including:
  - Breed
  - Age
  - Special needs or medical conditions
  - Personality and backstory
  
- **Adopt a Pet**:  
  If you wish to adopt a pet, simply click the "Adopt" button, fill out an adoption form with your details, and proceed with the adoption process.

### 💖 **Donation Campaigns**
- **Create a Campaign**:  
  Users can create donation campaigns for pets in need. These campaigns help raise funds for pets’ medical treatments, food, or shelter. **React-Quill** is used here for rich text editing, allowing users to create well-formatted and descriptive content.

- **Donate**:  
  Support pets in need by donating to their campaigns. Secure payment processing is handled by **Stripe**, ensuring that your contributions are safe.

- **Campaign Progress**:  
  Users can view the progress of donations for each campaign, including the total amount raised and the remaining goal.

### 🌟 **User Dashboard**
- **Manage Pets**:  
  Once you’ve adopted a pet, you can access the "My Pets" section of the dashboard, where you can manage your adopted pets, keep track of their care, and update their status.
  
- **Campaign Participation**:  
  Track the donation campaigns you've supported, view their details, and see the impact your donations have had.

### 🌙 **Admin Dashboard**
- **Manage Pets**:  
  Admins can manage all pets listed on the platform—add new pets, edit their details, or remove them from the listings.
  
- **Manage Donations**:  
  Admins can monitor donations to each campaign, view the total raised, and approve or update donation statuses.

- **User Management**:  
  Admins can view all registered users, manage their profiles, and grant or revoke access to different sections of the site.

### 🧑‍💻 **Authentication**
- **Email & Password**:  
  Users can register and log in using their email and password. All credentials are securely stored using **Firebase Authentication**.
  
- **Social Logins**:  
  For a faster sign-in process, users can log in using their **Google**, **Facebook**, or **GitHub** accounts.

### 🖼️ **Image Upload**
- **imgbb Integration**:  
  All pet images are hosted via **imgbb**. This platform ensures that images load quickly and are always accessible in high quality.

### 💬 **Notifications**
- **React-Notistack**:  
  Notifications are displayed using **React-Notistack**. Whether it's a successful donation or an error message, users will be instantly notified in a non-intrusive manner.

### 💳 **Payment Gateway**
- **Stripe Integration**:  
  Donations are securely processed through **Stripe**. The integration ensures a smooth, secure, and hassle-free donation experience for every user.

### 🖋️ **Rich Text Editor**
- **React-Quill**:  
  **React-Quill** is used for editing campaign descriptions, making it easy for users to format their content and add rich text elements like headings, links, and bullet points.

### 💻 **Responsive Design**
- **Mobile-First Design**:  
  The platform is fully optimized for mobile devices, ensuring users have a seamless experience whether they’re on a smartphone, tablet, or desktop.

- **Dark Mode & Light Mode**:  
  Users can toggle between dark and light themes for a personalized experience. Choose the one that’s most comfortable for you!

## 🛠️ Technologies Used

### Frontend:
- **React**: The main JavaScript library used for building the dynamic, interactive user interface.
- **React Router**: To handle client-side routing and navigate between pages.
- **Tanstack Table**: A powerful table library used for displaying large datasets like pet listings with features like sorting, filtering, and pagination.
- **Tanstack Query**: Used for data fetching, caching, and synchronizing state across the application.
- **Formik**: For handling form validation and submission.
- **React-Loading-Skeleton**: For creating skeleton loaders, enhancing the user experience while data is loading.
- **Material-UI**: A library of React components that implements Google’s Material Design for a consistent and modern UI.
- **React-Notistack**: For displaying notifications in a non-intrusive way.
- **React-Quill**: For rich text formatting in campaign descriptions.
  
### Backend:
- **Node.js**: A JavaScript runtime environment used for building the backend of the application.
- **Express**: A web framework for Node.js that simplifies routing and request handling.
- **MongoDB**: A NoSQL database used to store pet data, campaigns, and user information.
- **Firebase Authentication**: A service that handles user authentication via email/password or social logins.
- **Stripe**: A secure payment gateway for processing donations.
  
### Deployment:
- **vercel**: Hosting for the frontend of the application.
- **Firebase**: For managing user authentication and storing pet data.
- **imgbb**: For hosting pet images uploaded by users.
- **MongoDB Atlas**: Cloud-based database hosting for MongoDB.
