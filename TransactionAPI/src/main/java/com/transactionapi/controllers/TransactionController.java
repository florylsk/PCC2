package com.transactionapi.controllers;


import com.transactionapi.entities.Product;
import com.transactionapi.entities.Transaction;
import com.transactionapi.entities.User;
import com.transactionapi.repositories.ProductRepository;
import com.transactionapi.repositories.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1")
@CrossOrigin("*")
@RestController
public class TransactionController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/process-transaction")
    public ResponseEntity<String> processTransaction(@RequestBody Transaction transaction){
        Optional<User> userData = userRepository.findById(Long.valueOf(transaction.getUserId()));
        if (userData.isPresent()){
            User user = userData.get();
            List<Product> productsOnCart = user.getProductsOnShoppingCart();
            List<Product> productsBought = user.getProductsBought();
            for (Product p : productsOnCart){
                productsBought.add(p);
            }
            productsOnCart= Collections.<Product>emptyList();
            user.setProductsBought(productsBought);
            user.setProductsOnShoppingCart(productsOnCart);
            userRepository.save(user);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<Transaction> httpEntity = new HttpEntity<>(transaction,headers);
            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.postForObject("http://localhost:8084/api/v1/save-transaction",httpEntity,String.class);
            return new ResponseEntity<>(response,HttpStatus.OK);


        }
        else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




}
