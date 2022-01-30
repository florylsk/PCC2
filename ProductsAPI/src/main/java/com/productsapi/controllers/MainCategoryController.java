package com.productsapi.controllers;


import com.productsapi.entities.MainCategory;
import com.productsapi.repositories.MainCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class MainCategoryController {

    @Autowired
    private MainCategoryRepository mainCategoryRepository;


    @GetMapping("/maincategories")
    public ResponseEntity<List<MainCategory>> getAllMainCategories(){
        List<MainCategory> mainCategories=mainCategoryRepository.findAll();
        return new ResponseEntity<>(mainCategories, HttpStatus.OK);
    }

    @PostMapping("/maincategories")
    public ResponseEntity<MainCategory> addNewMainCategory(@RequestBody MainCategory mainCategory){
        try{
            mainCategoryRepository.save(mainCategory);
            return new ResponseEntity<>(mainCategory,HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/maincategories/by-name/{name}")
    public ResponseEntity<MainCategory> getMainCategoryByName(@PathVariable("name") String name){
        Optional<MainCategory> maincategory= Optional.ofNullable(mainCategoryRepository.findMainCategoryByName(name));
        if(maincategory.isPresent()){
            return new ResponseEntity<>(maincategory.get(),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }



}
