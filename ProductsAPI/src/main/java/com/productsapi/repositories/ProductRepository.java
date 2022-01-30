package com.productsapi.repositories;

import com.productsapi.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;


public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("select p from product p where p.name=?1")
    public Product findProductByName(String name);

    @Transactional
    @Modifying
    @Query("delete from product p where p.name=?1")
    public void deleteProductByName(String name);
}
