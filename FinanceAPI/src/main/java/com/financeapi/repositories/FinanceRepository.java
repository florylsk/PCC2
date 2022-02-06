package com.financeapi.repositories;


import com.financeapi.entities.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FinanceRepository extends MongoRepository<Transaction,Long> {
}
