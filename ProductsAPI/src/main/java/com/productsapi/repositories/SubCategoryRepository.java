package com.productsapi.repositories;


import com.productsapi.entities.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubCategoryRepository extends JpaRepository<SubCategory,Long> {
    public SubCategory findSubCategoryByName(String name);
}
