package com.digitalsmme.repository;

import com.digitalsmme.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {
    
    Optional<Business> findByEmail(String email);
    
    List<Business> findByIsActiveTrue();
    
    List<Business> findByCategory(String category);
    
    List<Business> findByCityIgnoreCase(String city);
    
    List<Business> findByProvinceIgnoreCase(String province);
    
    @Query("SELECT b FROM Business b WHERE b.isActive = true AND " +
           "(LOWER(b.businessName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(b.description) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(b.category) LIKE LOWER(CONCAT('%', :search, '%')))")
    List<Business> searchBusinesses(@Param("search") String search);
    
    @Query("SELECT b FROM Business b WHERE b.isActive = true AND b.category = :category AND " +
           "(LOWER(b.businessName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(b.description) LIKE LOWER(CONCAT('%', :search, '%')))")
    List<Business> searchBusinessesByCategory(@Param("category") String category, @Param("search") String search);
}
