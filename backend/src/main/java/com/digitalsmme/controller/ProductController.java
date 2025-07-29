package com.digitalsmme.controller;

import com.digitalsmme.model.Product;
import com.digitalsmme.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        List<Product> products;
        
        if (search != null && !search.trim().isEmpty()) {
            if (category != null && !category.trim().isEmpty()) {
                products = productService.searchProductsByCategory(category, search);
            } else {
                products = productService.searchProducts(search);
            }
        } else if (category != null && !category.trim().isEmpty()) {
            products = productService.getProductsByCategory(category);
        } else {
            products = productService.getAllActiveProducts();
        }
        
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<Map<String, Object>> createProduct(@RequestBody Product product) {
        try {
            Product savedProduct = productService.createProduct(product);
            return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Product created successfully",
                "data", savedProduct
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of(
                    "success", false,
                    "message", "Product creation failed: " + e.getMessage()
                ));
        }
    }
    
    @GetMapping("/business/{businessId}")
    public ResponseEntity<List<Product>> getProductsByBusiness(@PathVariable Long businessId) {
        List<Product> products = productService.getProductsByBusiness(businessId);
        return ResponseEntity.ok(products);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        boolean deleted = productService.deleteProduct(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
