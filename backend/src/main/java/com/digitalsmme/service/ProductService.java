package com.digitalsmme.service;

import com.digitalsmme.model.Product;
import com.digitalsmme.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public List<Product> getAllActiveProducts() {
        return productRepository.findByIsActiveTrueAndInStockTrue();
    }
    
    public Product getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }
    
    public Product createProduct(Product product) {
        product.setCreatedAt(LocalDateTime.now());
        product.setUpdatedAt(LocalDateTime.now());
        product.setIsActive(true);
        
        return productRepository.save(product);
    }
    
    public List<Product> searchProducts(String search) {
        return productRepository.searchProducts(search);
    }
    
    public List<Product> searchProductsByCategory(String category, String search) {
        return productRepository.searchProductsByCategory(category, search);
    }
    
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategoryAndIsActiveTrueAndInStockTrue(category);
    }
    
    public List<Product> getProductsByBusiness(Long businessId) {
        return productRepository.findByBusinessIdAndIsActiveTrue(businessId);
    }
    
    public Product updateProduct(Long id, Product productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            
            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            product.setCategory(productDetails.getCategory());
            product.setImageUrl(productDetails.getImageUrl());
            product.setStockQuantity(productDetails.getStockQuantity());
            product.setInStock(productDetails.getInStock());
            product.setUpdatedAt(LocalDateTime.now());
            
            return productRepository.save(product);
        }
        
        return null;
    }
    
    public boolean deleteProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        
        if (product.isPresent()) {
            Product productEntity = product.get();
            productEntity.setIsActive(false);
            productEntity.setUpdatedAt(LocalDateTime.now());
            productRepository.save(productEntity);
            return true;
        }
        
        return false;
    }
}
