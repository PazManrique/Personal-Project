package com.luv2code.springbootecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.springbootecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
