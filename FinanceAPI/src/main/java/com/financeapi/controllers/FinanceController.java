package com.financeapi.controllers;


import com.financeapi.entities.Transaction;
import com.financeapi.repositories.FinanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.UUID;

@RequestMapping("/api/v1")
@CrossOrigin("*")
@RestController
public class FinanceController {

    @Autowired
    private FinanceRepository financeRepository;


    @PostMapping("/save-transaction")
    public ResponseEntity<String> saveTransaction(@RequestBody Transaction transaction){
        String code = UUID.randomUUID().toString();
        transaction.setTransactionCode(code);
        Date date = new Date();
        long timeMilli = date.getTime();
        transaction.setTimeTransaction(timeMilli);
        financeRepository.save(transaction);
        return new ResponseEntity<>(code, HttpStatus.OK);
    }


}
