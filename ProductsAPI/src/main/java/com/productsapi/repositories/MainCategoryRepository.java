package com.productsapi.repositories;


import com.productsapi.entities.MainCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MainCategoryRepository extends JpaRepository<MainCategory,Long> {
    public MainCategory findMainCategoryByName(String name);
}
