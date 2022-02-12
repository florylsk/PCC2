package com.userapi.controllers;

import com.userapi.entities.Product;
import com.userapi.entities.User;
import com.userapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/users/register")
    public ResponseEntity<User> addUser(@RequestBody User user){
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        String encodedPass = passwordEncoder.encode(user.getHashedPassword());
        user.setHashedPassword(encodedPass);
        user.setAdmin(false);
        user.setProductsBought(new ArrayList<Product>());
        user.setProductsOnShoppingCart(new ArrayList<Product>());
        try{
            userRepository.save(user);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/users/login")
    public ResponseEntity<User> checkUserLogin(@RequestBody User user){
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();

        Optional<User> userData = Optional.ofNullable(userRepository.findUserByMail(user.getMail()));
        if (userData.isPresent()){
            User userFound = userData.get();
            if (passwordEncoder.matches(user.getHashedPassword(),userFound.getHashedPassword())){
                return new ResponseEntity<>(userFound,HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
            }
        }
        else{
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }

}
