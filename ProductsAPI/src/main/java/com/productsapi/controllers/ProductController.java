package com.productsapi.controllers;

import com.productsapi.entities.Product;
import com.productsapi.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;


    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false,name = "type") String type, @RequestParam(required = false,name="maincategory") String mainCategory){
        if(type==null && mainCategory == null){
            List<Product> products = productRepository.findAll();
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
        else if(mainCategory==null && type != null){
            if(type.equals("recommended")){
                List<Product> products=productRepository.findRecommendedProducts();
                return new ResponseEntity<>(products,HttpStatus.OK);
            }
            else if (type.equals("interesting")){
                List<Product> products=productRepository.findInterestingProducts();
                return new ResponseEntity<>(products,HttpStatus.OK);
            }

        }
        else if (mainCategory != null && type == null){
            List<Product> products = productRepository.findProductByMainCategory(mainCategory);
            return new ResponseEntity<>(products,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/products")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        if (product==null){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        try{
            productRepository.save(product);
            return new ResponseEntity<>(product,HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(product,HttpStatus.OK);
        }

    }

    @PutMapping("/products")
    public ResponseEntity<Product> modifyProduct(@RequestBody Product productUpdated){
        Optional<Product> productData = productRepository.findById(productUpdated.getId());
        if(productData.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        else{
            Product newProduct= productData.get();
            newProduct.setBrand(productUpdated.getBrand());
            newProduct.setPrice(productUpdated.getPrice());
            newProduct.setName(productUpdated.getName());
            newProduct.setMainCategory(productUpdated.getMainCategory());
            newProduct.setSubCategory(productUpdated.getSubCategory());
            newProduct.setMainImage(productUpdated.getMainImage());
            newProduct.setSecondaryImage(productUpdated.getSecondaryImage());
            try{
                productRepository.save(newProduct);
                return new ResponseEntity<>(newProduct,HttpStatus.OK);
            }
            catch(Exception e){
                System.out.println(e);
                return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }
    }

    @DeleteMapping("/products")
    public ResponseEntity<Product> deleteAllProducts(){
        try{
            productRepository.deleteAll();
            return new ResponseEntity<>(null,HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/products/by-id/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") long id){
        Optional<Product> productData = productRepository.findById(id);
        if(productData.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(productData.get(),HttpStatus.OK);
        }
    }

    @GetMapping("/products/by-name/{name}")
    public ResponseEntity<Product> getProductByName(@PathVariable("name") String name){
        Optional<Product> productData = Optional.ofNullable(productRepository.findProductByName(name));
        if(productData.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(productData.get(),HttpStatus.OK);
        }
    }

    @DeleteMapping("/products/by-id/{id}")
    public ResponseEntity<Product> deleteProductById(@PathVariable("id") long id){
        Optional<Product> productData = productRepository.findById(id);
        if(productData.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        else{
            try{
                productRepository.deleteById(id);
                return new ResponseEntity<>(null,HttpStatus.OK);
            }
            catch(Exception e){
                System.out.println(e);
                return new ResponseEntity(null,HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }
    }

    @DeleteMapping("/products/by-name/{name}")
    public ResponseEntity<Product> deleteProductByName(@PathVariable("name") String name){
        Optional<Product> productData = Optional.ofNullable(productRepository.findProductByName(name));
        if(productData.isEmpty()){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        else{
            try{
                productRepository.deleteProductByName(productData.get().getName());
                return new ResponseEntity<>(null,HttpStatus.OK);
            }
            catch(Exception e){
                System.out.println(e);
                return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }
    }







}
