-- Create Database
CREATE DATABASE IF NOT EXISTS digitalsmme_db;
USE digitalsmme_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('CUSTOMER', 'BUSINESS_OWNER', 'ADMIN') DEFAULT 'CUSTOMER',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Businesses Table
CREATE TABLE IF NOT EXISTS businesses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    website VARCHAR(255),
    logo_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image_url VARCHAR(500),
    stock_quantity INT DEFAULT 0,
    in_stock BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    business_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED') DEFAULT 'PENDING',
    shipping_address TEXT NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_status ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Insert Sample Data
INSERT INTO businesses (business_name, owner_name, email, phone, address, city, province, postal_code, category, description) VALUES
('Ubuntu Crafts', 'Nomsa Mbeki', 'info@ubuntucrafts.co.za', '+27 21 123 4567', '123 Long Street', 'Cape Town', 'western-cape', '8001', 'crafts', 'Authentic African handcrafted jewelry and accessories made by local artisans using traditional techniques passed down through generations.'),
('Savanna Spices', 'James Mwangi', 'orders@savannaspices.ke', '+254 20 123 4567', '456 Kenyatta Avenue', 'Nairobi', 'nairobi', '00100', 'food', 'Premium African spices, coffee beans, and traditional teas sourced directly from local farmers across East Africa.'),
('Kente Creations', 'Akosua Asante', 'hello@kentecreations.gh', '+233 30 123 4567', '789 Independence Avenue', 'Accra', 'greater-accra', '00233', 'textiles', 'Beautiful traditional Kente cloth and modern African fashion designs, bridging heritage with contemporary style.'),
('Baobab Beauty', 'Adunni Okafor', 'care@baobabbeauty.ng', '+234 1 123 4567', '321 Victoria Island', 'Lagos', 'lagos', '101241', 'beauty', 'Natural skincare products made from indigenous African ingredients like shea butter, baobab oil, and black soap.'),
('Maasai Leather Works', 'Sankale Parsitau', 'info@maasaileather.tz', '+255 27 123 4567', '654 Sokoine Road', 'Arusha', 'arusha', '23101', 'crafts', 'Handcrafted leather goods using traditional Maasai techniques, creating durable and beautiful accessories.'),
('Rooibos Republic', 'Pieter van der Merwe', 'orders@rooibosrepublic.co.za', '+27 27 123 4567', '987 Mountain View', 'Cederberg', 'western-cape', '8135', 'food', 'Organic Rooibos tea and herbal blends from the pristine Cederberg mountains, promoting health and wellness.'),
('Heritage Textiles', 'Thandiwe Nkomo', 'info@heritagetextiles.co.za', '+27 11 123 4567', '147 Commissioner Street', 'Johannesburg', 'gauteng', '2001', 'textiles', 'Traditional South African textiles including Shweshwe fabric and modern interpretations of cultural designs.');
