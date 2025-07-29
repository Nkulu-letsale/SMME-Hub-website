package com.digitalsmme.controller;

import com.digitalsmme.model.Business;
import com.digitalsmme.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/businesses")
@CrossOrigin(origins = "http://localhost:3000")
public class BusinessController {
    
    @Autowired
    private BusinessService businessService;
    
    @GetMapping
    public ResponseEntity<List<Business>> getAllBusinesses() {
        List<Business> businesses = businessService.getAllActiveBusinesses();
        return ResponseEntity.ok(businesses);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Business> getBusinessById(@PathVariable Long id) {
        Business business = businessService.getBusinessById(id);
        if (business != null) {
            return ResponseEntity.ok(business);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerBusiness(@RequestBody Business business) {
        try {
            Business savedBusiness = businessService.registerBusiness(business);
            return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Business registered successfully",
                "data", savedBusiness
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of(
                    "success", false,
                    "message", "Registration failed: " + e.getMessage()
                ));
        }
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Business>> searchBusinesses(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String category) {
        
        List<Business> businesses;
        
        if (query != null && !query.trim().isEmpty()) {
            if (category != null && !category.trim().isEmpty()) {
                businesses = businessService.searchBusinessesByCategory(category, query);
            } else {
                businesses = businessService.searchBusinesses(query);
            }
        } else if (category != null && !category.trim().isEmpty()) {
            businesses = businessService.getBusinessesByCategory(category);
        } else {
            businesses = businessService.getAllActiveBusinesses();
        }
        
        return ResponseEntity.ok(businesses);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Business> updateBusiness(@PathVariable Long id, @RequestBody Business business) {
        Business updatedBusiness = businessService.updateBusiness(id, business);
        if (updatedBusiness != null) {
            return ResponseEntity.ok(updatedBusiness);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBusiness(@PathVariable Long id) {
        boolean deleted = businessService.deleteBusiness(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
