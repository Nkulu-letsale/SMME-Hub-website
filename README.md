# Digital SMME Hub

A comprehensive e-commerce platform empowering local African businesses through digital commerce and secure mobile money payments.

## 🚀 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.2** - Java framework
- **Spring Data JPA** - Data access layer
- **Spring Security** - Authentication and authorization
- **MySQL 8** - Relational database

## 📁 Project Structure

\`\`\`
digital-smme-hub/
├── frontend/                 # Next.js React application
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── contexts/           # React Context providers
│   └── public/             # Static assets
├── backend/                # Java Spring Boot application
│   ├── src/main/java/      # Java source code
│   ├── src/main/resources/ # Configuration files
│   └── database/           # SQL schema and migrations
└── README.md
\`\`\`

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Java 17+
- MySQL 8+
- Maven 3.6+

### Frontend Setup
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

### Backend Setup
\`\`\`bash
# Navigate to backend directory
cd backend

# Install dependencies and run
mvn spring-boot:run

# Or build and run JAR
mvn clean package
java -jar target/digital-smme-hub-0.0.1-SNAPSHOT.jar
\`\`\`

### Database Setup
\`\`\`bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE digitalsmme_db;

# Import schema
mysql -u root -p digitalsmme_db < database/schema.sql
\`\`\`

## 🌟 Features

### For Customers
- Browse registered African businesses
- Search and filter products by category
- Secure shopping cart and checkout
- Multiple payment methods (Mobile Money, Cards)
- Order tracking and history

### For Business Owners
- Easy business registration
- Product catalog management
- Order management dashboard
- Sales analytics and reporting
- Customer communication tools

### Platform Features
- Responsive design for all devices
- Dark/Light theme support
- Multi-language support (planned)
- Real-time notifications
- SEO optimized

## 🔧 API Endpoints

### Business Management
- `GET /api/businesses` - Get all active businesses
- `POST /api/businesses/register` - Register new business
- `GET /api/businesses/{id}` - Get business by ID
- `PUT /api/businesses/{id}` - Update business
- `DELETE /api/businesses/{id}` - Deactivate business

### Product Management
- `GET /api/products` - Get all products with filters
- `POST /api/products` - Create new product
- `GET /api/products/{id}` - Get product by ID
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Deactivate product

## 🗄️ Database Schema

### Core Tables
- **users** - Customer and business owner accounts
- **businesses** - Registered business information
- **products** - Product catalog
- **orders** - Customer orders
- **order_items** - Order line items

## 🚀 Deployment

### Frontend (Vercel)
\`\`\`bash
# Deploy to Vercel
npm run build
vercel --prod
\`\`\`

### Backend (Docker)
\`\`\`dockerfile
FROM openjdk:17-jdk-slim
COPY target/digital-smme-hub-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@digitalsmme.co.za or join our community Discord.

## 🙏 Acknowledgments

- African SMME community for inspiration
- Open source contributors
- Local artisans and entrepreneurs
\`\`\`

Perfect! 🎉 I've successfully converted your entire Digital SMME Hub from TypeScript to JavaScript and added a complete Java Spring Boot backend with MySQL database integration!

## ✅ **What's Been Converted:**

### 🔄 **Frontend Changes:**
- **All `.tsx` files → `.jsx`** (React components in JavaScript)
- **All `.ts` files → `.js`** (Context providers, utilities)
- **Removed TypeScript types** and interfaces
- **Maintained all functionality** with JavaScript syntax

### ☕ **Java Backend Added:**
- **Spring Boot 3.2** with Java 17
- **MySQL Database** with complete schema
- **REST API Controllers** for businesses and products
- **JPA Entities** and Repositories
- **Service Layer** with business logic
- **CORS Configuration** for frontend integration

### 🗄️ **Database Features:**
- **Complete MySQL Schema** with relationships
- **Sample Data** for testing
- **User Management** system
- **Business Registration** with validation
- **Product Catalog** management
- **Order Processing** system

## 🚀 **How to Run:**

### **Frontend (Next.js):**
\`\`\`bash
npm install
npm run dev  # Runs on http://localhost:3000
\`\`\`

### **Backend (Java Spring Boot):**
\`\`\`bash
cd backend
mvn spring-boot:run  # Runs on http://localhost:8080
\`\`\`

### **Database (MySQL):**
\`\`\`bash
mysql -u root -p
CREATE DATABASE digitalsmme_db;
# Import the schema.sql file
\`\`\`

## 🌟 **Key Features Now Available:**

✅ **Business Registration** - Stores data in MySQL database  
✅ **Product Management** - Full CRUD operations  
✅ **Search & Filtering** - Advanced database queries  
✅ **API Integration** - Frontend connects to Java backend  
✅ **Data Persistence** - All information saved to database  
✅ **Scalable Architecture** - Professional enterprise setup  

Your Digital SMME Hub is now a full-stack application with JavaScript frontend and Java backend! 🌍✨
