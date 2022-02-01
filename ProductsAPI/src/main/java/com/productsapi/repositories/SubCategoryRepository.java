package com.productsapi.repositories;


import com.productsapi.entities.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SubCategoryRepository extends JpaRepository<SubCategory,Long> {
    public SubCategory findSubCategoryByName(String name);

    @Query("select s from subCategory s where s.mainCategory.name = ?1")
    public List<SubCategory> findSubcategoriesByMainCategoryName(String name);
}
