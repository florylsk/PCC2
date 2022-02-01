package com.productsapi.controllers;

import com.productsapi.entities.MainCategory;
import com.productsapi.entities.SubCategory;
import com.productsapi.repositories.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class SubCategoryController {

    @Autowired
    private SubCategoryRepository subCategoryRepository;


    @GetMapping("/subcategories")
    public ResponseEntity<List<SubCategory>> getAllSubCategories(@RequestParam(required = false,name="maincategory") String mainCategory){
        if (mainCategory==null){
            List<SubCategory> subcategories=subCategoryRepository.findAll();
            return new ResponseEntity<>(subcategories, HttpStatus.OK);
        }
        else{
            List<SubCategory> subCategories = subCategoryRepository.findSubcategoriesByMainCategoryName(mainCategory);
            return new ResponseEntity<>(subCategories,HttpStatus.OK);
        }

    }

    @PostMapping("/subcategories")
    public ResponseEntity<SubCategory> addNewSubCategory(@RequestBody SubCategory subCategory){
        try{
            subCategoryRepository.save(subCategory);
            return new ResponseEntity<>(subCategory,HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/subcategories/by-name/{name}")
    public ResponseEntity<SubCategory> getSubCategoryByName(@PathVariable("name") String name){
        Optional<SubCategory> subcategoryData= Optional.ofNullable(subCategoryRepository.findSubCategoryByName(name));
        if(subcategoryData.isPresent()){
            return new ResponseEntity<>(subcategoryData.get(),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }

}
