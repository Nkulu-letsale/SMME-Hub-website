package com.digitalsmme.service;

import com.digitalsmme.model.Business;
import com.digitalsmme.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BusinessService {
    
    @Autowired
    private BusinessRepository businessRepository;
    
    public List<Business> getAllActiveBusinesses() {
        return businessRepository.findByIsActiveTrue();
    }
    
    public Business getBusinessById(Long id) {
        Optional<Business> business = businessRepository.findById(id);
        return business.orElse(null);
    }
    
    public Business registerBusiness(Business business) {
        // Check if email already exists
        if (businessRepository.findByEmail(business.getEmail()).isPresent()) {
            throw new RuntimeException("Business with this email already exists");
        }
        
        business.setCreatedAt(LocalDateTime.now());
        business.setUpdatedAt(LocalDateTime.now());
        business.setIsActive(true);
        
        return businessRepository.save(business);
    }
    
    public List<Business> searchBusinesses(String search) {
        return businessRepository.searchBusinesses(search);
    }
    
    public List<Business> searchBusinessesByCategory(String category, String search) {
        return businessRepository.searchBusinessesByCategory(category, search);
    }
    
    public List<Business> getBusinessesByCategory(String category) {
        return businessRepository.findByCategory(category);
    }
    
    public Business updateBusiness(Long id, Business businessDetails) {
        Optional<Business> optionalBusiness = businessRepository.findById(id);
        
        if (optionalBusiness.isPresent()) {
            Business business = optionalBusiness.get();
            
            business.setBusinessName(businessDetails.getBusinessName());
            business.setOwnerName(businessDetails.getOwnerName());
            business.setEmail(businessDetails.getEmail());
            business.setPhone(businessDetails.getPhone());
            business.setAddress(businessDetails.getAddress());
            business.setCity(businessDetails.getCity());
            business.setProvince(businessDetails.getProvince());
            business.setPostalCode(businessDetails.getPostalCode());
            business.setCategory(businessDetails.getCategory());
            business.setDescription(businessDetails.getDescription());
            business.setWebsite(businessDetails.getWebsite());
            business.setUpdatedAt(LocalDateTime.now());
            
            return businessRepository.save(business);
        }
        
        return null;
    }
    
    public boolean deleteBusiness(Long id) {
        Optional<Business> business = businessRepository.findById(id);
        
        if (business.isPresent()) {
            Business businessEntity = business.get();
            businessEntity.setIsActive(false);
            businessEntity.setUpdatedAt(LocalDateTime.now());
            businessRepository.save(businessEntity);
            return true;
        }
        
        return false;
    }
}
