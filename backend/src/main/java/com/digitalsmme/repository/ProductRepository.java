package com.digitalsmme.repository;

import com.digitalsmme.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    List<Product> findByIsActiveTrueAndInStockTrue();
    
    List<Product> findByBusinessIdAndIsActiveTrue(Long businessId);
    
    List<Product> findByCategoryAndIsActiveTrueAndInStockTrue(String category);
    
    @Query("SELECT p FROM Product p WHERE p.isActive = true AND p.inStock = true AND " +
           "(LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%')))")
    List<Product> searchProducts(@Param("search") String search);
    
    @Query("SELECT p FROM Product p WHERE p.isActive = true AND p.inStock = true AND " +
           "p.category = :category AND " +
           "(LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%')))")
    List<Product> searchProductsByCategory(@Param("category") String category, @Param("search") String search);
    
    @Query("SELECT p FROM Product p JOIN p.business b WHERE p.isActive = true AND p.inStock = true AND " +
           "LOWER(b.businessName) LIKE LOWER(CONCAT('%', :businessName, '%'))")
    List<Product> findByBusinessNameContaining(@Param("businessName") String businessName);
}
